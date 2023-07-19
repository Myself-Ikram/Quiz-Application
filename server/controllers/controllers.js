import Questions from "../routes/database/models/questionsModel.js";
import Results from "../routes/database/models/resultModel.js";
import questions, { answers } from "../routes/database/data.js";
//Questions
export async function getQuestions(req, res) {
  try {
    const q = await Questions.find();
    res.json(q);
  } catch (error) {
    res.json({ error });
  }
}
export async function insertQuestions(req, res) {
  try {
    if ((await Questions.find()).length === 0) {
      await Questions.insertMany({ questions, answers }, function (err, data) {
        res.json({ msg: "Inserted Successfully" });
      });
    } else {
      res.json({ msg: "Data is alresdy inserted" });
    }
  } catch (error) {
    res.json({ error });
  }
}
export async function deleteQuestions(req, res) {
  try {
    await Questions.deleteMany();
    res.json({ msg: "Deleted Successfully" });
  } catch (error) {
    res.json({ error });
  }
}
//Result
export async function getResult(req, res) {
  try {
    const r = await Results.find();
    res.json(r);
  } catch (error) {
    res.json({ error });
  }
}
export async function storeResult(req, res) {
  try {
    const { username, result, attempts, points, achieved } = req.body;
    if (!username && !result) throw new Error("Username is not given");
    Results.create(
      { username, result, attempts, points, achieved },
      function (err, data) {
        res.json({ msg: "Successfully saved result" });
      }
    );
  } catch (error) {
    res.json({ error });
  }
}
export async function deleteResult(req, res) {
  try {
    await Results.deleteMany();
    res.json({ msg: "Successfully deleted results" });
  } catch (error) {
    res.json({ error });
  }
}
