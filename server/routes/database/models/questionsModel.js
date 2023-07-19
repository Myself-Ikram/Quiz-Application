import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  questions: { type: Array, default: [] },
  answers: { type: Array, default: [] },
  playedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Question", questionSchema);
