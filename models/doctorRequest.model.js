const mongoose = require("mongoose");
const { DOCTOR_TYPE } = require("../types/constant");
const { DOCTOR_REQUEST_STATUS } = require("../types/constant");

const doctorRequestSchema = new mongoose.Schema(
  {
    name: { type: String, default: "" },
    image: { type: String, default: "" },
    email: { type: String, default: "" },
    password: String,
    age: { type: Number },
    mobile: { type: String, default: "" },
    gender: { type: String, default: "" },
    dob: { type: String, default: "" },
    countryCode:{type:String,default:""},

    country: { type: String, default: "" },

    service: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Service",
      },
    ],

    designation: { type: String, default: "" },
    degree: [{ type: String, default: "" }],
    language: [{ type: String, default: "" }],
    experience: { type: Number, default: 0 },
    charge: { type: Number, default: 0 },

    type: { type: Number, default: 2, enum: DOCTOR_TYPE }, //offline online both

    clinicName: { type: String },
    address: { type: String },

    awards: [{ type: String, default: "" }],
    expertise: [{ type: String, default: "" }],
    yourSelf: { type: String, default: "" },
    education: { type: String, default: "" },
    experienceDetails: [{ type: String, default: "" }],

    requestId: { type: String ,default: "",unique: true},
    status: { type: Number, default: 1, enum: DOCTOR_REQUEST_STATUS },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("DoctorRequest", doctorRequestSchema);

// models/DoctorRequest.js
// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/sequelize'); // Import your Sequelize instance
// const Service = require('./service.model'); // Assuming you have a Service model
// const { DOCTOR_TYPE, DOCTOR_REQUEST_STATUS } = require('../types/constant'); // Make sure to import your constants

// class DoctorRequest extends Model {}

// DoctorRequest.init(
//     {
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
//         country: {
//             type: DataTypes.STRING,
//             defaultValue: "",
//         },
//         service: {
//             type: DataTypes.ARRAY(DataTypes.INTEGER), // Use ARRAY type for storing multiple service IDs
//             references: {
//                 model: Service,
//                 key: 'id',
//             },
//         },
//         designation: {
//             type: DataTypes.STRING,
//             defaultValue: "",
//         },
//         degree: {
//             type: DataTypes.ARRAY(DataTypes.STRING),
//             defaultValue: [],
//         },
//         language: {
//             type: DataTypes.ARRAY(DataTypes.STRING),
//             defaultValue: [],
//         },
//         experience: {
//             type: DataTypes.INTEGER,
//             defaultValue: 0,
//         },
//         charge: {
//             type: DataTypes.INTEGER,
//             defaultValue: 0,
//         },
//         type: {
//             type: DataTypes.INTEGER,
//             defaultValue: 2,
//             validate: {
//                 isIn: [Object.values(DOCTOR_TYPE)], // Validate against DOCTOR_TYPE enum values
//             },
//         },
//         clinicName: {
//             type: DataTypes.STRING,
//         },
//         address: {
//             type: DataTypes.STRING,
//         },
//         awards: {
//             type: DataTypes.ARRAY(DataTypes.STRING),
//             defaultValue: [],
//         },
//         expertise: {
//             type: DataTypes.ARRAY(DataTypes.STRING),
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
//             type: DataTypes.ARRAY(DataTypes.STRING),
//             defaultValue: [],
//         },
//         requestId: {
//             type: DataTypes.STRING,
//             defaultValue: "",
//             unique: true,
//         },
//         status: {
//             type: DataTypes.INTEGER,
//             defaultValue: 1,
//             validate: {
//                 isIn: [Object.values(DOCTOR_REQUEST_STATUS)], // Validate against DOCTOR_REQUEST_STATUS enum values
//             },
//         },
//     },
//     {
//         sequelize,
//         modelName: 'DoctorRequest',
//         tableName: 'doctor_requests', // Corresponding table name in PostgreSQL
//         underscored: true,            // Ensures that the database uses snake_case for column names
//         timestamps: true,             // Automatically add createdAt and updatedAt fields
//         versionKey: false,            // Disable versionKey
//     }
// );

// // If you use many-to-many relationship with services, consider creating an association here
// DoctorRequest.belongsToMany(Service, {
//     through: 'DoctorRequestServices', // Join table name
//     foreignKey: 'doctorRequestId',
//     otherKey: 'serviceId',
//     as: 'services',
// });

// module.exports = DoctorRequest;
