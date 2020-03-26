import express from "express";
import router from "./routes";
import database from "./database";
import models from "./models";
import bodyParser from "body-parser";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
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
