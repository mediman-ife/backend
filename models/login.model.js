const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema(
  {
    login: { type: Boolean, default: false },
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Login", loginSchema);

// models/Login.js
// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/sequelize'); // Adjust the path to your Sequelize instance

// class Login extends Model {}

// Login.init(
//     {
//         login: {
//             type: DataTypes.BOOLEAN,
//             defaultValue: false, // Default value for the login field
//         },
//     },
//     {
//         sequelize,
//         modelName: 'Login',
//         tableName: 'logins', // Corresponding table name in PostgreSQL
//         underscored: true, // Ensures snake_case for column names
//         timestamps: true, // Automatically manages createdAt and updatedAt
//         createdAt: 'created_at', // Custom column name for createdAt
//         updatedAt: 'updated_at', // Custom column name for updatedAt
//         versionKey: false, // Disable versionKey
//     }
// );

// module.exports = Login;
