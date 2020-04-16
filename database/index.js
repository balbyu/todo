import Sequelize from "sequelize";
import config from "../config";

// Destructuring assignment operator
const { name, user, password, host } = config.database;

// Build Sequelize object
const sequelize = new Sequelize(name, user, password, {
  host,
  dialect: "postgres",
  logging: false
});

export default sequelize;
