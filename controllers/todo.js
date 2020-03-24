export const getTodos = (req, res) => {
  res.send("All Todos");
};

export const getTodo = (req, res) => {
  // Need ID?
  res.send("One Todo");
};

export const deleteTodo = (req, res) => {
  res.send("Delte Todo");
};

export const addTodo = (req, res) => {
  // Need ID?
  res.send("Add Todo");
};

export const updateTodo = (req, res) => {
  // Need ID?
  res.send("Update Todo");
};
