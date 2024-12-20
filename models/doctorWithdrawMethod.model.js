const mongoose = require("mongoose");

const doctorWithdrawMethodSchema = new mongoose.Schema(
  {
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor", default: null },
    paymentMethods: [
      {
        paymentGateway: { type: String, default: "" },
        paymentDetails: { type: Array, default: [] },
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("DoctorWithdrawMethod", doctorWithdrawMethodSchema);

// models/DoctorWithdrawMethod.js
// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/sequelize'); // Import your Sequelize instance
// const Doctor = require("./doctor.model"); // Assuming you have a Doctor model

// class DoctorWithdrawMethod extends Model {}

// DoctorWithdrawMethod.init(
//     {
//         doctorId: {
//             type: DataTypes.INTEGER, // Assuming doctor ID is an integer
//             references: {
//                 model: Doctor,
//                 key: 'id',
//             },
//             defaultValue: null, // Default to null if not provided
//         },
//         paymentMethods: {
//             type: DataTypes.JSONB, // Storing payment methods as JSONB to accommodate nested structure
//             defaultValue: [],      // Default to an empty array
//         },
//     },
//     {
//         sequelize,
//         modelName: 'DoctorWithdrawMethod',
//         tableName: 'doctor_withdraw_methods', // Corresponding table name in PostgreSQL
//         underscored: true,                    // Ensures that the database uses snake_case for column names
//         timestamps: true,                     // Automatically add createdAt and updatedAt fields
//         versionKey: false,                    // Disable versionKey
//     }
// );

// // Define the relationship
// DoctorWithdrawMethod.belongsTo(Doctor, {
//     foreignKey: 'doctorId',
//     as: 'doctor',
// });

// module.exports = DoctorWithdrawMethod;
