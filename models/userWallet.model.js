const mongoose = require("mongoose");

const userWalletSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    amount: { type: Number, default: 0 },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = new mongoose.model("UserWallet", userWalletSchema);

// models/UserWallet.js
// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/sequelize'); // Adjust the path to your Sequelize instance
// const User = require("./user.model"); // Adjust according to your models' structure

// class UserWallet extends Model {}

// UserWallet.init(
//     {
//         userId: { // Renamed to userId for better naming conventions
//             type: DataTypes.INTEGER, // Assuming userId is an integer
//             references: {
//                 model: User, // Reference to the User model
//                 key: 'id',
//             },
//         },
//         amount: {
//             type: DataTypes.FLOAT, // Using FLOAT for better handling of decimal values
//             defaultValue: 0,
//         },
//     },
//     {
//         sequelize,
//         modelName: 'UserWallet',
//         tableName: 'user_wallets', // Corresponding table name in PostgreSQL
//         underscored: true, // Enables snake_case for column names
//         timestamps: true, // Automatically adds createdAt and updatedAt fields
//         versionKey: false, // Disable versionKey
//     }
// );

// // Define associations
// UserWallet.belongsTo(User, {
//     foreignKey: 'userId',
//     as: 'user', // Alias for easy access
// });

// module.exports = UserWallet;
