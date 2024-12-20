const mongoose = require("mongoose");

const chatBoatSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
    message: {
      type: [
        {
          text: { type: String, required: true },
          time: { type: String, required: true },
          isSendByUser: { type: Boolean, required: true },
        },
      ],
      default: [],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

chatBoatSchema.index({ user: 1 });

module.exports = mongoose.model("ChatBoat", chatBoatSchema);

// models/ChatBoat.js
// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/sequelize'); // Import your Sequelize instance

// class ChatBoat extends Model {}

// ChatBoat.init(
//     {
//         userId: {
//             type: DataTypes.INTEGER, // Assuming the user ID is an integer
//             references: {
//                 model: 'users', // Assuming the table name is 'users'
//                 key: 'id',
//             },
//             defaultValue: null, // Default to null
//         },
//         message: {
//             type: DataTypes.JSONB, // Storing the array of message objects as JSONB
//             defaultValue: [],      // Default to an empty array
//         },
//     },
//     {
//         sequelize,
//         modelName: 'ChatBoat',
//         tableName: 'chat_boats', // Corresponding table name in PostgreSQL
//         underscored: true,        // Ensures that the database uses snake_case for column names
//         timestamps: true,         // Automatically add createdAt and updatedAt fields
//         versionKey: false,        // Disable versionKey
//     }
// );

// // Set up the relationships
// ChatBoat.belongsTo(User, {
//     foreignKey: 'userId', // Assuming userId maps back to the User model
//     as: 'user',
// });

// module.exports = ChatBoat;
