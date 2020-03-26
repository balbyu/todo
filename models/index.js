import * as models from "./";
import db from "../database";

export const initialize = async () => {
  await db.sync({ force: true });
  console.log("Tables have synced!");
};

export default {
  initialize
};
