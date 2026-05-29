import mongoose, { Schema } from "mongoose";

const NoticeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      enum: ["General", "Exam", "Holiday", "Admission", "Event"],
      default: "General",
    },

    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium",
    },

    published: {
      type: Boolean,
      default: true,
    },

    expiryDate: Date,
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.Notice || mongoose.model("Notice", NoticeSchema);
