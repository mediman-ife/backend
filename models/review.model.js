const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
    review: { type: String ,default:""},
    relativeTime: { type: String },
    appointment:{ type: mongoose.Schema.Types.ObjectId, ref: "Appointment" },
    rating: { type: Number, default: 0 },
    callId: { type: String, default: "" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

reviewSchema.index({ user: 1 });
reviewSchema.index({ doctor: 1 });
reviewSchema.index({ appointment: 1 });
module.exports = mongoose.model("Review", reviewSchema);

// models/Review.js
// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/sequelize'); // Adjust the path to your Sequelize instance
// const User = require("./user.model"); // Adjust according to your models' structure
// const Doctor = require("./doctor.model"); // Adjust according to your models' structure
// const Appointment = require("./appointment.model"); // Adjust according to your models' structure

// class Review extends Model {}

// Review.init(
//     {
//         userId: { // Renamed for clarity
//             type: DataTypes.INTEGER, // Assuming user ID is an integer
//             references: {
//                 model: User, // Reference to User model
//                 key: 'id',
//             },
//         },
//         doctorId: { // Renamed for clarity
//             type: DataTypes.INTEGER, // Assuming doctor ID is an integer
//             references: {
//                 model: Doctor, // Reference to Doctor model
//                 key: 'id',
//             },
//         },
//         review: {
//             type: DataTypes.STRING,
//             defaultValue: "",
//         },
//         relativeTime: {
//             type: DataTypes.STRING,
//             allowNull: true, // Optional field
//         },
//         appointmentId: { // Renamed for clarity
//             type: DataTypes.INTEGER, // Assuming appointment ID is an integer
//             references: {
//                 model: Appointment, // Reference to Appointment model
//                 key: 'id',
//             },
//         },
//         rating: {
//             type: DataTypes.FLOAT,  // Using FLOAT for rating
//             defaultValue: 0,
//         },
//         callId: {
//             type: DataTypes.STRING,
//             defaultValue: "",
//         },
//     },
//     {
//         sequelize,
//         modelName: 'Review',
//         tableName: 'reviews', // Corresponding table name in PostgreSQL
//         underscored: true, // Ensures snake_case for column names
//         timestamps: true, // Automatically manages createdAt and updatedAt
//         versionKey: false, // Disable versionKey
//     }
// );

// // Define associations
// Review.belongsTo(User, {
//     foreignKey: 'userId',
//     as: 'user', // Alias for easy access
// });
// Review.belongsTo(Doctor, {
//     foreignKey: 'doctorId',
//     as: 'doctor', // Alias for easy access
// });
// Review.belongsTo(Appointment, {
//     foreignKey: 'appointmentId',
//     as: 'appointment', // Alias for easy access
// });

// // Indexes
// Review.addIndex(['userId']);
// Review.addIndex(['doctorId']);
// Review.addIndex(['appointmentId']);

// module.exports = Review;
