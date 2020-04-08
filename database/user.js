import User from "../models/User";

export default {
  async all() {
    try {
      const users = await User.findAll({
        attributes: { exclude: ["password"] },
      });
      console.log(users);
      if (Array.isArray(users) || users.length > 0) {
        return users;
      } else {
        throw new Error("There are no users to retrieve.");
      }
    } catch (error) {
      throw error;
    }
  },
  async fetchByUsername(username) {
    try {
      if (!username) throw new Error("Name is empty.");
      const user = await User.findOne({
        where: { username },
      });
      return user;
    } catch (error) {
      throw error;
    }
  },
  async fetchById(id) {
    try {
      if (!id) throw new Error("Id is undefined.");
      id = Number(id);
      console.log(id);
      const user = await User.findByPk(id);
      return user;
    } catch (error) {
      throw error;
    }
  },
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
