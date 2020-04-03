import db from "../database";

export const initialize = async () => {
  await db.sync();
  console.log("All Sequelize models have synced.");
};

export default {
  initialize
};
