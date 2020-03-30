import Sequelize from "sequelize";
import config from "../config";

const { name, user, password, host } = config.database;

const sequelize = new Sequelize(name, user, password, {
  host,
  dialect: "postgres"
});

export default sequelize;
