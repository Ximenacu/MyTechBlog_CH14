const router = require('express').Router();
const { Sequelize } = require('sequelize');
const Posts = require('../models/posts')

router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  const loggedIn = req.session.loggedIn;
  try {
    const dbPosts = await Posts.findAll();
    const posts = dbPosts.map((review) => review.get({ plain: true }))
    console.log("POSTS: ----", posts);
    // const post = {
    //   id: 2,
    //   title: 'My Second App',
    //   content: 'I just deployed my second app in heroku!',
    //   user_id: 2,
    // }
    res.render('home', {posts}); //{ layout: 'main', loggedIn },
  } catch (err){
    console.log(err);
    res.status(500).json(err);
  }
  

  
});

module.exports = router;
