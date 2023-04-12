const User = require("../../controllers/user/user");

async function Logged(req) {
  const user = req.session.user;
  
  const profile = await User.findByPk(user);

  if (user === undefined || user === undefined) {
    return {
      logged: false
    };
  }

  if (profile === null || profile === undefined) {
    return {
      logged: true,
      profileUrl:
        "",
    };
  }
  const source = profile.profilePictureUrl;

  return {
    logged: true,
    profileUrl: source,
  };
}

module.exports = Logged;
