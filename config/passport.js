const passport = require("passport");
import passportJwt from "passport-jwt";
import userService from "../database/user";
import dotenv from "dotenv";
dotenv.config();

const { Strategy, ExtractJwt } = passportJwt;

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.TOKEN_SECRET || "Im-pickle-rick!",
};

export default new Strategy(opts, async (payload, done) => {
  console.log(payload, payload.data, payload.data.id);
  try {
    const user = await userService.fetchById(payload.data.id);
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  } catch (err) {
    console.error(err);
    return done(err, false);
  }
});
