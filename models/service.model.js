const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    status: { type: Boolean, default: true },
    isDelete: { type: Boolean, default: false },
    isDemo: { type: Boolean, default: false },
    subService: [{ type: String, default:[] }],


  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Service", serviceSchema);
