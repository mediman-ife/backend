const PaymentModel = require("../models/payment.model");

// Create an order
exports.createOrder = async (req, res) => {
  try {
    const orderDetails = req.body;
    const response = await PaymentModel.createOrder(orderDetails);
    res.status(200).json(response);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error creating order", details: error.message });
  }
};

// Redirect to payment URL
exports.redirectToPayment = (req, res) => {
  const { payUrl } = req.query;
  if (!payUrl) {
    return res.status(400).send("Payment URL not provided.");
  }
  res.redirect(payUrl);
};

// Handle payment return
exports.handlePaymentReturn = async (req, res) => {
  const { tr, merchantRID } = req.query;

  if (!tr || !merchantRID) {
    return res.status(400).send("Invalid return parameters.");
  }

  try {
    const result = await PaymentModel.initiatePayment(tr, merchantRID);
    res.status(200).json(result);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error initiating payment", details: error.message });
  }
};
