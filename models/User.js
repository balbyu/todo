import { DataTypes } from "sequelize";
import Todo from "./Todo";
import db from "../database";
import argon2 from "argon2";

const validate = { min: 2 };

export default {
  dataValues: {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: {
          args: 6,
          msg: "A password requires a minimum of 6 characters.",
        },
      },
    },
  },
  beforeCreate: async (user, options) => {
    try {
      user.password = await argon2.hash(user.password);
    } catch (error) {
      throw error;
    }
  },
  associations() {
    db.models.User.hasMany(db.models.Todo, {
      as: "todos",
      allowNull: true,
      foreignKey: "userId",
      onDelete: "set null",
    });
  },
};
