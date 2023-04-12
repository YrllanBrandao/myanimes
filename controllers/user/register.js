const bcrypt = require("bcrypt");
const User = require("./user");
const Logged = require("../../public/_javascript/logged");

class Register {
  async register(req, res) {
    //
    const { email, nickname, password} = req.body;

    User.findOne({
      where: {
        email: email,
      },
    }).then((user) => {

        // exists an account
      if (user !== null) {
        res.json({
            status: 400,
            message: "O E-mail já está associado a outra conta, tente fazer <a href='/login' class='fs-6 fw-bold link-dark link-underline'>Login</a>"
        })
      }
      else{
        
        const salt = bcrypt.genSaltSync(10);
        const passwordHashed = bcrypt.hashSync(password, salt);
        User.create({
            nickname, 
            email, 
            password:passwordHashed
        }).then( ()=>{

            res.json({
                status: 200,
                message: "Conta criada com successo, você será redirecionado!"
            })

        })
      }
    });
  }

  async index(req, res) {
    const profile = await Logged(req);

    if(profile.logged)
    {
      res.redirect("/profile");
    }
    res.render("./user/register.ejs",{
      logged: profile.logged
    });
  }
}

module.exports = new Register();