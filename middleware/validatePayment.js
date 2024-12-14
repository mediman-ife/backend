// src/middleware/paymentValidation.js
const { body, query, validationResult } = require("express-validator");
const marxConfig = require("../config/payment");

// Validation middleware for creating a payment order
const validateCreateOrder = [
  body("amount")
    .isFloat({ min: 0 })
    .withMessage("Amount must be a positive number"),

  body("customerEmail")
    .optional()
    .isEmail()
    .withMessage("Invalid email address"),

  body("customerMobile")
    .optional()
    .isMobilePhone()
    .withMessage("Invalid mobile number"),

  body("mode")
    .isIn(Object.values(marxConfig.PAYMENT_MODES))
    .withMessage("Invalid payment mode"),

  body("customerReference")
    .notEmpty()
    .withMessage("Customer reference is required"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: "Validation failed for payment order creation",
      });
    }
    next();
  },
];

// Validation middleware for verifying payment return
const validatePaymentReturn = [
  query("tr").notEmpty().withMessage("Transaction reference (tr) is required"),

  query("mur")
    .notEmpty()
    .withMessage("Merchant unique reference (mur) is required"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: "Invalid payment return parameters",
      });
    }
    next();
  },
];

module.exports = {
  validateCreateOrder,
  validatePaymentReturn,
};
