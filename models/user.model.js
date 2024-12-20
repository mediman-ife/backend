const mongoose = require("mongoose");
const { LOGIN_TYPE } = require("../types/constant");
const userSchema = new mongoose.Schema(
  {
    uniqueId: {
      type: Number,
      default: null,
    },
    name: { type: String, default: "" },
    image: { type: String, default: "" },
    email: { type: String, default: "" },
    password: String,

    loginType: { type: Number, enum: LOGIN_TYPE }, //1.email-password 2.google 3.mobile No

    age: { type: Number },
    mobile: { type: String, default: "" },
    gender: { type: String, default: "" },
    bio: { type: String, default: "" },
    dob: { type: String, default: "" },

    analyticDate: { type: String, default: "" },
    isBlock: { type: Boolean, default: false },
    fcmToken: { type: String, default: null },
    isDelete: { type: Boolean, default: false },
    isUpdate: { type: Boolean, default: false },

    latitude: { type: String, default: "" },
    longitude: { type: String, default: "" },
    country: { type: String, default: "" },
    
    subPatient: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubPatient",
      },
    ],
    doctors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
      },
    ],

    isBusy: { type: Boolean, default: false },
    isOnline: { type: Boolean, default: false },


    callId: { type: String, default: "" }, //for videoCall
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = new mongoose.model("User", userSchema);

// models/User.js
// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/sequelize'); // Import your Sequelize instance
// const { LOGIN_TYPE } = require('../types/constant');

// class User extends Model {}

// User.init(
//     {
//         uniqueId: {
//             type: DataTypes.INTEGER,
//             defaultValue: null,
//         },
//         name: {
//             type: DataTypes.STRING,
//             defaultValue: "",
//         },
//         image: {
//             type: DataTypes.STRING,
//             defaultValue: "",
//         },
//         email: {
//             type: DataTypes.STRING,
//             defaultValue: "",
//         },
//         password: {
//             type: DataTypes.STRING,
//         },
//         loginType: {
//             type: DataTypes.INTEGER,
//             validate: {
//                 isIn: [LOGIN_TYPE],
//             },
//         },
//         age: {
//             type: DataTypes.INTEGER,
//         },
//         mobile: {
//             type: DataTypes.STRING,
//             defaultValue: "",
//         },
//         gender: {
//             type: DataTypes.STRING,
//             defaultValue: "",
//         },
//         bio: {
//             type: DataTypes.STRING,
//             defaultValue: "",
//         },
//         dob: {
//             type: DataTypes.STRING,
//             defaultValue: "",
//         },
//         analyticDate: {
//             type: DataTypes.STRING,
//             defaultValue: "",
//         },
//         isBlock: {
//             type: DataTypes.BOOLEAN,
//             defaultValue: false,
//         },
//         fcmToken: {
//             type: DataTypes.STRING,
//             defaultValue: null,
//         },
//         isDelete: {
//             type: DataTypes.BOOLEAN,
//             defaultValue: false,
//         },
//         isUpdate: {
//             type: DataTypes.BOOLEAN,
//             defaultValue: false,
//         },
//         latitude: {
//             type: DataTypes.STRING,
//             defaultValue: "",
//         },
//         longitude: {
//             type: DataTypes.STRING,
//             defaultValue: "",
//         },
//         country: {
//             type: DataTypes.STRING,
//             defaultValue: "",
//         },
//         isBusy: {
//             type: DataTypes.BOOLEAN,
//             defaultValue: false,
//         },
//         isOnline: {
//             type: DataTypes.BOOLEAN,
//             defaultValue: false,
//         },
//         callId: {
//             type: DataTypes.STRING,
//             defaultValue: "",
//         },
//     },
//     {
//         sequelize,
//         modelName: 'User',
//         tableName: 'users',  // Correspond to the table name in PostgreSQL
//         underscored: true,   // Ensures that PostgreSQL uses snake_case for column names
//         timestamps: true,    // Automatically add createdAt and updatedAt fields
//         versionKey: false,   // Disable the version key
//     }
// );

// User.associate = (models) => {
//     // Define associations here

//     // One-to-Many relationship with SubPatient
//     User.hasMany(models.SubPatient, {
//         foreignKey: 'user_id',
//         as: 'subPatients',  // Key name for association
//         onDelete: 'CASCADE', // Automatically delete subpatients if user is deleted
//     });

//     // Many-to-Many relationship with Doctor (assuming there's a joining table)
//     User.belongsToMany(models.Doctor, {
//         through: 'UserDoctors', // Name of the junction table; adjust as per your setup
//         foreignKey: 'user_id',  // Foreign key field in the joining table
//         otherKey: 'doctor_id',   // Foreign key field in the joining table for Doctor
//         as: 'doctors',           // Alias to use for this association
//     });
// };

// module.exports = User;

