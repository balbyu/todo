import userService from "../database/user";
import pasport from "passport";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

export const getUsers = async (req, res) => {
  try {
    const users = await userService.all();
    res.status(200).send(users);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

export const create = async (req, res) => {
  try {
    const user = await userService.create(req.body);
    res.status(200).send(user);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username) throw new Error("A username was not provided");
    if (!password) throw new Error("No password was provided");

    const user = await userService.fetchByUsername(username);
    const verified = await argon2.verify(user.dataValues.password, password);

    if (verified) {
      delete user.dataValues.password;

      const token = jwt.sign({ data: user }, process.env.TOKEN_SECRET, {
        expiresIn: "1d",
      });

      res.status(200).send({ user, token });
    } else {
      throw new Errorr("Your username or password did not match.");
    }
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

export const edit = () => {};
