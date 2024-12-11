// models/Payment.js
const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    merchantRID: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    validTimeLimit: {
      type: Number,
      required: true,
    },
    returnUrl: {
      type: String,
      required: true,
    },
    customerMail: {
      type: String,
      required: true,
    },
    customerMobile: {
      type: String,
      required: true,
    },
    mode: {
      type: String,
      enum: ["WEB", "MOBILE"],
      required: true,
    },
    orderSummary: {
      type: String,
      required: true,
    },
    customerReference: {
      type: String,
      required: true,
    },
    transactionId: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["PENDING", "COMPLETED", "FAILED"],
      default: "PENDING",
    },
  },
  { timestamps: true }
);

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
