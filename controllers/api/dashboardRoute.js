// http://localhost:3001/api/dashboard

const router = require('express').Router();
const withAuth = require('../../utils/auth');

router.get('/',withAuth ,async (req, res) => {
  const loggedIn = req.session.loggedIn;
  res.render('dashboard', { layout: 'main', loggedIn });
});

  
module.exports = router;