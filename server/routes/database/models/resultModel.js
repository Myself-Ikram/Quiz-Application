import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
  username: { type: String, default: "" },
  result: { type: Array, default: [] },
  attempts: { type: Number, default: 0 },
  points: { type: Number, default: 0 },
  achieved: { type: String, default: "" },
  playedAt: { type: Date, default: Date.now },
});
export default mongoose.model("Result", resultSchema);
