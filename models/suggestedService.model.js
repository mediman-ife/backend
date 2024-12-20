const mongoose = require("mongoose");

const suggestedServiceSchema = new mongoose.Schema(
  {
    name:  String,
    description:  String,
    doctor:  String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
module.exports =  mongoose.model("SuggestedService", suggestedServiceSchema);

// models/SuggestedService.js
// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/sequelize'); // Adjust the path to your Sequelize instance

// class SuggestedService extends Model {}

// SuggestedService.init(
//     {
//         name: {
//             type: DataTypes.STRING, // Define as STRING
//             allowNull: false, // Assuming you want to require a name
//         },
//         description: {
//             type: DataTypes.STRING, // Define as STRING
//             allowNull: true, // Optional description
//         },
//         doctor: {
//             type: DataTypes.STRING, // Define as STRING
//             allowNull: true, // Optional doctor field
//         },
//     },
//     {
//         sequelize,
//         modelName: 'SuggestedService',
//         tableName: 'suggested_services', // Corresponding table name in PostgreSQL
//         underscored: true, // Ensures snake_case for column names
//         timestamps: true, // Automatically manages createdAt and updatedAt
//         versionKey: false, // Disable versionKey
//     }
// );

// module.exports = SuggestedService;
