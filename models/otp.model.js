const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema(
  {
    email: { type: String, default: "" },
    otp: { type: Number },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("OTP", otpSchema);

// models/Otp.js
// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/sequelize'); // Adjust the path to your Sequelize instance

// class Otp extends Model {}

// Otp.init(
//     {
//         email: {
//             type: DataTypes.STRING,
//             allowNull: true, // Allow email to be null
//             defaultValue: "",
//         },
//         otp: {
//             type: DataTypes.INTEGER, // OTP can be stored as an INTEGER
//             allowNull: true, // Allow OTP to be null
//         },
//     },
//     {
//         sequelize,
//         modelName: 'Otp',
//         tableName: 'otps', // Corresponding table name in PostgreSQL
//         underscored: true, // Ensures snake_case for column names
//         timestamps: true, // Automatically manages createdAt and updatedAt
//         createdAt: 'created_at', // Custom column name for createdAt
//         updatedAt: 'updated_at', // Custom column name for updatedAt
//         versionKey: false, // Disable versionKey
//     }
// );

// module.exports = Otp;
