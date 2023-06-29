const router = require('express').Router();

router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  const loggedIn = req.session.loggedIn;
  res.render('home', { layout: 'main', loggedIn });
});

module.exports = router;
