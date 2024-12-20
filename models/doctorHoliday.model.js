const mongoose = require("mongoose");

const holidaySchema = new mongoose.Schema(
  {
    date: { type: String, default: "" },
    reason: { type: String, default: "Doctor is not available On This Day" },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      default: null,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Holiday", holidaySchema);

// models/Holiday.js
// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/sequelize'); // Import your Sequelize instance
// const Doctor = require("./doctor.model"); // Assuming you have a Doctor model

// class Holiday extends Model {}

// Holiday.init(
//     {
//         date: {
//             type: DataTypes.STRING,
//             defaultValue: "", // Default to an empty string
//         },
//         reason: {
//             type: DataTypes.STRING,
//             defaultValue: "Doctor is not available On This Day", // Default reason
//         },
//         doctorId: {
//             type: DataTypes.INTEGER, // Assuming doctor ID is an integer
//             references: {
//                 model: Doctor,
//                 key: 'id',
//             },
//             defaultValue: null, // Default to null
//         }
//     },
//     {
//         sequelize,
//         modelName: 'Holiday',
//         tableName: 'holidays', // Corresponding table name in PostgreSQL
//         underscored: true,       // Ensures that the database uses snake_case for column names
//         timestamps: true,        // Automatically add createdAt and updatedAt fields
//         versionKey: false,       // Disable versionKey
//     }
// );

// // Set up the relationship with Doctor
// Holiday.belongsTo(Doctor, {
//     foreignKey: 'doctorId',
//     as: 'doctor',
// });

// module.exports = Holiday;
