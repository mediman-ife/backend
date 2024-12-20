const mongoose = require("mongoose");

const { DOCTOR_PAYMENT_REQUEST_TYPE } = require("../types/constant");

const withdrawRequestSchema = new mongoose.Schema(
  {
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
    amount: { type: Number, default: 0 },
    paymentGateway: { type: String, default: "" },
    paymentDetails: { type: Array, default: [] },
    status: { type: Number, default: 1, enum: DOCTOR_PAYMENT_REQUEST_TYPE },
    payDate: String,
    declineReason: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = new mongoose.model("WithdrawRequest", withdrawRequestSchema);

// models/WithdrawRequest.js
// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/sequelize'); // Import your Sequelize instance
// const Doctor = require("./doctor.model"); // Assuming you have a Doctor model
// const { DOCTOR_PAYMENT_REQUEST_TYPE } = require('../types/constant'); // Importing your payment request types

// class WithdrawRequest extends Model {}

// WithdrawRequest.init(
//     {
//         doctorId: {
//             type: DataTypes.INTEGER, // Assuming doctor ID is an integer
//             references: {
//                 model: Doctor,
//                 key: 'id',
//             },
//         },
//         amount: {
//             type: DataTypes.FLOAT, // Use FLOAT for amount
//             defaultValue: 0, // Default to 0
//         },
//         paymentGateway: {
//             type: DataTypes.STRING,
//             defaultValue: "", // Default to empty string
//         },
//         paymentDetails: {
//             type: DataTypes.JSONB, // Store payment details as JSONB for flexibility
//             defaultValue: [], // Default to an empty array
//         },
//         status: {
//             type: DataTypes.INTEGER,
//             defaultValue: 1,
//             validate: {
//                 isIn: [DOCTOR_PAYMENT_REQUEST_TYPE], // Validation using imported enum
//             },
//         },
//         payDate: {
//             type: DataTypes.STRING, // Store as string or DATE depending on the intended usage
//         },
//         declineReason: {
//             type: DataTypes.STRING,
//         },
//     },
//     {
//         sequelize,
//         modelName: 'WithdrawRequest',
//         tableName: 'withdraw_requests', // Corresponding table name in PostgreSQL
//         underscored: true, // Ensures that the database uses snake_case for column names
//         timestamps: true, // Automatically add createdAt and updatedAt fields
//         versionKey: false, // Disable versionKey
//     }
// );

// // Define the relationship
// WithdrawRequest.belongsTo(Doctor, {
//     foreignKey: 'doctorId',
//     as: 'doctor',
// });

// module.exports = WithdrawRequest;
