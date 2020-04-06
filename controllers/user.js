import userService from "../database/user";
import argon2 from "argon2";

// Sign-up :  Create user
// Login : Authenticate user
// Update : Edit username, email, name, etc..

export const create = async (req, res) => {
  try {
    const user = await userService.create(req.body);
    res.status(200);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await userService.findByUsername(username);
    const verified = await argon2.verify(user.password, password);

    if (verified) {
      res.status(200).redirect("/todos");
    } else {
      throw new Errorr("Your username or password did not match.");
    }
  } catch (error) {
    console.error(error);
    res.stats(400).send(error);
  }
};

export const edit = () => {};
