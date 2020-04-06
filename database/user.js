import User from "../models/User";

export default {
  async all() {},
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
