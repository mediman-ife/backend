const axios = require("axios");
const PaymentTransaction = require("../../models/payment.model");
const marxConfig = require("../../config/payment");

class PaymentController {
  // Create a new payment order
  async createPaymentOrder(req, res) {
    try {
      const {
        amount,
        customerEmail,
        customerMobile,
        mode = "WEB",
        orderSummary,
        customerReference,
        currency = "LKR", // Default to LKR if not specified
      } = req.body;

      // Validate currency
      if (!["LKR", "USD"].includes(currency)) {
        return res.status(400).json({
          message: "Unsupported currency",
        });
      }

      // Generate a unique merchant reference ID
      const merchantRID = `MR-${Date.now()}-${Math.random()
        .toString(36)
        .substr(2, 9)}`;

      // Get base URL and merchant secret based on currency
      const baseUrl = marxConfig.getBaseUrl(currency);
      const merchantSecret = marxConfig.getMerchantSecret(currency);

      // Prepare request payload for Marx IPG
      const payload = {
        merchantRID,
        amount,
        validTimeLimit: marxConfig.DEFAULT_VALID_TIME_LIMIT,
        returnUrl:
          process.env.BASE_URL || "https://yourdomain.com/payment/return",
        customerMail: customerEmail,
        customerMobile,
        mode,
        orderSummary,
        customerReference,
        currency,
      };

      // Make API call to Marx IPG
      const response = await axios.post(`${baseUrl}/v2/ipg/orders`, payload, {
        headers: {
          "Content-Type": "application/json",
          user_secret: merchantSecret,
        },
      });

      // Save transaction details in database
      const transaction = new PaymentTransaction({
        merchantRID,
        amount,
        customerEmail,
        customerMobile,
        mode,
        orderSummary,
        customerReference,
        paymentUrl: response.data.data.payUrl,
        status: "PENDING",
        currency,
      });
      await transaction.save();

      // Respond with payment URL
      res.status(201).json({
        message: "Payment order created successfully",
        paymentUrl: response.data.data.payUrl,
        merchantRID,
      });
    } catch (error) {
      console.error("Payment order creation error:", error);
      res.status(500).json({
        message: "Failed to create payment order",
        error: error.response ? error.response.data : error.message,
      });
    }
  }

  // Handle payment return/callback
  async handlePaymentReturn(req, res) {
    try {
      const { tr, mur } = req.query;

      // Find the corresponding transaction
      const transaction = await PaymentTransaction.findOne({
        merchantRID: mur,
      });

      if (!transaction) {
        return res.status(404).json({
          message: "Transaction not found",
        });
      }

      // Redirect to frontend with transaction details
      const redirectUrl = new URL(process.env.FRONTEND_RETURN_URL);
      redirectUrl.searchParams.append("tr", tr);
      redirectUrl.searchParams.append("mur", mur);

      res.redirect(redirectUrl.toString());
    } catch (error) {
      console.error("Payment return handling error:", error);
      res.status(500).json({
        message: "Error processing payment return",
        error: error.message,
      });
    }
  }

  // Complete payment
  async completePayment(req, res) {
    try {
      const { tr, merchantRID } = req.body;

      // Find the transaction to get the currency
      const transaction = await PaymentTransaction.findOne({ merchantRID });

      if (!transaction) {
        return res.status(404).json({
          message: "Transaction not found",
        });
      }

      // Get base URL and merchant secret based on currency
      const baseUrl = marxConfig.getBaseUrl(transaction.currency);
      const merchantSecret = marxConfig.getMerchantSecret(transaction.currency);

      // Make API call to Marx IPG to confirm payment
      const response = await axios.put(
        `${baseUrl}/v2/ipg/orders/${tr}`,
        { merchantRID },
        {
          headers: {
            "Content-Type": "application/json",
            user_secret: merchantSecret,
          },
        }
      );

      // Update transaction in database
      const updatedTransaction = await PaymentTransaction.findOneAndUpdate(
        { merchantRID },
        {
          status:
            response.data.data.summaryResult === "SUCCESS"
              ? "SUCCESS"
              : "FAILED",
          gatewayResponse: response.data.data,
          transactionId: tr,
        },
        { new: true }
      );

      // Respond with payment status
      res.status(200).json({
        message: "Payment processed successfully",
        status: updatedTransaction.status,
        transactionDetails: response.data.data,
      });
    } catch (error) {
      console.error("Payment completion error:", error);
      res.status(500).json({
        message: "Failed to complete payment",
        error: error.response ? error.response.data : error.message,
      });
    }
  }
}

module.exports = new PaymentController();
