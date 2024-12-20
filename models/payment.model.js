const mongoose = require("mongoose");

const PaymentTransactionSchema = new mongoose.Schema(
  {
    merchantRID: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    amount: {
      type: Number,
      required: true,
      min: 0,
    },

    currency: {
      type: String,
      required: true,
      enum: ["LKR", "USD"],
      default: "LKR",
    },

    customerEmail: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    customerMobile: {
      type: String,
      required: true,
      trim: true,
    },

    mode: {
      type: String,
      enum: ["WEB", "SMS", "MAIL"],
      default: "WEB",
    },

    orderSummary: {
      type: String,
      trim: true,
    },

    customerReference: {
      type: String,
      trim: true,
    },

    paymentUrl: {
      type: String,
      trim: true,
    },

    status: {
      type: String,
      enum: ["PENDING", "SUCCESS", "FAILED", "CANCELLED"],
      default: "PENDING",
    },

    transactionId: {
      type: String,
      trim: true,
    },

    gatewayResponse: {
      type: mongoose.Schema.Types.Mixed,
      default: null,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },

    updatedAt: {
      type: Date,
      default: null,
    },

    metadata: {
      type: mongoose.Schema.Types.Mixed,
      default: null,
    },
  },
  {
    timestamps: true,
    strict: true,
  }
);

// Indexes for improved query performance
PaymentTransactionSchema.index({
  merchantRID: 1,
  status: 1,
  createdAt: -1,
});

// Virtual for formatted amount with currency
PaymentTransactionSchema.virtual("formattedAmount").get(function () {
  return `${this.currency} ${this.amount.toFixed(2)}`;
});

// Method to check if payment is successful
PaymentTransactionSchema.methods.isSuccessful = function () {
  return this.status === "SUCCESS";
};

// Pre-save hook to validate email format
PaymentTransactionSchema.pre("save", function (next) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (this.customerEmail && !emailRegex.test(this.customerEmail)) {
    next(new Error("Invalid email format"));
  }
  next();
});

// Create and export the model
const PaymentTransaction = mongoose.model(
  "PaymentTransaction",
  PaymentTransactionSchema
);

module.exports = PaymentTransaction;

// models/PaymentTransaction.js
// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/sequelize'); // Adjust the path to your Sequelize instance

// class PaymentTransaction extends Model {
//     // Method to check if payment is successful
//     isSuccessful() {
//         return this.status === "SUCCESS";
//     }

//     // Virtual field for formatted amount with currency
//     getFormattedAmount() {
//         return `${this.currency} ${this.amount.toFixed(2)}`;
//     }
// }

// PaymentTransaction.init(
//     {
//         merchantRID: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             unique: true,
//             index: true,
//         },
//         amount: {
//             type: DataTypes.FLOAT, // Using FLOAT for monetary values
//             allowNull: false,
//             validate: {
//                 min: 0, // Ensure amount is non-negative
//             },
//         },
//         currency: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             defaultValue: "LKR",
//             validate: {
//                 isIn: [['LKR', 'USD']], // Enum validation
//             },
//         },
//         customerEmail: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             trim: true,
//             lowercase: true,
//         },
//         customerMobile: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             trim: true,
//         },
//         mode: {
//             type: DataTypes.STRING,
//             defaultValue: "WEB",
//             validate: {
//                 isIn: [['WEB', 'SMS', 'MAIL']],
//             },
//         },
//         orderSummary: {
//             type: DataTypes.STRING,
//             trim: true,
//         },
//         customerReference: {
//             type: DataTypes.STRING,
//             trim: true,
//         },
//         paymentUrl: {
//             type: DataTypes.STRING,
//             trim: true,
//         },
//         status: {
//             type: DataTypes.STRING,
//             defaultValue: "PENDING",
//             validate: {
//                 isIn: [['PENDING', 'SUCCESS', 'FAILED', 'CANCELLED']],
//             },
//         },
//         transactionId: {
//             type: DataTypes.STRING,
//             trim: true,
//         },
//         gatewayResponse: {
//             type: DataTypes.JSONB, // Using JSONB for mixed data types
//             defaultValue: null,
//         },
//         createdAt: {
//             type: DataTypes.DATE,
//             defaultValue: DataTypes.NOW,
//         },
//         updatedAt: {
//             type: DataTypes.DATE,
//             allowNull: true,
//         },
//         metadata: {
//             type: DataTypes.JSONB, // Using JSONB for mixed data types
//             defaultValue: null,
//         },
//     },
//     {
//         sequelize,
//         modelName: 'PaymentTransaction',
//         tableName: 'payment_transactions', // Corresponding table name in PostgreSQL
//         underscored: true, // Ensures snake_case for column names
//     }
// );

// // Indexes for improved query performance
// PaymentTransaction.addIndex(['merchant_rid', 'status', 'created_at']);

// module.exports = PaymentTransaction;
