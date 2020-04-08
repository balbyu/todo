import { create, login, getUsers } from "../controllers/user";

export default function (router) {
  router.get("/users", getUsers);
  router.post("/users", create);
  router.post("/users/login", login);
}
