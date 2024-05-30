const mongoose = require("mongoose");
const errorLogSchema = new mongoose.Schema(
  {
    err: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 255,
    },
    action: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ErrorLog = mongoose.model("ErrorLog", errorLogSchema);
exports.ErrorLog = ErrorLog;
