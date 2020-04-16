import { DataTypes } from "sequelize";
import db from "../database";

export default {
  dataValues: {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  options: {
    timestamps: true,
  },
  associations() {
    db.models.Todo.hasMany(db.models.Todo, { as: "todos", allowNull: true });
    db.models.Todo.belongsTo(db.models.Todo, { as: "parent", allowNull: true });
  },
};
