const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema(
  {
    month: {
      type: String,
      required: true,
      default: "",
    },
    attendCount: {
      type: Number,
      required: true,
      default: 0,
    },
    absentCount: {
      type: Number,
      required: true,
      default: 0,
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },

    attendDates: {
      type: [String],
      default: [],
    },
    absentDates: {
      type: [String],
      default: [],
    },
    totalDays: {
      type: Number,
      required: true,
      default: 0,
    },
    checkInTime: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
attendanceSchema.index({ doctor: 1 });

module.exports = mongoose.model("Attendance", attendanceSchema);

// models/Attendance.js
// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/sequelize'); // Import your Sequelize instance
// const Doctor = require('./doctor.model'); // Assuming you have a Doctor model defined

// class Attendance extends Model {}

// Attendance.init(
//     {
//         month: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             defaultValue: "", // Default to empty string
//         },
//         attendCount: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             defaultValue: 0,
//         },
//         absentCount: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             defaultValue: 0,
//         },
//         doctorId: { // Rename 'doctor' to 'doctorId' for clarity
//             type: DataTypes.INTEGER, // Assuming doctor ID is an integer
//             allowNull: false,
//             references: {
//                 model: Doctor,
//                 key: 'id',
//             },
//         },
//         attendDates: {
//             type: DataTypes.ARRAY(DataTypes.STRING), // Using an array of strings
//             defaultValue: [],
//         },
//         absentDates: {
//             type: DataTypes.ARRAY(DataTypes.STRING), // Using an array of strings
//             defaultValue: [],
//         },
//         totalDays: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             defaultValue: 0,
//         },
//         checkInTime: {
//             type: DataTypes.STRING,
//             defaultValue: "",
//         },
//     },
//     {
//         sequelize,
//         modelName: 'Attendance',
//         tableName: 'attendances',  // Correspond to the table name in PostgreSQL
//         underscored: true,           // Ensures that the database uses snake_case for column names
//         timestamps: true,            // Automatically add createdAt and updatedAt fields
//         versionKey: false,           // Disable versionKey (like __v in Mongoose)
//     }
// );

// // Set up the relationship with the Doctor model
// Attendance.belongsTo(Doctor, {
//     foreignKey: 'doctorId', // This specifies the foreign key in the attendances table
//     as: 'doctor',           // Optional, for including related models using this alias
// });

// module.exports = Attendance;
