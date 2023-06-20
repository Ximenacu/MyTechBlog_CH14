const router = require('express').Router();

router.get('/', async (req, res) => {
    // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.render('uhoh');
    // res.redirect('/login');
  } else {
    res.render('users');
  }
});
  
module.exports = router;