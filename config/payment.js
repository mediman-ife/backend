require("dotenv").config();

module.exports = {
  // Function to get base URL based on currency
  getBaseUrl: (currency) => {
    switch (currency) {
      case "LKR":
        return "https://dev.app.marx.lk/api";
      case "USD":
        return "https://app.global.marx.lk/api";
      default:
        throw new Error("Unsupported currency");
    }
  },

  // Function to get merchant secret based on currency
  getMerchantSecret: (currency) => {
    switch (currency) {
      case "LKR":
        return process.env.MARX_LKR_MERCHANT_SECRET
      case "USD":
        return process.env.MARX_USD_MERCHANT_SECRET
      default:
        throw new Error("Unsupported currency");
    }
  },

  PAYMENT_MODES: {
    WEB: "WEB",
    SMS: "SMS",
    MAIL: "MAIL",
  },

  RESPONSE_CODES: {
    SUCCESS: 0,
    FAILURE: 1,
  },

  DEFAULT_VALID_TIME_LIMIT: 5, // hours
};
