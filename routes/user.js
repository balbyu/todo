import { create, login, getUsers, validate } from "../controllers/user";

export default function (router) {
  router.get("/users", getUsers);
  router.post("/users", create);
  router.post("/users/login", login);
  router.get("/users/validate", validate);
}
