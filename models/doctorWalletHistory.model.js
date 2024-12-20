const mongoose = require("mongoose");
const moment = require("moment");

const doctorWalletHistorySchema = new mongoose.Schema(
  {
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
    appointment: { type: mongoose.Schema.Types.ObjectId, ref: "Appointment" },
    amount: { type: Number, default: 0 },
    date: { type: String, default: moment().format("YYYY-MM-DD") },
    time: { type: String, default: moment().format("hh:mm: A") },
    type: { type: Number, enum: [1, 2] }, // 1 for deposit when booking complete  2 when withdraw request approve and doctor paid by admin
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = new mongoose.model("DoctorWalletHistory", doctorWalletHistorySchema);

// models/DoctorWalletHistory.js
// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/sequelize'); // Import your Sequelize instance
// const Doctor = require("./doctor.model"); // Assuming you have a Doctor model
// const Appointment = require("./appointment.model"); // Assuming you have an Appointment model

// class DoctorWalletHistory extends Model {}

// DoctorWalletHistory.init(
//     {
//         doctorId: {
//             type: DataTypes.INTEGER, // Assuming doctor ID is an integer
//             references: {
//                 model: Doctor,
//                 key: 'id',
//             },
//         },
//         appointmentId: {
//             type: DataTypes.INTEGER, // Assuming appointment ID is also an integer
//             references: {
//                 model: Appointment,
//                 key: 'id',
//             },
//         },
//         amount: {
//             type: DataTypes.FLOAT, // Use FLOAT for amount
//             defaultValue: 0, // Default to 0
//         },
//         date: {
//             type: DataTypes.STRING,
//             // You may choose to use a DATE type depending on your application needs
//             defaultValue: new Date().toISOString().split('T')[0], // Default to current date in YYYY-MM-DD
//         },
//         time: {
//             type: DataTypes.STRING,
//             defaultValue: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }), // Default to current time in hh:mm AM/PM
//         },
//         type: {
//             type: DataTypes.INTEGER,
//             validate: {
//                 isIn: [[1, 2]], // Validate to ensure either 1 or 2
//             },
//         },
//     },
//     {
//         sequelize,
//         modelName: 'DoctorWalletHistory',
//         tableName: 'doctor_wallet_histories', // Corresponding table name in PostgreSQL
//         underscored: true, // Ensures that the database uses snake_case for column names
//         timestamps: true, // Automatically add createdAt and updatedAt fields
//         versionKey: false, // Disable versionKey
//     }
// );

// // Define the relationships
// DoctorWalletHistory.belongsTo(Doctor, {
//     foreignKey: 'doctorId',
//     as: 'doctor',
// });

// DoctorWalletHistory.belongsTo(Appointment, {
//     foreignKey: 'appointmentId',
//     as: 'appointment',
// });

// module.exports = DoctorWalletHistory;
