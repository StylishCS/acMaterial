const mongoose = require("mongoose");
const yearSchema = new mongoose.Schema(
  {
    semesters: {
      type: [mongoose.Schema.Types.ObjectId],
      required: true,
      ref: "Semester",
    },
  },
  { timestamps: true }
);

const Year = mongoose.model("Year", yearSchema);
exports.Year = Year;
