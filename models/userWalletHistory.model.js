const mongoose = require("mongoose");
const { PAYMENT_GATEWAY, WALLET_HISTORY_TYPE } = require("../types/constant")
const moment = require('moment')
const userWalletHistorySchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        wallet: { type: mongoose.Schema.Types.ObjectId, ref: "UserWallet" },
        amount: { type: Number, default: 0 },
        date: { type: String, default: "" },
        paymentGateway: { type: Number, enum: PAYMENT_GATEWAY },
        type: { type: Number, enum: WALLET_HISTORY_TYPE },// 1 for amount loaded, 2 for amount deduct at the time of appointment
        appointment: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' },
        couponId: { type: String, default: "" },
        couponAmount: { type: Number },
        uniqueId: { type: String },
        time: { type: String },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = new mongoose.model("UserWalletHistory", userWalletHistorySchema);

// models/UserWalletHistory.js
// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/sequelize'); // Adjust the path to your Sequelize configuration
// const User = require("./user.model"); // Adjust according to your models' structure
// const UserWallet = require('./userWallet.model'); // Adjust according to your models' structure
// const Appointment = require("./appointment.model"); // Adjust according to your models' structure
// const { PAYMENT_GATEWAY, WALLET_HISTORY_TYPE } = require('../types/constant'); // Ensure this path is correct

// class UserWalletHistory extends Model {}

// UserWalletHistory.init(
//     {
//         userId: {
//             type: DataTypes.INTEGER, // Assuming userId can be an integer
//             references: {
//                 model: User,
//                 key: 'id',
//             },
//         },
//         walletId: {
//             type: DataTypes.INTEGER, // Assuming walletId can also be an integer
//             references: {
//                 model: UserWallet,
//                 key: 'id',
//             },
//         },
//         amount: {
//             type: DataTypes.FLOAT, // Number type
//             defaultValue: 0,
//         },
//         date: {
//             type: DataTypes.STRING,
//             defaultValue: '',
//         },
//         paymentGateway: {
//             type: DataTypes.ENUM(...PAYMENT_GATEWAY), // Enum values for payment gateways
//         },
//         type: {
//             type: DataTypes.ENUM(...WALLET_HISTORY_TYPE), // Enum values for wallet history types
//         },
//         appointmentId: { // Renamed to accommodate better practice in naming conventions
//             type: DataTypes.INTEGER,
//             references: {
//                 model: Appointment,
//                 key: 'id',
//             },
//         },
//         couponId: {
//             type: DataTypes.STRING,
//             defaultValue: '',
//         },
//         couponAmount: {
//             type: DataTypes.FLOAT, // Assuming couponAmount can be a floating number
//         },
//         uniqueId: {
//             type: DataTypes.STRING,
//         },
//         time: {
//             type: DataTypes.STRING,
//         },
//     },
//     {
//         sequelize,
//         modelName: 'UserWalletHistory',
//         tableName: 'user_wallet_histories', // Corresponding table name in PostgreSQL
//         underscored: true, // Ensure snake_case for column names
//         timestamps: true, // Automatically add createdAt and updatedAt fields
//         versionKey: false, // Disable versionKey
//     }
// );

// // Define associations
// UserWalletHistory.belongsTo(User, {
//     foreignKey: 'userId',
//     as: 'user',
// });

// UserWalletHistory.belongsTo(UserWallet, {
//     foreignKey: 'walletId',
//     as: 'wallet',
// });

// UserWalletHistory.belongsTo(Appointment, {
//     foreignKey: 'appointmentId',
//     as: 'appointment',
// });

// module.exports = UserWalletHistory;



