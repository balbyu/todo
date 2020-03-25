import express from "express";
import router from "./routes";
import database from "./database";

const app = express();
app.use("/", router);

database
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

export default app;
