import mongoose from "mongoose";

const CourseModel = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String
  },
  description: {
    type: String
  },
  categorie: {
    type: String,
    required: true
  },
  level: {
    type: String,
    enum: ["beginner", "Intermediate", "Advanced"]
  },
  price: {
    type: Number
  },
  thumnail: {
    type: String
  },

  // ⚠️ If multiple students → use Array
  enrolled_Student: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }],

  // ⚠️ If multiple lectures → use Array
  lectures: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lecture"
  }],

  // ✅ Creator
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  isPublised: {
    type: Boolean,
    default: false
  },

  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Review"
  }]

}, { timestamps: true });

const Course = mongoose.model("Course", CourseModel);

export default Course;
