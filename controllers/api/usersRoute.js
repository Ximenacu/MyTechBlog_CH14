// const router = require('express').Router();
// const { User } = require('../../models');

// router.get('/', async (req, res) => {
//     // Send the rendered Handlebars.js template back as the response
//     res.render('users');
// });

// router.get('/signup', async (req, res) => {
//     res.render('signup');
//     // res.send("this will be signup")
// });

// // SIGNUP 
// router.post('/signup', async (req, res) => {
//     console.log("req: ",  req.body)
//     console.log("req username: ", req.body.username)
//     try {
//       const dbUserData = await User.create({
//         userName: req.body.username,
//         email: req.body.email,
//         password: req.body.password,
//       });
//       res.status(200).json(dbUserData);
  
//       // Set up sessions with a 'loggedIn' variable set to `true`
//       // req.session.save(() => {
//       //   req.session.loggedIn = true;
  
  
//       //   res.status(200).json(dbUserData);
//       // });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
// });
  
// // lOGIN
// router.post('/login', async (req, res) => {
//     try {
//       const dbUserData = await User.findOne({
//         where: {
//           email: req.body.email,
//         },
//       });
  
  
//       if (!dbUserData) {
//         res
//           .status(400)
//           .json({ message: 'Incorrect email or password. Please try again!' });
//         return;
//       }
  
  
//       const validPassword = await dbUserData.checkPassword(req.body.password);
  
  
//       if (!validPassword) {
//         res
//           .status(400)
//           .json({ message: 'Incorrect email or password. Please try again!' });
//         return;
//       }
  
  
//       // Once the user successfully logs in, set up the sessions variable 'loggedIn'
//       req.session.save(() => {
//         req.session.loggedIn = true;
  
  
//         res
//           .status(200)
//           .json({ user: dbUserData, message: 'You are now logged in!' });
//       });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   }
// );
  
// module.exports = router;
  