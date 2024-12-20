const mongoose = require("mongoose");
const { COUPON_TYPE, DISCOUNT_TYPE } = require("../types/constant");

const couponSchema = new mongoose.Schema(
  {
    code: { type: String, default: "" },
    title: { type: String, default: "" },
    description: { type: String, default: "" },
    expiryDate: { type: String, default: "" },
    discountPercent: { type: Number},
    maxDiscount: { type: Number},
    user: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    type: { type: Number, default: 1, enum: COUPON_TYPE },
    discountType: { type: Number, default: 1, enum: DISCOUNT_TYPE },
    isActive: { type: Boolean, default: true },
    minAmountToApply: { type: Number, default: 0 },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Coupon", couponSchema);

// models/Coupon.js
// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/sequelize'); // Import your Sequelize instance
// const User = require("./user.model"); // Assuming you have a User model

// class Coupon extends Model {}

// Coupon.init(
//     {
//         code: {
//             type: DataTypes.STRING,
//             defaultValue: "", // Default to empty string
//         },
//         title: {
//             type: DataTypes.STRING,
//             defaultValue: "", // Default to empty string
//         },
//         description: {
//             type: DataTypes.STRING,
//             defaultValue: "", // Default to empty string
//         },
//         expiryDate: {
//             type: DataTypes.STRING,
//             defaultValue: "", // Default to empty string
//         },
//         discountPercent: {
//             type: DataTypes.NUMBER, // Use DataTypes.FLOAT or DataTypes.INTEGER based on your need
//         },
//         maxDiscount: {
//             type: DataTypes.NUMBER, // Use DataTypes.FLOAT or DataTypes.INTEGER based on your need
//         },
//         // Change the user association to accommodate many-to-many relationships
//         type: {
//             type: DataTypes.INTEGER,
//             defaultValue: 1,
//             validate: {
//                 isIn: [Object.values(COUPON_TYPE)], // Validating against COUPON_TYPE enums
//             },
//         },
//         discountType: {
//             type: DataTypes.INTEGER,
//             defaultValue: 1,
//             validate: {
//                 isIn: [Object.values(DISCOUNT_TYPE)], // Validating against DISCOUNT_TYPE enums
//             },
//         },
//         isActive: {
//             type: DataTypes.BOOLEAN,
//             defaultValue: true, // Default to true
//         },
//         minAmountToApply: {
//             type: DataTypes.NUMBER, // Use DataTypes.FLOAT or DataTypes.INTEGER as needed
//             defaultValue: 0, // Default to 0
//         },
//     },
//     {
//         sequelize,
//         modelName: 'Coupon',
//         tableName: 'coupons', // Corresponding table name in PostgreSQL
//         underscored: true,     // Ensures that the database uses snake_case for column names
//         timestamps: true,      // Automatically add createdAt and updatedAt fields
//         versionKey: false,     // Disable versionKey
//     }
// );

// // If you want to implement a many-to-many relationship with users
// Coupon.belongsToMany(User, { through: 'UserCoupons', foreignKey: 'couponId', as: 'users' });
// User.belongsToMany(Coupon, { through: 'UserCoupons', foreignKey: 'userId', as: 'coupons' });

// module.exports = Coupon;
