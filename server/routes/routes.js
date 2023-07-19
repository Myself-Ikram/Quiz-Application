import { Router } from "express";
import * as controller from "../controllers/controllers.js";
const router = Router();

router
  .route("/questions")
  .get(controller.getQuestions)
  .post(controller.insertQuestions)
  .delete(controller.deleteQuestions);

router
  .route("/result")
  .get(controller.getResult)
  .post(controller.storeResult)
  .delete(controller.deleteResult);
export default router;
