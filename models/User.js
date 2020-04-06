import { DataTypes } from "sequelize";
import Todo from "./Todo";
import db from "../database";
import argon2 from "argon2";

const validate = { min: 2 };

const User = db.define("User", {
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
  salt: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.hasMany(Todo, { as: "todos", allowNull: true });

User.beforeCreate(async (user, options) => {
  try {
    user.password = await argon2.hash(user.password);
  } catch (error) {
    throw error;
  }
});

export default User;
