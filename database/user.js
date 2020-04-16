import { User } from "../models";

export default {
  /**
   * Returns all Todo Objects in database with optional args.
   */
  async all() {
    try {
      const users = await User.findAll({
        attributes: { exclude: ["password"] },
      });
      if (Array.isArray(users) || users.length > 0) {
        return users;
      } else {
        throw new Error("There are no users to retrieve.");
      }
    } catch (error) {
      throw error;
    }
  },

  /**
   * Returns a User from the database from provided username.
   * @param {*} username - the username of the User
   */
  async fetchByUsername(username) {
    try {
      if (!username) throw new Error("A username was not provided.");
      const user = await User.findOne({
        where: { username },
      });
      return user;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Returns a User from the database from provided ID.
   * @param {*} id - the ID of the User
   */
  async fetchById(id) {
    try {
      if (!id) throw new Error("An ID was not provided.");
      id = Number(id);
      const user = await User.findByPk(id);
      return user;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Creates a new User with the provided body detail.
   * @param {*} body - The body of the User model.
   */
  async create(body) {
    try {
      const user = await User.create(body);
      return user;
    } catch (error) {
      throw error;
    }
  },
  async delete() {},
  async update() {},
};
