const mongoose = require("mongoose");

const withdrawSchema = new mongoose.Schema(
  {
    name: { type: String, default: "" },
    image: { type: String, default: "" },
    details: { type: Array, default: [] },
    isEnabled: { type: Boolean, default: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

withdrawSchema.index({ createdAt: -1 });

module.exports = mongoose.model("Withdraw", withdrawSchema);

// models/Withdraw.js
// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/sequelize'); // Import your Sequelize instance

// class Withdraw extends Model {}

// Withdraw.init(
//     {
//         name: {
//             type: DataTypes.STRING,
//             defaultValue: "", // Default to an empty string
//         },
//         image: {
//             type: DataTypes.STRING,
//             defaultValue: "", // Default to an empty string
//         },
//         details: {
//             type: DataTypes.JSONB, // Use JSONB to store an array of details
//             defaultValue: [], // Default to an empty array
//         },
//         isEnabled: {
//             type: DataTypes.BOOLEAN,
//             defaultValue: true, // Default to true
//         },
//     },
//     {
//         sequelize,
//         modelName: 'Withdraw',
//         tableName: 'withdraws', // Corresponding table name in PostgreSQL
//         underscored: true, // Ensures that the database uses snake_case for column names
//         timestamps: true, // Automatically add createdAt and updatedAt fields
//         versionKey: false, // Disable versionKey
//     }
// );

// // Create indexes
// Withdraw.init({
//     // Define any fields or properties here if needed
// }, {
//     indexes: [
//         {
//             unique: false,
//             fields: ['created_at'], // Index for created_at
//             order: 'DESC', // Descending order
//         },
//     ],
// });

// module.exports = Withdraw;
