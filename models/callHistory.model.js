const mongoose = require("mongoose");
const generateId = require('../middleware/generateId')
const callHistorySchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      default: null, // Set default to null instead of an empty string
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null, // Set default to null instead of an empty string
    },
    callConnect: {
      type: Boolean,
      default: false,
    },
    callStartTime: {
      type: String,
      default: "",
    },
    callEndTime: {
      type: String,
      default: "",
    },
    duration: {
      type: String,
      default: "00:00:00",
    },
    role: {
      type: String,
      default: "",
    },
    callId:{
      type: String,
      default:""

    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

callHistorySchema.index({ createdAt: -1 });
callHistorySchema.index({ callerId: 1 });
callHistorySchema.index({ doctor: 1 });
callHistorySchema.index({ user: 1 });

module.exports = mongoose.model("CallHistory", callHistorySchema);

// models/CallHistory.js
// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/sequelize'); // Import your Sequelize instance
// const Doctor = require("./doctor.model"); // Import the Doctor model
// const User = require("./user.model");     // Import the User model

// class CallHistory extends Model {}

// CallHistory.init(
//     {
//         doctorId: {
//             type: DataTypes.INTEGER,        // Assuming the doctor ID is an integer
//             references: {
//                 model: Doctor,
//                 key: 'id',
//             },
//             defaultValue: null,              // Default to null
//         },
//         userId: {
//             type: DataTypes.INTEGER,        // Assuming the user ID is an integer
//             references: {
//                 model: User,
//                 key: 'id',
//             },
//             defaultValue: null,              // Default to null
//         },
//         callConnect: {
//             type: DataTypes.BOOLEAN,
//             defaultValue: false,            // Default to false
//         },
//         callStartTime: {
//             type: DataTypes.STRING,
//             defaultValue: "",                // Default to empty string
//         },
//         callEndTime: {
//             type: DataTypes.STRING,
//             defaultValue: "",                // Default to empty string
//         },
//         duration: {
//             type: DataTypes.STRING,
//             defaultValue: "00:00:00",       // Default duration
//         },
//         role: {
//             type: DataTypes.STRING,
//             defaultValue: "",                // Default to empty string
//         },
//         callId: {
//             type: DataTypes.STRING,
//             defaultValue: "",                // Default to empty string
//         },
//     },
//     {
//         sequelize,
//         modelName: 'CallHistory',
//         tableName: 'call_histories',     // Corresponding table name in PostgreSQL
//         underscored: true,                // Ensures that the database uses snake_case for column names
//         timestamps: true,                 // Automatically add createdAt and updatedAt fields
//         versionKey: false,                // Disable versionKey
//     }
// );

// // Set up the relationships with other models
// CallHistory.belongsTo(Doctor, {
//     foreignKey: 'doctorId',           // Foreign key in call_histories table
//     as: 'doctor',                      // Optional alias for the association
// });

// CallHistory.belongsTo(User, {
//     foreignKey: 'userId',             // Foreign key in call_histories table
//     as: 'user',                        // Optional alias for the association
// });

// module.exports = CallHistory;

