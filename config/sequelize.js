// config/sequelize.js
require("dotenv").config(); // Load environment variables from .env file
const { Sequelize } = require("sequelize");

// Create a Sequelize instance using environment variables
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST, // Use the DB_HOST from environment variables
    dialect: process.env.DB_DIALECT, // Use the DB_DIALECT from environment variables
    logging: console.log, // Enables SQL logging
    define: {
      timestamps: true, // Automatically adds createdAt and updatedAt fields
    },
  }
);

// Test the connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log(
      "Connection to the database has been established successfully."
    );
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

testConnection();

module.exports = sequelize;
