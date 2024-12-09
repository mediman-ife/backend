const express = require("express");
const validatePaymentParams = require("../middleware/payment");
const paymentController = require("../controller/payment");

const router = express.Router();

router.post(
  "/create-order",
  validatePaymentParams,
  paymentController.createOrder
);
router.get("/payment-return", paymentController.handlePaymentReturn);

module.exports = router;
