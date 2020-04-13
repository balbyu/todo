import userService from "../database/user";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

/**
 * Fetches and returns all Users.
 * @param {*} req the http(s) request object
 * @param {*} res the http(s) response object
 */
export const getUsers = async (req, res) => {
  try {
    const users = await userService.all();
    res.status(200).send(users);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

/**
 * Creates and returns a new User.
 * @param {*} req the http(s) request object
 * @param {*} res the http(s) response object
 */
export const create = async (req, res) => {
  try {
    const user = await userService.create(req.body);
    res.status(200).send(user);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

/**
 * Verifies the credentials passed in for the user, returning a signed JWT Token if valid.
 * @param {*} req the http(s) request object
 * @param {*} res the http(s) response object
 */
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
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
