const mongoose = require("mongoose");

const { MESSAGE_TYPE, CALL_TYPE } = require("../types/constant");

const chatSchema = mongoose.Schema(
  {
    chatTopic: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ChatTopic",
      default: null,
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
      ref: "Doctor",
    }, //1.user 2.doctor
    user: { type: mongoose.Schema.Types.ObjectId, default: null, ref: "User" }, //1.user 2.doctor
    role: { type: String, enum: ["user", "doctor"] },

    messageType: { type: String, enum: MESSAGE_TYPE }, //1.message 2.image 3.video 4.audio 5.videoCall
    message: { type: String, default: "" },
    image: { type: String, default: "" },
    video: { type: String, default: "" },
    thumbnail: { type: String, default: "" },

    isRead: { type: Boolean, default: false },
    date: { type: String, default: "" },

    //for videoCall
    callType: { type: Number, enum: CALL_TYPE }, //1.received 2.declined 3.missCalled
    callDuration: { type: String },
    callId: { type: mongoose.Schema.Types.ObjectId },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

chatSchema.index({ createdAt: -1 });
chatSchema.index({ chatTopic: 1 });
chatSchema.index({ sender: 1 });
chatSchema.index({ receiver: 1 });
chatSchema.index({ callId: 1 });

module.exports = mongoose.model("Chat", chatSchema);

// models/Chat.js
// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/sequelize'); // Import your Sequelize instance
// const ChatTopic = require('./chatTopic.model'); // Import the ChatTopic model
// const Doctor = require("./doctor.model"); // Import the Doctor model
// const User = require('./user.model');     // Import the User model

// class Chat extends Model {}

// Chat.init(
//     {
//         chatTopicId: {
//             type: DataTypes.INTEGER, // Assuming the reference ID is an integer
//             references: {
//                 model: ChatTopic,
//                 key: 'id',
//             },
//             defaultValue: null, // Default to null
//         },
//         doctorId: {
//             type: DataTypes.INTEGER, // Assuming the reference ID is an integer
//             references: {
//                 model: Doctor,
//                 key: 'id',
//             },
//             defaultValue: null, // Default to null
//         },
//         userId: {
//             type: DataTypes.INTEGER, // Assuming the reference ID is an integer
//             references: {
//                 model: User,
//                 key: 'id',
//             },
//             defaultValue: null, // Default to null
//         },
//         role: {
//             type: DataTypes.ENUM('user', 'doctor'), // Enum for role
//         },
//         messageType: {
//             type: DataTypes.ENUM(...Object.values(MESSAGE_TYPE)), // Assuming MESSAGE_TYPE is an object of constants
//         },
//         message: {
//             type: DataTypes.STRING,
//             defaultValue: "", // Default to empty string
//         },
//         image: {
//             type: DataTypes.STRING,
//             defaultValue: "", // Default to empty string
//         },
//         video: {
//             type: DataTypes.STRING,
//             defaultValue: "", // Default to empty string
//         },
//         thumbnail: {
//             type: DataTypes.STRING,
//             defaultValue: "", // Default to empty string
//         },
//         isRead: {
//             type: DataTypes.BOOLEAN,
//             defaultValue: false, // Default to false
//         },
//         date: {
//             type: DataTypes.STRING,
//             defaultValue: "", // Default to empty string
//         },
//         callType: {
//             type: DataTypes.INTEGER, // Assuming callType is an integer that determines the call state
//             references: {
//                 model: CALL_TYPE, // Define it appropriately or use ENUM as needed
//                 key: 'id',
//             },
//         },
//         callDuration: {
//             type: DataTypes.STRING, // Call duration
//         },
//         callId: {
//             type: DataTypes.INTEGER, // Assuming callId is an integer ID, adjust accordingly
//         },
//     },
//     {
//         sequelize,
//         modelName: 'Chat',
//         tableName: 'chats', // Corresponding table name in PostgreSQL
//         underscored: true,   // Convert camelCase to snake_case for column names
//         timestamps: true,    // Automatically add createdAt and updatedAt fields
//         versionKey: false,   // Disable versionKey
//     }
// );

// // Set up the relationships with other models
// Chat.belongsTo(ChatTopic, {
//     foreignKey: 'chatTopicId',
//     as: 'chatTopic',
// });

// Chat.belongsTo(Doctor, {
//     foreignKey: 'doctorId',
//     as: 'doctor',
// });

// Chat.belongsTo(User, {
//     foreignKey: 'userId',
//     as: 'user',
// });

// module.exports = Chat;
