// routes/paymentRoutes.js
const express = require("express");
const {
  createOrder,
  verifyTransaction,
} = require("../controller/payment");

const router = express.Router();

router.post("/create-order", createOrder);

router.put("/verify-transaction/:transactionId", (req, res) => {
  const transactionId = req.params.transactionId;
  verifyTransaction(transactionId, res);
});

module.exports = router;
