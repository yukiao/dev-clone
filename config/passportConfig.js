const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { User } = require("../database/models");

passport.use(
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true,
      session: true,
    },
    async function (req, username, password, done) {
      try {
        const user = await User.findOne({ where: { username } });
        if (!user) {
          return done(null, false, { message: "Invalid username or password" });
        }
        if (await user.validatePassword(password)) {
          return done(null, user);
        }
        return done(null, false, { message: "Invalid username or password" });
      } catch (e) {
        return done(e, false, { message: e.message });
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findOne({ where: { id } });
    if (!user) {
      done(null, false, { message: "Invalid account" });
    } else {
      done(null, user);
    }
  } catch (e) {
    done(e, false, { message: e.message });
  }
});
module.exports = passport;
