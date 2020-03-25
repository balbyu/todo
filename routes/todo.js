import {
  getTodos,
  getTodo,
  addTodo,
  deleteTodo,
  updateTodo
} from "../controllers/todo";

export default function(router) {
  router.get("/todos", getTodos);
  router.get("/todos/:id", getTodo);
  router.post("/todos", addTodo);
  router.delete("/todos/:id", deleteTodo);
  router.put("/todos/:id", updateTodo);
}
