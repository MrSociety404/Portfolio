import mongoose from "mongoose";

const { Schema } = mongoose;

const technology = new Schema({
  icon: {
    url: String,
    alternativeText: String,
    caption: String,
  },
  website: String,
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

export default mongoose.model("Technology", technology);
