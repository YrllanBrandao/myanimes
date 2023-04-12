const express = require("express");
const Router = express.Router();

const Animes = require("./animes")
const Logged = require("../../public/_javascript/logged");

class Anime{
  async getAnimes(req, res)
  {
 
    // code
    const ANIMES = await Animes.findAll();

    
  }
  async getEpisode(req, res)
  {
    const profile = await Logged(req);

    res.render("view",{
      logged: profile.logged,
      profileUrl: profile.profileUrl
    })
  }
  async realeases(req,res)
  {
    const ANIMES = await Animes.findAll();
    const LIMIT = 100;
  }

  // the initial page to anime routes
  async animeIndex(req, res)
  {
    const profile = await Logged(req);
   

   res.render("./management/register",{
    logged: profile.logged,
    profileUrl: profile.profileUrl
   });
  }


  async registerAnime(req,res)
  {
    const {title, seasons, author, synopsis, coverUrl, animeType} = req.body;


     await Animes.create({
      title,
      seasons, 
      author,
      synopsis,
      coverUrl,
      animeType
    }).then(()=>{
      res.json({
        status: 200,
        message: "Animes registrado!!"
      })
    })
    .catch(err => res.json({status: 400, message: err}))

  }


}


module.exports = new Anime();