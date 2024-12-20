const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema(
    {
        name: String,
        email: {
            type: String,
            require: true,
        },
        password: {
            type: String,
            required: true,
        },
        image: String,
        purchaseCode: String
    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = mongoose.model("Admin", adminSchema)

// const { Model, DataTypes } = require("sequelize");
// const sequelize = require("../config/sequelize"); // Import your sequelize instance

// class Admin extends Model {}

// Admin.init(
//   {
//     name: {
//       type: DataTypes.STRING,
//       allowNull: true, // Optional field
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true, // Ensure email uniqueness
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     image: {
//       type: DataTypes.STRING,
//       allowNull: true, // Optional field
//     },
//     purchaseCode: {
//       type: DataTypes.STRING,
//       allowNull: true, // Optional field
//     },
//   },
//   {
//     sequelize,
//     modelName: "Admin",
//     tableName: "admins", // Optional: specify table name
//     timestamps: true, // Automatically adds createdAt and updatedAt fields
//     underscored: true, // Use snake_case for columns
//   }
// );

// module.exports = Admin;
