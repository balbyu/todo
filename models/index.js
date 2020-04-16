import db from "../database";
import userModel from "./User";
import todoModel from "./Todo";

export const Todo = db.define("Todo", todoModel.dataValues, todoModel.options);
export const User = db.define("User", userModel.dataValues);

/**
 * Initalizes the database.
 */
export const initialize = async () => {
  await db.sync();
  console.log("All Sequelize models have synced.");
};

/**
 * Associations
 */
todoModel.associations();
userModel.associations();

/**
 * Hooks
 */
User.beforeCreate(userModel.beforeCreate);

export default {
  initialize,
};
