import Todo from "../models/Todo";
export default {
  async all() {
    // Retrieves all todos
    try {
      const todos = await Todo.findAll();
      if (Array.isArray(todos) || todos.length > 0) {
        return todos;
      } else {
        throw new Error("There are no todos to retrieve.");
      }
    } catch (error) {
      throw error;
    }
  },
  async fetch(id) {
    // Fetches todo by id
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
  async create({ name }) {
    // Create todo with payload
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
  async delete(id) {
    // Delete todo by id
    try {
      const todo = await this.fetch(id);
      await todo.destroy();
    } catch (error) {
      throw error;
    }
  },
  async update({ id, values }) {
    // Updates todo by id
    try {
      const todo = await this.fetch(id);
      await todo.update(values);

      return todo;
    } catch (error) {
      throw error;
    }
  }
};
