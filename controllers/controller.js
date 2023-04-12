const Logged = require("../public/_javascript/logged")
const Animes = require("./animes/animes")


class Controller {
    
    async index(req, res){
        const profile = await Logged(req);
        
        res.render("index", {
            logged: profile.logged,
            profileUrl: profile.profileUrl
        });
    }
   
    async adminArea(req, res)
    {
        const profile = await Logged(req);

        res.render("./management/index",{
            logged: profile.logged,
            profileUrl: profile.profileUrl
        });
    }
}

module.exports = new Controller();
