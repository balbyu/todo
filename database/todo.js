import { Todo } from "../models";
export default {
  /**
   * Returns all Todo Objects in database with optional args.
   * @param {*} args arguments passed to sequelize
   */
  async all(args) {
    try {
      const todos = await Todo.findAll(args);
      if (Array.isArray(todos) || todos.length > 0) {
        return todos;
      } else {
        throw new Error("There are no todos to retrieve.");
      }
    } catch (error) {
      console.log("There was an error getting all Todos from database", error);
    }
  },

  /**
   * Returns a single Todo object from the database based on the Todo ID and the User ID.
   * If the ID is blank, NaN, or the database doesn't contain an object with the provided ID,
   * an error is thrown.
   * @param {Number} todoId - the ID of the Todo to retrieve
   * @param {Number} userId - the ID of the User the Todo belongs to
   */
  async fetch({ todoId, userId }) {
    if (!userId) throw new Error(`User ID ${id} does not exist.`);

    const id = Number(todoId);

    try {
      if (!id || isNaN(id)) throw new Error(`Todo ${id} is not a number.`);

      const todo = await Todo.findOne({
        where: { id, userId },
      });

      if (!todo || !todo.dataValues)
        throw new Error(`Todo ${id} does not exist or doesn't have any data.`);

      return todo;
    } catch (error) {
      console.log(
        `There was an error retrieving the Todo ID: ${id} from the User ID: ${userId}.`,
        error
      );
    }
  },

  /**
   * Creates a Todo object with the provided name and User ID. If the name is blank or empty, an
   * error is thrown.
   * @param {String} name - the name of the Todo
   * @param {Number} userId - the ID of the User the Todo belongs to
   */
  async create({ name, userId }) {
    if (!userId) throw new Error(`User ID ${id} does not exist.`);

    try {
      if (name && name.length > 0) {
        const todo = await Todo.create({ name, userId });
        return todo;
      } else {
        throw new Error(`The name: ${name} is not valid.`);
      }
    } catch (error) {
      console.log("There was an error creating the todo", error);
    }
  },
  /**
   * Deletes a Todo from the database based on it's ID.
   * @param payload - the payload to delete from the database
   * @param {Number} payload.todoId - the ID of the Todo to retrieve
   * @param {Number} payload.userId - the ID of the User the Todo belongs to
   */
  async delete(payload) {
    try {
      const todo = await this.fetch(payload);
      await todo.destroy();
    } catch (error) {
      console.log("There was an deleting the todo", error);
    }
  },

  /**
   * Updates an existing Todo based on the provided payload.
   * @param {*} payload - the payload to update in the database
   * @param {Number} payload.todoId - the ID of the Todo to retrieve
   * @param {Number} payload.userId - the ID of the User the Todo belongs to
   * @param {*} payload.values - the values to update
   */
  async update({ todoId, userId, values }) {
    try {
      const todo = await this.fetch({ todoId, userId });
      await todo.update(values);
      return todo;
    } catch (error) {
      console.log("There was an updating the todo", error);
    }
  },
};
