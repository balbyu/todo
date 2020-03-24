import {
  getTodos,
  getTodo,
  addTodo,
  deleteTodo,
  updateTodo
} from "../controllers/todo";

export default function(router) {
  router.get("/", getTodos);
  router.get("/:id", getTodo);
  router.post("/", addTodo);
  router.delete("/:id", deleteTodo);
  router.put("/:id", updateTodo);
}
