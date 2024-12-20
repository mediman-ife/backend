const mongoose = require("mongoose");
const { DOCTOR_PAYMENT_TYPE, DOCTOR_TYPE } = require("../types/constant");

const doctorSchema = new mongoose.Schema(
  {
    uniqueId: {
      type: Number,
      default: null,
    },

    name: { type: String, default: "" },
    image: { type: String, default: "" },
    email: { type: String, default: "" },
    password: String,
    age: { type: Number },
    mobile: { type: String, default: "" },
    gender: { type: String, default: "" },
    dob: { type: String, default: "" },
    countryCode: { type: String, default: "" },

    isBlock: { type: Boolean, default: false },
    fcmToken: { type: String, default: "" },
    isDelete: { type: Boolean, default: false },

    bookingCount: { type: Number, default: 0 },
    currentBookingCount: { type: Number, default: 0 },
    wallet: { type: Number, default: 0 },
    totalWallet: { type: Number, default: 0 },
    patients: { type: Number, default: 0 },

    service: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Service",
      },
    ],

    charge: { type: Number, default: 0 },
    commission: { type: Number, default: 0 },
    designation: { type: String, default: "" },
    degree: [{ type: String, default: "" }],
    language: [{ type: String, default: "" }],
    experience: { type: Number, default: 1 },
    type: { type: Number, default: 3, enum: DOCTOR_TYPE }, //offline online both

    latitude: { type: String, default: "" },
    longitude: { type: String, default: "" },
    country: { type: String, default: "" },
    clinicName: { type: String, default: "" },
    address: { type: String, default: "" },

    awards: [{ type: String, default: "" }],
    expertise: [{ type: String, default: "" }],
    yourSelf: { type: String, default: "" },
    education: { type: String, default: "" },
    experienceDetails: [{ type: String, default: "" }],

    reviewCount: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },

    timeSlot: { type: Number, default: 30 },

    schedule: [
      {
        day: { type: String, default: "" },
        startTime: { type: String, default: "" },
        endTime: { type: String, default: "" },
        breakStartTime: { type: String, default: "" },
        breakEndTime: { type: String, default: "" },
        timeSlot: { type: Number, default: 30 },
        isBreak:{type: Boolean, default: true}
      },
    ],

    isAttend: { type: Boolean, default: false },
    showDialog: { type: Boolean, default: false },

    isBusy: { type: Boolean, default: false },
    isOnline: { type: Boolean, default: false },
    callId: { type: String, default: "" }, //for videoCall

    oneSignalId: { type: String, default: "" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Doctor", doctorSchema);

// models/Doctor.js
// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/sequelize'); // Import your Sequelize instance
// const { DOCTOR_PAYMENT_TYPE, DOCTOR_TYPE } = require('../types/constant');

// class Doctor extends Model {}

// Doctor.init(
//     {
//         uniqueId: {
//             type: DataTypes.INTEGER,
//             defaultValue: null,
//         },
//         name: {
//             type: DataTypes.STRING,
//             defaultValue: "",
//         },
//         image: {
//             type: DataTypes.STRING,
//             defaultValue: "",
//         },
//         email: {
//             type: DataTypes.STRING,
//             defaultValue: "",
//         },
//         password: {
//             type: DataTypes.STRING,
//         },
//         age: {
//             type: DataTypes.INTEGER,
//         },
//         mobile: {
//             type: DataTypes.STRING,
//             defaultValue: "",
//         },
//         gender: {
//             type: DataTypes.STRING,
//             defaultValue: "",
//         },
//         dob: {
//             type: DataTypes.STRING,
//             defaultValue: "",
//         },
//         countryCode: {
//             type: DataTypes.STRING,
//             defaultValue: "",
//         },
//         isBlock: {
//             type: DataTypes.BOOLEAN,
//             defaultValue: false,
//         },
//         fcmToken: {
//             type: DataTypes.STRING,
//             defaultValue: "",
//         },
//         isDelete: {
//             type: DataTypes.BOOLEAN,
//             defaultValue: false,
//         },
//         bookingCount: {
//             type: DataTypes.INTEGER,
//             defaultValue: 0,
//         },
//         currentBookingCount: {
//             type: DataTypes.INTEGER,
//             defaultValue: 0,
//         },
//         wallet: {
//             type: DataTypes.FLOAT, // Use FLOAT for decimal values
//             defaultValue: 0.0,
//         },
//         totalWallet: {
//             type: DataTypes.FLOAT,
//             defaultValue: 0.0,
//         },
//         patients: {
//             type: DataTypes.INTEGER,
//             defaultValue: 0,
//         },
//         charge: {
//             type: DataTypes.FLOAT,
//             defaultValue: 0.0,
//         },
//         commission: {
//             type: DataTypes.FLOAT,
//             defaultValue: 0.0,
//         },
//         designation: {
//             type: DataTypes.STRING,
//             defaultValue: "",
//         },
//         degree: {
//             type: DataTypes.ARRAY(DataTypes.STRING), // Array of strings
//             defaultValue: [],
//         },
//         language: {
//             type: DataTypes.ARRAY(DataTypes.STRING), // Array of strings
//             defaultValue: [],
//         },
//         experience: {
//             type: DataTypes.INTEGER,
//             defaultValue: 1,
//         },
//         type: {
//             type: DataTypes.INTEGER,
//             defaultValue: 3,
//             validate: {
//                 isIn: [DOCTOR_TYPE], // Enum or array of valid types
//             },
//         },
//         latitude: {
//             type: DataTypes.STRING,
//             defaultValue: "",
//         },
//         longitude: {
//             type: DataTypes.STRING,
//             defaultValue: "",
//         },
//         country: {
//             type: DataTypes.STRING,
//             defaultValue: "",
//         },
//         clinicName: {
//             type: DataTypes.STRING,
//             defaultValue: "",
//         },
//         address: {
//             type: DataTypes.STRING,
//             defaultValue: "",
//         },
//         awards: {
//             type: DataTypes.ARRAY(DataTypes.STRING), // Array of strings
//             defaultValue: [],
//         },
//         expertise: {
//             type: DataTypes.ARRAY(DataTypes.STRING), // Array of strings
//             defaultValue: [],
//         },
//         yourSelf: {
//             type: DataTypes.STRING,
//             defaultValue: "",
//         },
//         education: {
//             type: DataTypes.STRING,
//             defaultValue: "",
//         },
//         experienceDetails: {
//             type: DataTypes.ARRAY(DataTypes.STRING), // Array of strings
//             defaultValue: [],
//         },
//         reviewCount: {
//             type: DataTypes.INTEGER,
//             defaultValue: 0,
//         },
//         rating: {
//             type: DataTypes.FLOAT,
//             defaultValue: 0.0,
//         },
//         timeSlot: {
//             type: DataTypes.INTEGER,
//             defaultValue: 30,
//         },
//         schedule: {
//             type: DataTypes.ARRAY(
//                 DataTypes.JSONB // Use JSONB for complex schedules
//             ),
//             defaultValue: [],
//         },
//         isAttend: {
//             type: DataTypes.BOOLEAN,
//             defaultValue: false,
//         },
//         showDialog: {
//             type: DataTypes.BOOLEAN,
//             defaultValue: false,
//         },
//         isBusy: {
//             type: DataTypes.BOOLEAN,
//             defaultValue: false,
//         },
//         isOnline: {
//             type: DataTypes.BOOLEAN,
//             defaultValue: false,
//         },
//         callId: {
//             type: DataTypes.STRING,
//             defaultValue: "",
//         },
//         oneSignalId: {
//             type: DataTypes.STRING,
//             defaultValue: "",
//         },
//     },
//     {
//         sequelize,
//         modelName: 'Doctor',
//         tableName: 'doctors',  // Correspond to the table name in PostgreSQL
//         underscored: true,      // Ensures that PostgreSQL uses snake_case for column names
//         timestamps: true,       // Automatically add createdAt and updatedAt fields
//         versionKey: false,      // Disable the version key
//     }
// );

// module.exports = Doctor;
