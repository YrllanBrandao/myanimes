const express = require("express");
const router = express.Router();
const middleware = require("../middleware/middleware");
const Upload = require("../middleware/upload");
// controllers
const User = require("../controllers/user/userController");
const Register = require("../controllers/user/register");
const Auth = require("../controllers/user/auth");
const Controller = require("../controllers/controller");
const Anime = require("../controllers/animes/animesController");

// general routes
router.get("/", Controller.index);

// admin routes
router.get("/admin-area", Controller.adminArea);
router.get("/admin-area/anime-register", Anime.animeIndex);
router.post("/admin-area/anime", Anime.registerAnime)
// animes routes
router.get("/random", Anime.getRandom);
router.get("/anime", Anime.getEpisode);

// user routes
router.get("/login", Auth.index);
router.post("/login", Auth.auth);
router.get("/logout", Auth.logout);
router.get("/register", Register.index);
router.post("/register", Register.register);
router.get("/profile", middleware, User.perfil);
router.get("/recovery-password", User.recoveryIndex);
router.post("/recovery-password", User.genToken);
router.get("/recovery-account/:token", User.changePassByToken);
router.post("/recovery-account", User.changePasswordRecovery);

module.exports = router;
