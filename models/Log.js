const mongoose = require("mongoose");
const logSchema = new mongoose.Schema(
  {
    action: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 255,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    status: {
      type: Number,
      required: true,
    },
    message: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Log = mongoose.model("Log", logSchema);
exports.Log = Log;
