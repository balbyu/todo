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
    const userId = req.user.dataValues.id;
    const todos = await todoService.all({
      order,
      where: { userId },
    });

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
    const todoId = req.params.id;
    const userId = req.user.dataValues.id;
    const todo = await todoService.fetch({ todoId, userId });
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
    const todoId = req.params.id;
    const userId = req.user.dataValues.id;
    await todoService.delete({ todoId, userId });
    res.status(200).send(`Successfully deleted Todo ${todoId}`);
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
    const userId = req.user.dataValues.id;
    const payload = req.body;
    const newTodo = await todoService.create({ ...payload, userId });
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
    const userId = req.user.dataValues.id;
    const todoId = req.params.id;

    const { name, completed } = req.body;

    const payload = {
      todoId,
      values: {
        name,
        completed,
      },
    };

    const todo = await todoService.update({ ...payload, userId });
    res.status(200).send(todo);
  } catch (error) {
    res.status(400).send(error);
  }
};
