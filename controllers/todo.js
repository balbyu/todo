import Todo from "../models/Todo";

/**
 * Returns all Todos.
 * @param {*} req the http(s) request object
 * @param {*} res the http(s) response object
 */
export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.send(todos);
  } catch (error) {
    console.log("Oops, didnt work");
  }
};

/**
 * Returns specific Todo from ID.
 * @param {*} req the http(s) request object
 * @param {*} res the http(s) response object
 */
export const getTodo = (req, res) => {
  const id = Number(req.params.id);
  res.send(`Get Todo w/ ID: ${id}`);
};

/**
 * Deletes Todo by ID.
 * @param {*} req the http(s) request object
 * @param {*} res the http(s) response object
 */
export const deleteTodo = (req, res) => {
  const id = Number(req.params.id);
  res.send(`Delte Todo w/ ID: ${id}`);
};

/**
 * Adds a new Todo.
 * @param {*} req the http(s) request object
 * @param {*} res the http(s) response object
 */
export const addTodo = async (req, res) => {
  const { name } = req.body;

  try {
    if (name && name.length > 0) {
      const newTodo = await Todo.create({ name });
      res.send(newTodo);
      console.log("New todo added:", newTodo);
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

/**
 * Updates an exisitng Todo by ID.
 * @param {*} req the http(s) request object
 * @param {*} res the http(s) response object
 */
export const updateTodo = (req, res) => {
  const id = Number(req.params.id);
  res.send(`Update Todo w/ ID: ${id}`);
};
