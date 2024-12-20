const mongoose = require("mongoose");
const {
  CANCEL_BY,
  PAYMENT_STATUS,
  PAYMENT_GATEWAY,
  APPOINTMENT_STATUS,
  APPOINTMENT_TYPE,
} = require("../types/constant");

const appointmentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
    },

    service: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
    },

    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubPatient",
    },

    time: { type: String, default: "" },

    status: {
      type: Number,
      enum: APPOINTMENT_STATUS,
      default: 1,
    },

    appointmentId: { type: String, unique: true },

    date: {
      type: String,
      default: "",
    },

    isReviewed: { type: Boolean, default: false },

    type: { type: Number, enum: APPOINTMENT_TYPE }, // 0 for pending 1 for paid

    paymentGateway: { type: Number, enum: PAYMENT_GATEWAY },

    duration: { type: Number, default: 0 },

    amount: { type: Number, default: 0 },
    tax: { type: Number, default: 0 },
    withoutTax: { type: Number, default: 0 },

    discount: { type: Number, default: 0 },
    coupon: String,

    adminEarning: { type: Number, default: 0 },
    adminCommissionPercent: { type: Number, default: 0 },

    doctorEarning: { type: Number, default: 0 },

    isSettle: { type: Boolean, default: false },

    cancel: {
      reason: String,
      person: {
        type: String,
        enum: CANCEL_BY,
      },
      time: String,
      date: String,
    },

    checkInTime: String,
    checkOutTime: String,

    details: String,
    image: String
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Appointment", appointmentSchema);

// models/Appointment.js
// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/sequelize'); // Import your sequelize instance
// const { PAYMENT_STATUS, APPOINTMENT_STATUS, APPOINTMENT_TYPE, PAYMENT_GATEWAY, CANCEL_BY } = require('../types/constant');

// class Appointment extends Model {}

// Appointment.init(
//     {
//         user: {
//             type: DataTypes.INTEGER, // Adjust based on how you plan to handle ObjectId (typically INTEGER for PK)
//             references: {
//                 model: 'Users', // Assuming a table named 'Users'
//                 key: 'id',
//             },
//         },
//         doctor: {
//             type: DataTypes.INTEGER,
//             references: {
//                 model: 'Doctors',
//                 key: 'id',
//             },
//         },
//         service: {
//             type: DataTypes.INTEGER,
//             references: {
//                 model: 'Services',
//                 key: 'id',
//             },
//         },
//         patient: {
//             type: DataTypes.INTEGER,
//             references: {
//                 model: 'SubPatients',
//                 key: 'id',
//             },
//         },
//         time: {
//             type: DataTypes.STRING,
//             defaultValue: "",
//         },
//         status: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             defaultValue: 1,
//             validate: {
//                 isIn: [APPOINTMENT_STATUS],
//             },
//         },
//         appointmentId: {
//             type: DataTypes.STRING,
//             unique: true,
//         },
//         date: {
//             type: DataTypes.STRING,
//             defaultValue: "",
//         },
//         isReviewed: {
//             type: DataTypes.BOOLEAN,
//             defaultValue: false,
//         },
//         type: {
//             type: DataTypes.INTEGER,
//             validate: {
//                 isIn: [APPOINTMENT_TYPE],
//             },
//         },
//         paymentGateway: {
//             type: DataTypes.INTEGER,
//             validate: {
//                 isIn: [PAYMENT_GATEWAY],
//             },
//         },
//         duration: {
//             type: DataTypes.INTEGER,
//             defaultValue: 0,
//         },
//         amount: {
//             type: DataTypes.FLOAT,
//             defaultValue: 0,
//         },
//         tax: {
//             type: DataTypes.FLOAT,
//             defaultValue: 0,
//         },
//         withoutTax: {
//             type: DataTypes.FLOAT,
//             defaultValue: 0,
//         },
//         discount: {
//             type: DataTypes.FLOAT,
//             defaultValue: 0,
//         },
//         coupon: {
//             type: DataTypes.STRING,
//         },
//         adminEarning: {
//             type: DataTypes.FLOAT,
//             defaultValue: 0,
//         },
//         adminCommissionPercent: {
//             type: DataTypes.FLOAT,
//             defaultValue: 0,
//         },
//         doctorEarning: {
//             type: DataTypes.FLOAT,
//             defaultValue: 0,
//         },
//         isSettle: {
//             type: DataTypes.BOOLEAN,
//             defaultValue: false,
//         },
//         cancel: {
//             reason: {
//                 type: DataTypes.STRING,
//             },
//             person: {
//                 type: DataTypes.INTEGER,
//                 validate: {
//                     isIn: [CANCEL_BY],
//                 },
//             },
//             time: {
//                 type: DataTypes.STRING,
//             },
//             date: {
//                 type: DataTypes.STRING,
//             },
//         },
//         checkInTime: {
//             type: DataTypes.STRING,
//         },
//         checkOutTime: {
//             type: DataTypes.STRING,
//         },
//         details: {
//             type: DataTypes.STRING,
//         },
//         image: {
//             type: DataTypes.STRING,
//         },
//     },
//     {
//         sequelize,
//         modelName: 'Appointment',
//         tableName: 'appointments', // Correspond to the table name in PostgreSQL
//         underscored: true,         // Use snake_case for column names in the database
//         timestamps: true,          // Automatically add createdAt and updatedAt fields
//         versionKey: false,         // Disable the version key
//     }
// );

// module.exports = Appointment;
