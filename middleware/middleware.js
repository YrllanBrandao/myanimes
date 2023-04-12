function middleware(req, res, next) {
    const id  = req.session.user;

    if (id === undefined || id === null) {
      res.redirect("/login");
    }
    else{
        next();
    }
  }

module.exports = middleware