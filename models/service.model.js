const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    status: { type: Boolean, default: true },
    isDelete: { type: Boolean, default: false },
    isDemo: { type: Boolean, default: false },
    subService: [{ type: String, default:[] }],


  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Service", serviceSchema);

// models/Service.js
// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/sequelize'); // Import your Sequelize instance

// class Service extends Model {}

// Service.init(
//     {
//         name: {
//             type: DataTypes.STRING,
//             allowNull: false,  // Assuming 'name' is required
//         },
//         image: {
//             type: DataTypes.STRING,
//             allowNull: true,   // Assuming image is optional
//         },
//         status: {
//             type: DataTypes.BOOLEAN,
//             defaultValue: true, // Default to true
//         },
//         isDelete: {
//             type: DataTypes.BOOLEAN,
//             defaultValue: false, // Default to false
//         },
//         isDemo: {
//             type: DataTypes.BOOLEAN,
//             defaultValue: false, // Default to false
//         },
//         subService: {
//             type: DataTypes.ARRAY(DataTypes.STRING), // Using an array of strings
//             defaultValue: [],  // Default to an empty array
//         },
//     },
//     {
//         sequelize,
//         modelName: 'Service',
//         tableName: 'services',  // Correspond to the table name in PostgreSQL
//         underscored: true,       // Ensures that the database uses snake_case for column names
//         timestamps: true,        // Automatically add createdAt and updatedAt columns
//         versionKey: false,       // Disable versionKey (like __v in Mongoose)
//     }
// );

// module.exports = Service;
