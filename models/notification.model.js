const mongoose = require("mongoose");
const { NOTIFICATION_TYPE } = require('../types/constant');
const notificationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
    },

    notificationType: {
      type: Number,
      enum: NOTIFICATION_TYPE, // 01 for 'User' ' and 2 for 'Doctor'
    },
    message: String,
    type: { type: String },
    title: String,
    image: { type: String },
    date: String,
    // expiration_date: { type: Date, required: true, expires: 2592000000 },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

notificationSchema.index({ user: 1 });
notificationSchema.index({ doctor: 1 });

module.exports = mongoose.model("Notification", notificationSchema);

// models/Notification.js
// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/sequelize'); // Adjust the path to your Sequelize instance
// const { NOTIFICATION_TYPE } = require('../types/constant'); // Ensure your constants are imported correctly

// class Notification extends Model {}

// Notification.init(
//     {
//         userId: {
//             type: DataTypes.INTEGER, // Assuming user ID is INTEGER
//             references: {
//                 model: 'Users', // Name of the referenced model/table
//                 key: 'id',
//             },
//             allowNull: true, // Allow null if not assigned
//         },
//         doctorId: {
//             type: DataTypes.INTEGER, // Assuming doctor ID is INTEGER
//             references: {
//                 model: 'Doctors', // Name of the referenced model/table
//                 key: 'id',
//             },
//             allowNull: true, // Allow null if not assigned
//         },
//         notificationType: {
//             type: DataTypes.INTEGER,
//             validate: {
//                 isIn: [NOTIFICATION_TYPE] // Validating against NOTIFICATION_TYPE constant
//             },
//         },
//         message: {
//             type: DataTypes.STRING, 
//             allowNull: true,
//         },
//         type: {
//             type: DataTypes.STRING,
//             allowNull: true,
//         },
//         title: {
//             type: DataTypes.STRING,
//             allowNull: true,
//         },
//         image: {
//             type: DataTypes.STRING,
//             allowNull: true,
//         },
//         date: {
//             type: DataTypes.STRING, // Storing as a string, but consider using DATE if appropriate
//             allowNull: true,
//         },
//         // expiration_date: {
//         //     type: DataTypes.DATE,
//         //     allowNull: true,
//         //     defaultValue: sequelize.fn('now'),
//         //     // Add a comment for expiration
//         //     get() {
//         //         const expirationDate = this.getDataValue('expiration_date');
//         //         return expirationDate ? expirationDate.toISOString() : null; // Format as needed
//         //     },
//         // },
//     },
//     {
//         sequelize,
//         modelName: 'Notification',
//         tableName: 'notifications', // Corresponding table name in PostgreSQL
//         underscored: true, // Ensures snake_case for column names
//         timestamps: true, // Automatically manages createdAt and updatedAt
//         createdAt: 'created_at', // Custom column name for createdAt
//         updatedAt: 'updated_at', // Custom column name for updatedAt
//         versionKey: false, // Disable versionKey
//     }
// );

// // Define associations
// Notification.belongsTo(User, { foreignKey: 'userId', as: 'user' });
// Notification.belongsTo(Doctor, { foreignKey: 'doctorId', as: 'doctor' });

// // Create indexes for fast lookup
// Notification.addIndex(['userId']);
// Notification.addIndex(['doctorId']);

// module.exports = Notification;
