const mongoose = require('mongoose');
const { BANNER_TYPE } = require('../types/constant')
const bannerSchema = new mongoose.Schema(
    {
        isActive: { type: Boolean, default: true },
        image: { type: String, default: "" },
        type: { type: Number,enum: BANNER_TYPE},   // 0-service 1-url
        service:{type:mongoose.Schema.Types.ObjectId,ref:"Service"},
        url:String
    },
    {
        timestamps: true,
        versionKey: false,
      }
)

module.exports = mongoose.model('Banner', bannerSchema);

// models/Banner.js
// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/sequelize'); // Import your Sequelize instance
// const Service = require("./service.model"); // Import the Service model

// class Banner extends Model {}

// Banner.init(
//     {
//         isActive: {
//             type: DataTypes.BOOLEAN,
//             defaultValue: true, // Default to true
//         },
//         image: {
//             type: DataTypes.STRING,
//             defaultValue: "", // Default to empty string
//         },
//         type: {
//             type: DataTypes.INTEGER,
//             allowNull: false, // Assuming this is a mandatory field
//             validate: {
//                 isIn: [[0, 1]], // Validate against the enum values (0 or 1)
//             },
//         },
//         serviceId: { // Rename 'service' to 'serviceId' for clarity
//             type: DataTypes.INTEGER, // Assuming service ID is an integer
//             references: {
//                 model: Service,
//                 key: 'id',
//             },
//         },
//         url: {
//             type: DataTypes.STRING,
//             allowNull: true, // Assuming URL is optional
//         },
//     },
//     {
//         sequelize,
//         modelName: 'Banner',
//         tableName: 'banners',  // Correspond to the table name in PostgreSQL
//         underscored: true,      // Ensures that the database uses snake_case for column names
//         timestamps: true,       // Automatically add createdAt and updatedAt fields
//         versionKey: false,      // Disable versionKey
//     }
// );

// // Set up the relationship with the Service model
// Banner.belongsTo(Service, {
//     foreignKey: 'serviceId', // This specifies the foreign key in the banners table
//     as: 'service',            // Optional, for including related models using this alias
// });

// module.exports = Banner;
