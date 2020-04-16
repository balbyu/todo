import { User } from "../models";

export default {
  /**
   * Returns all Users from the database.
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
      console.log("There was an error getting all Users from database", error);
    }
  },

  /**
   * Returns a User from the database based off their username.
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
      console.log("There was an returning the User from database", error);
    }
  },

  /**
   * Returns a User from the database from provided ID.
   * @param {Number} id - the ID of the User
   */
  async fetchById(id) {
    try {
      if (!id) throw new Error("An ID was not provided.");
      id = Number(id);
      const user = await User.findByPk(id);
      return user;
    } catch (error) {
      console.log("There was an returning the User from database", error);
    }
  },

  /**
   * Creates a new User with the provided body detail.
   * @param {*} body - The body of the User model.
   * @param {*} body.firstName - The user's first name
   * @param {*} body.lastName - The user's last name.
   * @param {*} body.email - The user's email.
   * @param {*} body.username - The user's username.
   * @param {*} body.password - The user's password.
   */
  async create(body) {
    try {
      const user = await User.create(body);
      return user;
    } catch (error) {
      throw error;
    }
  },
  /**
   * Deletes a User from the database based on their ID.
   * @param {Number} id - the ID of the User to delete
   */
  async delete(id) {
    try {
      const user = await this.fetchById(id);
      await user.destroy();
    } catch (error) {
      console.log("There was an deleting the user", error);
    }
  },
  /**
   * Updates an existing User based on the provided payload.
   * @param {*} payload - the payload to update in the database
   * @param {Number} payload.id - the ID of the User to update
   * @param {*} payload.values - the values to update
   */
  async update({ id, values }) {
    try {
      const user = await this.fetchById(id);
      await user.update(values);
      return user;
    } catch (error) {
      console.log("There was an updating the user", error);
    }
  },
};
