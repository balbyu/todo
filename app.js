import express from "express";
import cors from "cors";
import router from "./routes";
import database from "./database";
import models from "./models";

const app = express();
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
