const mongoose = require("mongoose");
const { Semester } = require("./Semester");
const yearSchema = new mongoose.Schema(
  {
    semesters: {
      type: [Semester],
      required: true,
      ref: "Semester",
    },
  },
  { timestamps: true }
);

const Year = mongoose.model("Year", yearSchema);
exports.Year = Year;
