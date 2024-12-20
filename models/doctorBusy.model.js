const mongoose = require("mongoose");

const doctorBusySchema = new mongoose.Schema(
  {
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
    time: [{ type: String, default: "" }],
    date: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

doctorBusySchema.index({ doctor: 1 });

module.exports = mongoose.model("DoctorBusy", doctorBusySchema);

// models/DoctorBusy.js
// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/sequelize'); // Import your Sequelize instance
// const Doctor = require("./doctor.model"); // Assuming you have a Doctor model

// class DoctorBusy extends Model {}

// DoctorBusy.init(
//     {
//         doctorId: {
//             type: DataTypes.INTEGER, // Assuming the doctor ID is an integer
//             references: {
//                 model: Doctor,
//                 key: 'id',
//             },
//         },
//         time: {
//             type: DataTypes.JSONB,   // To store an array of time slots as JSONB
//             defaultValue: [],         // Default to an empty array
//         },
//         date: {
//             type: DataTypes.STRING,   // Use STRING for date (or DATE if you prefer to use a date data type)
//         },
//     },
//     {
//         sequelize,
//         modelName: 'DoctorBusy',
//         tableName: 'doctor_busies', // Corresponding table name in PostgreSQL
//         underscored: true,           // Ensures that the database uses snake_case for column names
//         timestamps: true,            // Automatically add createdAt and updatedAt fields
//         versionKey: false,           // Disable versionKey
//     }
// );

// // Set up the relationship with Doctor
// DoctorBusy.belongsTo(Doctor, {
//     foreignKey: 'doctorId',
//     as: 'doctor',
// });

// module.exports = DoctorBusy;
