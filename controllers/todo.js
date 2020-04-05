import todoService from "../database/todo";
import { parseQueryParams } from "../utils";

/**
 * Returns all Todos.
 * @param {*} req the http(s) request object
 * @param {*} res the http(s) response object
 */
export const getTodos = async (req, res) => {
  try {
    const validColumns = ["id", "name", "completed", "createdAt", "updatedAt"];
    const order = parseQueryParams(req.query, validColumns);
    const todos = await todoService.all({ order });
    res.status(200).send(todos);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

/**
 * Returns specific Todo from ID.
 * @param {*} req the http(s) request object
 * @param {*} res the http(s) response object
 */
export const getTodo = async (req, res) => {
  try {
    const todo = await todoService.fetch(req.params.id);
    res.status(200).send(todo.dataValues);
  } catch (error) {
    res.status(400).send(error);
  }
};

/**
 * Deletes Todo by ID.
 * @param {*} req the http(s) request object
 * @param {*} res the http(s) response object
 */
export const deleteTodo = async (req, res) => {
  try {
    await todoService.delete(req.params.id);
    res.status(200).send(`Successfully deleted Todo #`);
  } catch (error) {
    res.status(400).send(error);
  }
};

/**
 * Adds a new Todo.
 * @param {*} req the http(s) request object
 * @param {*} res the http(s) response object
 */
export const addTodo = async (req, res) => {
  try {
    const newTodo = await todoService.create(req.body);
    res.status(200).json(newTodo);
  } catch (error) {
    res.status(400).send(error);
  }
};

/**
 * Updates an exisitng Todo by ID.
 * @param {*} req the http(s) request object
 * @param {*} res the http(s) response object
 */
export const updateTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, completed } = req.body;

    const payload = {
      id,
      values: {
        name,
        completed,
      },
    };

    const todo = await todoService.update(payload);
    res.status(200).send(todo);
  } catch (error) {
    res.status(400).send(error);
  }
};
