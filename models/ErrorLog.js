const mongoose = require("mongoose");
const errorLogSchema = new mongoose.Schema(
  {
    err: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 255,
    },
    controller: {
      type: string,
      required: true,
    },
  },
  { timestamps: true }
);

const ErrorLog = mongoose.model("ErrorLog", errorLogSchema);
exports.ErrorLog = ErrorLog;
