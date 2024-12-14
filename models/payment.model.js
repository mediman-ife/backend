const mongoose = require("mongoose");

const PaymentTransactionSchema = new mongoose.Schema(
  {
    merchantRID: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    amount: {
      type: Number,
      required: true,
      min: 0,
    },

    currency: {
      type: String,
      required: true,
      enum: ["LKR", "USD"],
      default: "LKR",
    },

    customerEmail: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    customerMobile: {
      type: String,
      required: true,
      trim: true,
    },

    mode: {
      type: String,
      enum: ["WEB", "SMS", "MAIL"],
      default: "WEB",
    },

    orderSummary: {
      type: String,
      trim: true,
    },

    customerReference: {
      type: String,
      trim: true,
    },

    paymentUrl: {
      type: String,
      trim: true,
    },

    status: {
      type: String,
      enum: ["PENDING", "SUCCESS", "FAILED", "CANCELLED"],
      default: "PENDING",
    },

    transactionId: {
      type: String,
      trim: true,
    },

    gatewayResponse: {
      type: mongoose.Schema.Types.Mixed,
      default: null,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },

    updatedAt: {
      type: Date,
      default: null,
    },

    metadata: {
      type: mongoose.Schema.Types.Mixed,
      default: null,
    },
  },
  {
    timestamps: true,
    strict: true,
  }
);

// Indexes for improved query performance
PaymentTransactionSchema.index({
  merchantRID: 1,
  status: 1,
  createdAt: -1,
});

// Virtual for formatted amount with currency
PaymentTransactionSchema.virtual("formattedAmount").get(function () {
  return `${this.currency} ${this.amount.toFixed(2)}`;
});

// Method to check if payment is successful
PaymentTransactionSchema.methods.isSuccessful = function () {
  return this.status === "SUCCESS";
};

// Pre-save hook to validate email format
PaymentTransactionSchema.pre("save", function (next) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (this.customerEmail && !emailRegex.test(this.customerEmail)) {
    next(new Error("Invalid email format"));
  }
  next();
});

// Create and export the model
const PaymentTransaction = mongoose.model(
  "PaymentTransaction",
  PaymentTransactionSchema
);

module.exports = PaymentTransaction;
