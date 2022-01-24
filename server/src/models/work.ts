import mongoose from "mongoose";

const { Schema } = mongoose;

const workSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    required: true,
    trim: true,
  },
  preview: {
    url: String,
    alternativeText: String,
    caption: String,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  shortDescription: {
    type: String,
    required: true,
    trim: true,
  },
  info: {
    url: String,
    date: Date,
  },
  role: {
    type: String,
    trim: true,
  },
  technology: {
    type: String,
    trim: true,
  },
  learning: {
    type: String,
    trim: true,
  },
  images: [
    {
      url: String,
      alternativeText: String,
      caption: String,
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Work", workSchema);
