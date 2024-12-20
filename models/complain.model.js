const mongoose = require('mongoose');
const { COMPLAIN_TYPE, COMPLAIN_PERSON } = require('../types/constant');


const complainSchema = new mongoose.Schema(
    {
        doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        appointmentId: { type: Number, default: '' },
        details: { type: String, default: '' },
        image: { type: String, default: '' },
        type: {type:Number,default:1,enum:COMPLAIN_TYPE}, // 1 for pending,2 for solved
        solvedDate: { type: String },
        person:{type:Number,enum:COMPLAIN_PERSON},
        appointment:{ type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' },

        isComplain: { type: Boolean, default: true },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

complainSchema.index({ doctor: 1 });
complainSchema.index({ user: 1 });
complainSchema.index({ appointmentId: 1 });

module.exports = mongoose.model('Complain', complainSchema);

// models/Complain.js
// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/sequelize'); // Import your Sequelize instance
// const Doctor = require("./doctor.model"); // Import the Doctor model
// const User = require("./user.model");     // Import the User model
// const Appointment = require('./appointment.model'); // Import the Appointment model

// class Complain extends Model {}

// Complain.init(
//     {
//         doctorId: {
//             type: DataTypes.INTEGER, // Assuming the doctor ID is an integer
//             references: {
//                 model: Doctor,
//                 key: 'id',
//             },
//         },
//         userId: {
//             type: DataTypes.INTEGER, // Assuming the user ID is an integer
//             references: {
//                 model: User,
//                 key: 'id',
//             },
//         },
//         appointmentId: {
//             type: DataTypes.INTEGER,
//             defaultValue: 0, // Default to 0 if appointment ID is not set
//         },
//         details: {
//             type: DataTypes.STRING,
//             defaultValue: "", // Default to an empty string
//         },
//         image: {
//             type: DataTypes.STRING,
//             defaultValue: "", // Default to an empty string
//         },
//         type: {
//             type: DataTypes.INTEGER,
//             defaultValue: 1, // Default to pending
//             allowNull: false,
//             validate: {
//                 isIn: [Object.values(COMPLAIN_TYPE)], // Assuming COMPLAIN_TYPE is an array of valid enums
//             },
//         },
//         solvedDate: {
//             type: DataTypes.STRING,
//         },
//         person: {
//             type: DataTypes.INTEGER,
//             validate: {
//                 isIn: [Object.values(COMPLAIN_PERSON)], // Assuming COMPLAIN_PERSON is an array of valid enums
//             },
//         },
//         appointmentIdRef: {
//             type: DataTypes.INTEGER,         // Assuming appointment ID is an integer
//             references: {
//                 model: Appointment,
//                 key: 'id',
//             },
//         },
//         isComplain: {
//             type: DataTypes.BOOLEAN,
//             defaultValue: true, // Default to true
//         },
//     },
//     {
//         sequelize,
//         modelName: 'Complain',
//         tableName: 'complains', // Corresponding table name in PostgreSQL
//         underscored: true,       // Ensures that the database uses snake_case for column names
//         timestamps: true,        // Automatically add createdAt and updatedAt fields
//         versionKey: false,       // Disable versionKey
//     }
// );

// // Set up the relationships
// Complain.belongsTo(Doctor, {
//     foreignKey: 'doctorId',
//     as: 'doctor',
// });

// Complain.belongsTo(User, {
//     foreignKey: 'userId',
//     as: 'user',
// });

// Complain.belongsTo(Appointment, {
//     foreignKey: 'appointmentIdRef',
//     as: 'appointment',
// });

// module.exports = Complain;

