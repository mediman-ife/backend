const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema(
  {
    uniqueId: { type: String, unique: true, default: "" },
    description: { type: String, default: "" },
    videoTime: { type: Number, min: 0 }, //that value always save in millisecond
    videoUrl: { type: String, default: "" },
    videoImage: { type: String, default: "" },
    shareCount: { type: Number, default: 0 }, //when user share the video then shareCount increased
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
    isCommentAllowed: { type: Boolean, default: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

videoSchema.index({ doctor: 1 });
videoSchema.index({ createdAt: -1 });

module.exports = mongoose.model("Video", videoSchema);

// models/Video.js
// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/sequelize'); // Import your Sequelize instance
// const Doctor = require("./doctor.model"); // Assuming you have a Doctor model

// class Video extends Model {}

// Video.init(
//     {
//         uniqueId: {
//             type: DataTypes.STRING,
//             unique: true,
//             defaultValue: "", // Default value is an empty string
//         },
//         description: {
//             type: DataTypes.STRING,
//             defaultValue: "", // Default value is an empty string
//         },
//         videoTime: {
//             type: DataTypes.INTEGER, // Stored in milliseconds
//             validate: {
//                 min: 0, // Minimum value constraint
//             },
//         },
//         videoUrl: {
//             type: DataTypes.STRING,
//             defaultValue: "", // Default value is an empty string
//         },
//         videoImage: {
//             type: DataTypes.STRING,
//             defaultValue: "", // Default value is an empty string
//         },
//         shareCount: {
//             type: DataTypes.INTEGER,
//             defaultValue: 0, // Default value is 0
//         },
//         doctorId: {
//             type: DataTypes.INTEGER, // Assuming doctor ID is an integer
//             references: {
//                 model: Doctor,
//                 key: 'id',
//             },
//         },
//         isCommentAllowed: {
//             type: DataTypes.BOOLEAN,
//             defaultValue: true, // Default to true
//         },
//     },
//     {
//         sequelize,
//         modelName: 'Video',
//         tableName: 'videos', // Corresponding table name in PostgreSQL
//         underscored: true,   // Ensures that the database uses snake_case for column names
//         timestamps: true,    // Automatically add createdAt and updatedAt fields
//         versionKey: false,   // Disable versionKey
//     }
// );

// // Define the relationship
// Video.belongsTo(Doctor, {
//     foreignKey: 'doctorId',
//     as: 'doctor',
// });

// // Optionally, create indexes
// Video.init({
//     // Define any fields or properties here if needed
// }, {
//     indexes: [
//         {
//             unique: false,
//             fields: ['doctorId'], // Index for doctorId
//         },
//         {
//             unique: false,
//             fields: ['createdAt'], // Index for createdAt
//             order: 'DESC', // Descending order
//         },
//     ],
// });

// module.exports = Video;
