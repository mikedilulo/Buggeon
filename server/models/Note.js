import mongoose from "mongoose";
const Schema = mongoose.Schema;
//NOTE Need to make sure you declare the Object Id when you are referencing another Model in your projects
const ObjectId = Schema.Types.ObjectId;

var Note = new Schema(
  {
    content: { type: String, required: true },
    bug: { type: ObjectId, ref: "Bug", required: true },
    reportedBy: { type: String, required: true }, //The provided name for who made the note
    flagged: { type: String, enum: ["pending", "completed", "rejected"] }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Note;
