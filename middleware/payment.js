const Payment = require("../models/Payment");

module.exports = async (req, res, next) => {
  const { merchantRID } = req.body;

  // Check for duplicates
  const existingPayment = await Payment.findOne({ merchantRID });
  if (existingPayment) {
    return res
      .status(400)
      .json({ error: "Duplicate merchantRID is not allowed." });
  }

  next();
};
