const mongoose = require("mongoose");

const settingSchema = new mongoose.Schema(
  {
    tnc: { type: String, default: "" },
    privacyPolicyLink: { type: String, default: "" },
    tax: { type: Number, default: 0 }, // tax in percentage

    razorPayId: { type: String, default: "" },
    isRazorPay: { type: Boolean, default: false },
    razorSecretKey: { type: String, default: "" },

    isStripePay: { type: Boolean, default: false },
    stripePublishableKey: { type: String, default: "" },
    stripeSecretKey: { type: String, default: "" },

    maintenanceMode: { type: Boolean, default: false },

    zegoAppId: { type: String, default: "ZEGO APP ID" },
    zegoAppSignIn: { type: String, default: "ZEGO APP SIGN IN" },

    currencySymbol: { type: String, default: "" },
    currencyName: { type: String, default: "" },

    flutterWaveKey: { type: String, default: "" },
    isFlutterWave: { type: Boolean, default: false },

    // cashAfterService: { type: Boolean, default: false },

    commissionPercent: { type: Number, default: 10 },
    minWithdraw: { type: Number, default: 0 },

    firebaseKey: { type: Object, default: {} }, //firebase.json handle notification

    durationOfvideo: { type: Number, default: 0 }, //always be in seconds

    geminiKey: { type: String, default: "" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Setting", settingSchema);

// models/Setting.js
// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/sequelize'); // Adjust the path to your Sequelize instance

// class Setting extends Model {}

// Setting.init(
//     {
//         tnc: {
//             type: DataTypes.STRING,
//             defaultValue: "",
//         },
//         privacyPolicyLink: {
//             type: DataTypes.STRING,
//             defaultValue: "",
//         },
//         tax: {
//             type: DataTypes.FLOAT,  // Using FLOAT to handle percentages
//             defaultValue: 0,
//         },
//         razorPayId: {
//             type: DataTypes.STRING,
//             defaultValue: "",
//         },
//         isRazorPay: {
//             type: DataTypes.BOOLEAN,
//             defaultValue: false,
//         },
//         razorSecretKey: {
//             type: DataTypes.STRING,
//             defaultValue: "",
//         },
//         isStripePay: {
//             type: DataTypes.BOOLEAN,
//             defaultValue: false,
//         },
//         stripePublishableKey: {
//             type: DataTypes.STRING,
//             defaultValue: "",
//         },
//         stripeSecretKey: {
//             type: DataTypes.STRING,
//             defaultValue: "",
//         },
//         maintenanceMode: {
//             type: DataTypes.BOOLEAN,
//             defaultValue: false,
//         },
//         zegoAppId: {
//             type: DataTypes.STRING,
//             defaultValue: "ZEGO APP ID",
//         },
//         zegoAppSignIn: {
//             type: DataTypes.STRING,
//             defaultValue: "ZEGO APP SIGN IN",
//         },
//         currencySymbol: {
//             type: DataTypes.STRING,
//             defaultValue: "",
//         },
//         currencyName: {
//             type: DataTypes.STRING,
//             defaultValue: "",
//         },
//         flutterWaveKey: {
//             type: DataTypes.STRING,
//             defaultValue: "",
//         },
//         isFlutterWave: {
//             type: DataTypes.BOOLEAN,
//             defaultValue: false,
//         },
//         commissionPercent: {
//             type: DataTypes.FLOAT,  // Using FLOAT for commissions
//             defaultValue: 10,
//         },
//         minWithdraw: {
//             type: DataTypes.FLOAT,  // Using FLOAT for monetary values
//             defaultValue: 0,
//         },
//         firebaseKey: {
//             type: DataTypes.JSONB,  // Use JSONB to store the firebase keys
//             defaultValue: {},
//         },
//         durationOfVideo: {
//             type: DataTypes.INTEGER, // Duration in seconds, defined as INTEGER
//             defaultValue: 0,
//         },
//         geminiKey: {
//             type: DataTypes.STRING,
//             defaultValue: "",
//         },
//     },
//     {
//         sequelize,
//         modelName: 'Setting',
//         tableName: 'settings', // Corresponding table name in PostgreSQL
//         underscored: true, // Ensures snake_case for column names
//         timestamps: true, // Automatically manages createdAt and updatedAt
//         versionKey: false, // Disable versionKey
//     }
// );

// module.exports = Setting;
