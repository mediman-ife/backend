const mongoose = require("mongoose");

const watchHistorySchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
    video: { type: mongoose.Schema.Types.ObjectId, ref: "Video", default: null },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

watchHistorySchema.index({ createdAt: -1 });
watchHistorySchema.index({ user: 1 });
watchHistorySchema.index({ video: 1 });

module.exports = mongoose.model("WatchHistory", watchHistorySchema);

// models/WatchHistory.js
// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/sequelize'); // Import your Sequelize instance
// const User = require("./user.model"); // Adjust this path as necessary
// const Video = require('./video.model'); // Adjust this path as necessary

// class WatchHistory extends Model {}

// WatchHistory.init(
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
//     },
//     {
//         sequelize,
//         modelName: 'WatchHistory',
//         tableName: 'watch_histories', // Corresponding table name in PostgreSQL
//         underscored: true, // Ensures that the database uses snake_case for column names
//         timestamps: true, // Automatically add createdAt and updatedAt fields
//         versionKey: false, // Disable versionKey
//     }
// );

// // Define relationships
// WatchHistory.belongsTo(User, {
//     foreignKey: 'userId',
//     as: 'user', // Alias for easy access
// });

// WatchHistory.belongsTo(Video, {
//     foreignKey: 'videoId',
//     as: 'video', // Alias for easy access
// });

// // Create indexes
// WatchHistory.init({}, {
//     indexes: [
//         {
//             unique: false,
//             fields: ['created_at'], // Index for created_at
//             order: 'DESC', // Descending order
//         },
//         {
//             unique: false,
//             fields: ['user_id'], // Index for userId
//         },
//         {
//             unique: false,
//             fields: ['video_id'], // Index for videoId
//         },
//     ],
// });

// module.exports = WatchHistory;
