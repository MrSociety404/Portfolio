import mongoose from "mongoose";

const { Schema } = mongoose;

const mail = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  mail: {
    type: String,
    required: true,
    trim: true,
  },
  message: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Mail", mail);
