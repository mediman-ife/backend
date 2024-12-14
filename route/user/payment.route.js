// src/routes/paymentRoutes.js
const express = require("express");
const router = express.Router();
const paymentController = require("../../controller/user/payment.controller");
const {
  validateCreateOrder,
  validatePaymentReturn,
} = require("../../middleware/validatePayment");

// Route to create a new payment order
router.post(
  "/create-order",
  // validateCreateOrder,
  paymentController.createPaymentOrder
);

// Route to handle payment return/callback
router.get(
  "/return",
  validatePaymentReturn,
  paymentController.handlePaymentReturn
);

// Route to verify and complete payment
router.put("/complete-payment", paymentController.completePayment);

module.exports = router;
