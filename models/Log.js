const mongoose = require("mongoose");
const { User } = require("./User");
const logSchema = new mongoose.Schema(
  {
    action: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 255,
    },
    user: {
      type: User,
      required: true,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Log = mongoose.model("Log", logSchema);
exports.Log = Log;
