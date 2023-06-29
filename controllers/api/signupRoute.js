// http://localhost:3001/api/signup

const router = require('express').Router();
const { User } = require('../../models');

router.get('/', async (req, res) => {
    // Send the rendered Handlebars.js template back as the response
    res.render('signup');
});

// SIGNUP 
router.post('/', async (req, res) => {
    console.log("req: ",  req.body)

    try {
      const dbUserData = await User.create({
        userName: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
  
      // Set up sessions with a 'loggedIn' variable set to `true`
      req.session.save(() => {
        req.session.loggedIn = true;
        res.status(200).json({ user: dbUserData, message: 'You are now logged in!' });
      });
    //   res.status(200).json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

module.exports = router; 