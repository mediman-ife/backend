const mongoose = require("mongoose");

const likeHistoryOfvideoSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    video: { type: mongoose.Schema.Types.ObjectId, ref: "Video" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

likeHistoryOfvideoSchema.index({ user: 1 });
likeHistoryOfvideoSchema.index({ video: 1 });

module.exports = mongoose.model("LikeHistoryOfvideo", likeHistoryOfvideoSchema);

// models/LikeHistoryOfVideo.js
// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/sequelize'); // Import your Sequelize instance
// const User = require("./user.model"); // Assuming you have a User model
// const Video = require("./video.model"); // Assuming you have a Video model

// class LikeHistoryOfVideo extends Model {}

// LikeHistoryOfVideo.init(
//     {
//         userId: {
//             type: DataTypes.INTEGER, // Assuming user ID is an integer
//             references: {
//                 model: User,
//                 key: 'id',
//             },
//         },
//         videoId: {
//             type: DataTypes.INTEGER, // Assuming video ID is also an integer
//             references: {
//                 model: Video,
//                 key: 'id',
//             },
//         },
//     },
//     {
//         sequelize,
//         modelName: 'LikeHistoryOfVideo',
//         tableName: 'like_history_of_videos', // Corresponding table name in PostgreSQL
//         underscored: true, // Ensures that the database uses snake_case for column names
//         timestamps: true,  // Automatically add createdAt and updatedAt fields
//         versionKey: false,  // Disable versionKey
//     }
// );

// // Define the relationships
// LikeHistoryOfVideo.belongsTo(User, {
//     foreignKey: 'userId',
//     as: 'user',
// });

// LikeHistoryOfVideo.belongsTo(Video, {
//     foreignKey: 'videoId',
//     as: 'video',
// });

// // Optionally, create indexes
// LikeHistoryOfVideo.init({
//     // Define any fields or properties here if needed
// }, {
//     indexes: [
//         {
//             unique: false,
//             fields: ['userId'],
//         },
//         {
//             unique: false,
//             fields: ['videoId'],
//         },
//     ],
// });

// module.exports = LikeHistoryOfVideo;
