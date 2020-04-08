import passport from "passport";
import {
  getTodos,
  getTodo,
  addTodo,
  deleteTodo,
  updateTodo,
} from "../controllers/todo";

const opts = { session: false };

export default function (router) {
  router.get("/todos", passport.authenticate("jwt", opts), getTodos);
  router.get("/todos/:id", passport.authenticate("jwt", opts), getTodo);
  router.post("/todos", passport.authenticate("jwt", opts), addTodo);
  router.delete("/todos/:id", passport.authenticate("jwt", opts), deleteTodo);
  router.put("/todos/:id", passport.authenticate("jwt", opts), updateTodo);
}
