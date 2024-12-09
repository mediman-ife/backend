const axios = require("axios");

const BASE_URL = process.env.MARX_BASE_URL; // Base URL from the .env file
const headers = {
  user_secret: process.env.MARX_USER_SECRET, // Secret key for authorization
};

const PaymentModel = {
  /**
   * Create an order in the Marx payment gateway
   * @param {Object} orderDetails - Details of the order to be created
   * @returns {Object} Response from the Marx API
   */
  createOrder: async (orderDetails) => {
    const url = `${BASE_URL}/v2/ipg/orders`;
    try {
      const response = await axios.post(url, orderDetails, { headers });
      return response.data;
    } catch (error) {
      console.error(
        "Error creating order:",
        error.response?.data || error.message
      );
      throw new Error(
        error.response?.data?.message || "Failed to create order."
      );
    }
  },

  /**
   * Initiate a payment request in the Marx payment gateway
   * @param {string} trId - Transaction ID received from Marx API
   * @param {string} merchantRID - Merchant Reference ID
   * @returns {Object} Response from the Marx API
   */
  initiatePayment: async (trId, merchantRID) => {
    const url = `${BASE_URL}/v2/ipg/orders/${trId}`;
    try {
      const response = await axios.put(url, { merchantRID }, { headers });
      return response.data;
    } catch (error) {
      console.error(
        "Error initiating payment:",
        error.response?.data || error.message
      );
      throw new Error(
        error.response?.data?.message || "Failed to initiate payment."
      );
    }
  },
};

module.exports = PaymentModel;
