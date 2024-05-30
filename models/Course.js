const mongoose = require("mongoose");

const importantNotesSchema = new mongoose.Schema({
  quote: {
    type: String,
    required: false,
  },
  list: {
    type: [Object],
  },
});

const resourceSchema = new mongoose.Schema({
  icon: {
    type: String,
    required: true,
    maxlength: 255,
  },
  text: {
    type: String,
    required: true,
    maxlength: 255,
  },
  link: {
    type: String,
    required: true,
  },
});

const weekSchema = new mongoose.Schema({
  weekName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
  },
  resources: {
    type: [resourceSchema],
    required: false,
  },
});

const courseSchema = new mongoose.Schema(
  {
    courseName: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 255,
    },
    playlist: {
      type: String,
      required: false,
      minlength: 2,
    },
    playlist2: {
      type: String,
      required: false,
      minlength: 2,
    },
    drive: {
      type: String,
      required: false,
      minlength: 2,
    },
    importantNotes: {
      type: [importantNotesSchema],
      required: false,
    },
    weeks: {
      type: [weekSchema],
      required: false,
    },
    year: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Year",
    },
    semester: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Semester",
    },
    finalized: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);
exports.Course = Course;
