/**
 * Returns all Todos.
 * @param {*} req the http(s) request object
 * @param {*} res the http(s) response object
 */
export const getTodos = async (req, res) => {
  res.send("All Todos");
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
export const addTodo = (req, res) => {
  res.send("Add new Todo");
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
