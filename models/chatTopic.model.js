const mongoose = require("mongoose");

const chatTopicSchema = new mongoose.Schema(
  {
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor", default: null },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat", default: null },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

chatTopicSchema.index({ createdAt: -1 });
chatTopicSchema.index({ senderUser: 1 });
chatTopicSchema.index({ receiverUser: 1 });
chatTopicSchema.index({ chat: 1 });

module.exports = mongoose.model("ChatTopic", chatTopicSchema);

// models/ChatTopic.js
// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/sequelize'); // Import your Sequelize instance
// const Doctor = require("./doctor.model"); // Import the Doctor model
// const User = require("./user.model");     // Import the User model
// const Chat = require('./chat.model');     // Import the Chat model

// class ChatTopic extends Model {}

// ChatTopic.init(
//     {
//         doctorId: {
//             type: DataTypes.INTEGER, // Assuming the doctor ID is an integer
//             references: {
//                 model: Doctor,
//                 key: 'id',
//             },
//             defaultValue: null, // Default to null
//         },
//         userId: {
//             type: DataTypes.INTEGER, // Assuming the user ID is an integer
//             references: {
//                 model: User,
//                 key: 'id',
//             },
//             defaultValue: null, // Default to null
//         },
//         chatId: {
//             type: DataTypes.INTEGER, // Assuming the chat ID is an integer
//             references: {
//                 model: Chat,
//                 key: 'id',
//             },
//             defaultValue: null, // Default to null
//         },
//     },
//     {
//         sequelize,
//         modelName: 'ChatTopic',
//         tableName: 'chat_topics', // Corresponding table name in PostgreSQL
//         underscored: true,       // Ensures that the database uses snake_case for column names
//         timestamps: true,        // Automatically add createdAt and updatedAt fields
//         versionKey: false,       // Disable versionKey
//     }
// );

// // Set up the relationships
// ChatTopic.belongsTo(Doctor, {
//     foreignKey: 'doctorId',
//     as: 'doctor',
// });

// ChatTopic.belongsTo(User, {
//     foreignKey: 'userId',
//     as: 'user',
// });

// ChatTopic.belongsTo(Chat, {
//     foreignKey: 'chatId',
//     as: 'chat',
// });

// module.exports = ChatTopic;
