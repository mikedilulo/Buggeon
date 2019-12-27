import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Job = new Schema(
  {
    company: { type: String, required: true },
    hours: { type: Number, required: true },
    shift: { type: String, required: true },
    description: { type: String },
    location: { type: String, required: true },
    job: { type: String, required: true },
    position: { type: String, required: true },
    department: { type: String, required: true },
    benefits: { type: Boolean, default: false },
    vacation: { type: Boolean, default: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Job;
