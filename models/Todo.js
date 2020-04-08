import { DataTypes } from "sequelize";
import db from "../database";

const Todo = db.define(
  "Todo",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: true,
  }
);

Todo.hasMany(Todo, { as: "todos", allowNull: true });
Todo.belongsTo(Todo, { as: "parent", allowNull: true });

export default Todo;
