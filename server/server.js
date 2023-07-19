//Express
import express from "express";
const app = express();
app.use(express.json());
//MongoDB
import connect from "./routes/database/conn.js";
//Morgan (for logging request in console)
import morgan from "morgan";
app.use(morgan("tiny"));
//Cors (for sharing the data)
import cors from "cors";
app.use(cors());
//environment variables
import { config } from "dotenv";
config();
//Routes
import router from "./routes/routes.js";
app.use("/api", router);

const port = process.env.PORT;
connect()
  .then(() => {
    console.log("DataBase Started");
    try {
      app.listen(port, () => console.log("Server started running at 5000"));
    } catch (error) {
      console.log("Server cannot start");
    }
  })
  .catch((error) => {
    console.log("Database error");
  });
