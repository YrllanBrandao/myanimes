const bcrypt = require("bcrypt");
const User = require("./user");
const Logged = require("../../public/_javascript/logged");
class Auth {

  async auth(req, res) {
    const { email, password } = req.body;

    User.findOne({
      where: {
        email: email,
      },
    }).then((user) => {
      if (user !== null) {
        const correct = bcrypt.compareSync(password, user.password);

        if (correct) {
          req.session.user = user.id;

          
          res.json({
            status: 200,
            message: "Successo!!, redirecionando",
          });
          
        } else {
          res.json({
            status: 400,
            message: "Incorrect Password",
          });
        }
      } else {
        res.json({
          status: 404,
          message:
            "Conta não encontrada, <a href='/register' class='link-theme'>Clique aqui</a> para criar uma contar",
        });
      }
    });
  }

  async logout(req, res){
    req.session.user = undefined;
    res.redirect("/login")
  }
  async index(req, res) {
    const profile = await Logged(req);

    if(profile.logged)
    {
      res.redirect("/profile");
    }


    res.render("./user/login.ejs",{
      logged: profile.logged,
      profileUrl: profile.profileUrl
    });
  }
}

module.exports = new Auth();
