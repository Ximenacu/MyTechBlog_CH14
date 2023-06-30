// http://localhost:3001/api/login

const router = require('express').Router();
const { Users } = require('../../models');

router.get('/', async (req, res) => {
    // Send the rendered Handlebars.js template back as the response
    res.render('login');
});

// lOGIN
router.post('/', async (req, res) => {
    try {
      const dbUserData = await Users.findOne({
        where: {
          email: req.body.email,
        },
      });
  
      if (!dbUserData) {
        res
          .status(400)
          .json({ message: 'Could not find user' });
        return;
      }

      const validPassword = await dbUserData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect password. Please try again!' });
        return;
      }
  
      // Once the user successfully logs in, set up the sessions variable 'loggedIn'
      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.userName = dbUserData.dataValues.userName;
        req.session.userId = dbUserData.dataValues.id;
        res
          .status(200)
          .json({ user: dbUserData, message: 'You are now logged in!' });
          console.log("..........", req.session);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
);

// Logout
// /api/login/logout
router.get('/logout', (req, res) => {
  console.log('---------- LOGOUT POST REQ RECEIVED');
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;