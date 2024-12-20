const mongoose = require("mongoose");

const subPatientSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    name: { type: String, default: "" },
    gender: { type: String, default: "" },
    relation: { type: String, default: "" },
    age: { type: Number, default: null },
    image:String
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = new mongoose.model("SubPatient", subPatientSchema);

// models/SubPatient.js
// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/sequelize'); // Import your Sequelize instance

// class SubPatient extends Model {}

// SubPatient.init(
//     {
//         user: {
//             type: DataTypes.INTEGER, // Assuming the user ID is an integer. You can change it based on your User model.
//             allowNull: false,
//             references: {
//                 model: 'users', // Referencing the users table
//                 key: 'id',
//             },
//         },
//         name: {
//             type: DataTypes.STRING,
//             defaultValue: "",
//         },
//         gender: {
//             type: DataTypes.STRING,
//             defaultValue: "",
//         },
//         relation: {
//             type: DataTypes.STRING,
//             defaultValue: "",
//         },
//         age: {
//             type: DataTypes.INTEGER,
//             defaultValue: null,
//         },
//         image: {
//             type: DataTypes.STRING,
//         },
//     },
//     {
//         sequelize,
//         modelName: 'SubPatient',
//         tableName: 'sub_patients',  // Correspond to the table name in PostgreSQL
//         underscored: true,            // Ensures that the database uses snake_case for column names
//         timestamps: true,             // Automatically add createdAt and updatedAt fields
//         versionKey: false,            // Disable versionKey (like __v in Mongoose)
//     }
// );

// module.exports = SubPatient;
