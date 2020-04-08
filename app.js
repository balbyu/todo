import express from "express";
import cors from "cors";
import router from "./routes";
import database from "./database";
import models from "./models";
import dotenv from "dotenv";
import strategy from "./config/passport";
import passport from "passport";

const app = express();
dotenv.config();

passport.use(strategy);
app.use(passport.initialize());
app.use(express.json());
app.use(cors());
app.use("/", router);

(async () => {
  try {
    // Await for DB authentication
    await database.authenticate;
    // Await for model initialization
    await models.initialize();
  } catch (err) {
    throw err;
  }
})();

export default app;
