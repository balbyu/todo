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
    //db.models.Todo.belongsTo(db.models.User, { as: "user", allowNull: false });
  },
};

// const Todo = db.define(
//   "Todo",
//   {
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     completed: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: false,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// console.log(db.models);

// Todo.hasMany(Todo, { as: "todos", allowNull: true });
// Todo.belongsTo(Todo, { as: "parent", allowNull: true });
// Todo.belongsTo(db.models.User, { as: "user", allowNull: false });

//export default Todo;
