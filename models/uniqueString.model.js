const mongoose = require("mongoose");

const uniqueStringSchema = new mongoose.Schema(
  {
    string: { type: String, unique: true },
    appointment: { type: mongoose.Schema.Types.ObjectId, ref: "Appointment" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = new mongoose.model("UniqueString", uniqueStringSchema);

// models/UniqueString.js
// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/sequelize'); // Adjust the path to your Sequelize instance
// const Appointment = require("./appointment.model"); // Adjust according to your models' structure

// class UniqueString extends Model {}

// UniqueString.init(
//     {
//         string: {
//             type: DataTypes.STRING,
//             unique: true, // Ensuring the string is unique
//             allowNull: false, // Set this to true if you want to require a value
//         },
//         appointmentId: { // Renamed to appointmentId for better naming conventions
//             type: DataTypes.INTEGER,  // Assuming appointmentId is an integer
//             references: {
//                 model: Appointment,
//                 key: 'id',
//             },
//         },
//     },
//     {
//         sequelize,
//         modelName: 'UniqueString',
//         tableName: 'unique_strings', // Corresponding table name in PostgreSQL
//         underscored: true, // Ensures snake_case for column names
//         timestamps: true, // Automatically handles createdAt and updatedAt fields
//         versionKey: false, // Disable versionKey
//     }
// );

// // Define associations
// UniqueString.belongsTo(Appointment, {
//     foreignKey: 'appointmentId',
//     as: 'appointment', // Alias for easy access
// });

// module.exports = UniqueString;
