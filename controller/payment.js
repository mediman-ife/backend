// controllers/paymentController.js
const axios = require('axios');
require('dotenv').config();

const merchantSecret = process.env.MARX_USER_SECRET;

const createOrder = async (req, res) => {
    const orderData = {
        merchantRID: req.body.merchantRID,
        amount: req.body.amount,
        validTimeLimit: req.body.validTimeLimit,
        returnUrl: req.body.returnUrl,
        customerMail: req.body.customerMail,
        customerMobile: req.body.customerMobile,
        mode: req.body.mode,
        orderSummary: req.body.orderSummary,
        customerReference: req.body.customerReference,
    };

    try {
        const response = await axios.post('https://dev.app.marx.lk/api/v2/ipg/orders', orderData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${merchantSecret}`,
            },
        });

        if (response.data.status === 0) {
            res.json({ payUrl: response.data.data.payUrl });
        } else {
            throw new Error(`Error processing request: ${response.data.message}`);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const verifyTransaction = async (transactionId, res) => {
    try {
        const response = await axios.put(`https://dev.app.marx.lk/api/v2/ipg/orders/${transactionId}`, {}, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${merchantSecret}`,
            },
        });

        if (response.data.status === 0) {
            res.json({ transactionDetails: response.data.data.transactionDetails });
        } else {
            throw new Error(`Error verifying transaction: ${response.data.message}`);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createOrder,
    verifyTransaction,
};

