import { Todo } from "../models";

export default {
  /**
   *  Returns all Todo objects in the database. If the returned value is not an array or
   *  if there are no values in the array, an error is thrown.
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
      throw error;
    }
  },
  /**
   * Returns a single Todo object from the database based on it's ID. If the ID is blank, NaN,
   * or the database doesn't contain an object with the provided ID, an error is thrown.
   * @param {*} id - the ID of the Todo to retrieve
   */
  async fetch(id) {
    id = Number(id);
    try {
      if (!id || isNaN(id)) {
        throw new Error("Bad Id.");
      }
      const todo = await Todo.findByPk(id);
      if (!todo || !todo.dataValues) {
        throw new Error(`Todo does not exist for id ${id}.`);
      }

      return todo;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  /**
   * Creates a Todo object with the provided name. If the name is blank or empty, an
   * error is thrown.
   * @param {*} name - the name of the Todo
   */
  async create({ name }) {
    try {
      if (name && name.length > 0) {
        const todo = await Todo.create({ name });
        return todo;
      } else {
        throw new Error(`The name: ${name} is not valid.`);
      }
    } catch (error) {
      throw error;
    }
  },
  /**
   * Deletes a Todo from the database based on it's ID.
   * @param {*} id
   */
  async delete(id) {
    try {
      const todo = await this.fetch(id);
      await todo.destroy();
    } catch (error) {
      throw error;
    }
  },
  /**
   * Updates an existing Todo with new information based on the provided payload.
   * @param {*} payload - the ID and values to update in the Todo object
   */
  async update({ id, values }) {
    try {
      const todo = await this.fetch(id);
      await todo.update(values);
      return todo;
    } catch (error) {
      throw error;
    }
  },
};
