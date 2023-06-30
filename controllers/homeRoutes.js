const router = require('express').Router();
const { Sequelize } = require('sequelize');
const Posts = require('../models/posts')

router.get('/', async (req, res) => {
  const loggedIn = req.session.loggedIn;
  try {
    const dbPosts = await Posts.findAll();
    const posts = dbPosts.map((review) => review.get({ plain: true }))
    console.log("POSTS: ----", posts);
    res.render('home', { posts, layout: 'main', loggedIn }); //,
  } catch (err){
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req,res) =>{
  const loggedIn = req.session.loggedIn;
  try {
    const dbposts =  await Posts.findByPk(req.params.id);
    posts = dbposts.get({ plain: true });
    console.log("-----posts: ", posts);
    res.render('single',{ posts, layout: 'main', loggedIn } ); //, 
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  
})

module.exports = router;
