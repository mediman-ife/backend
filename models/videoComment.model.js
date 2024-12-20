const mongoose = require("mongoose");

const videoCommentSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
    video: { type: mongoose.Schema.Types.ObjectId, ref: "Video", default: null },
    commentText: { type: String, default: "" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

videoCommentSchema.index({ user: -1 });
videoCommentSchema.index({ video: -1 });
videoCommentSchema.index({ createdAt: -1 });

module.exports = mongoose.model("VideoComment", videoCommentSchema);

// models/VideoComment.js
// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/sequelize'); // Import your Sequelize instance
// const User = require("./user.model"); // Assuming you have a User model
// const Video = require("./video.model"); // Assuming you have a Video model

// class VideoComment extends Model {}

// VideoComment.init(
//     {
//         userId: {
//             type: DataTypes.INTEGER, // Assuming user ID is an integer
//             references: {
//                 model: User,
//                 key: 'id',
//             },
//             defaultValue: null,
//         },
//         videoId: {
//             type: DataTypes.INTEGER, // Assuming video ID is an integer
//             references: {
//                 model: Video,
//                 key: 'id',
//             },
//             defaultValue: null,
//         },
//         commentText: {
//             type: DataTypes.STRING,
//             defaultValue: "", // Default to an empty string
//         },
//     },
//     {
//         sequelize,
//         modelName: 'VideoComment',
//         tableName: 'video_comments', // Corresponding table name in PostgreSQL
//         underscored: true, // Ensures that the database uses snake_case for column names
//         timestamps: true, // Automatically add createdAt and updatedAt fields
//         versionKey: false, // Disable versionKey
//     }
// );

// // Define relationships
// VideoComment.belongsTo(User, {
//     foreignKey: 'userId',
//     as: 'user',
// });

// VideoComment.belongsTo(Video, {
//     foreignKey: 'videoId',
//     as: 'video',
// });

// // Create indexes
// VideoComment.init({}, {
//     indexes: [
//         {
//             unique: false,
//             fields: ['userId'], // Index for userId
//         },
//         {
//             unique: false,
//             fields: ['videoId'], // Index for videoId
//         },
//         {
//             unique: false,
//             fields: ['created_at'], // Index for created_at
//             order: 'DESC', // Descending order
//         },
//     ],
// });

// module.exports = VideoComment;
