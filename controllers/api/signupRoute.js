// http://localhost:3001/api/signup

const router = require('express').Router();
const { Users } = require('../../models');

router.get('/', async (req, res) => {
    // Send the rendered Handlebars.js template back as the response
    res.render('signup');
});

// SIGNUP 
router.post('/', async (req, res) => {
    console.log("req: ",  req.body)

    try {
      const dbUserData = await Users.create({
        userName: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
      // console.log("---dbUserData: ", dbUserData)

      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.userName = dbUserData.dataValues.userName;
        req.session.userId = dbUserData.dataValues.id;
        res.status(200).json({ user: dbUserData, message: 'You are now logged in!' });
        // console.log("...........", req.session);
      });
    //   res.status(200).json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

module.exports = router; 