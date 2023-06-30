const router = require('express').Router();
const { Sequelize } = require('sequelize');
const {Posts, Comments} = require('../models')
const withAuth = require('../utils/auth');

router.get('/favicon.ico', (req, res) => {
  console.log("------------favicon")
});

router.get('/:id',withAuth, async (req,res) =>{
  console.log("------------------GET /:ID ------------------------")
  console.log(":id :---", req.params.id);
  const loggedIn = req.session.loggedIn;
  try {
    const dbposts =  await Posts.findByPk(req.params.id);
    // console.log("----------", dbposts)
    // const posts = dbposts.map((post)=>post.get({plain: true}));
    const posts = dbposts.get({plain: true});
    
    console.log("-----posts: ", posts);

    const dbcomments = await Comments.findAll({
      order: [['createdAt', 'DESC']],
      where: {post_id: req.params.id}})
    // console.log('-----comments: ', dbcomments)
    const comments = dbcomments.map((comment) => comment.get({ plain: true }));
    console.log('-----comments: ', comments)

    res.render('single',{posts,comments, layout: 'main', loggedIn } ); //, 
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  
})

router.get('/', async (req, res) => {
  console.log("------------------GET / ------------------------")
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

router.post('/newComment',withAuth, async (req, res) => {
  console.log("------------------POST /newComment ------------------------")
  const loggedIn = req.session.loggedIn;
  console.log(req.session)
  console.log("---req: ",  req.body)
  console.log("---- user.id:", req.session.userId)
  try {
    const newComment = await Comments.create({
      contentt: req.body.newComment,
      post_id: req.body.post_id,
      user_id: req.session.userId
    });
    res.status(200).json(newComment);
    // .redirect(`/${req.body.post_id}`); 
  } catch (err){
    console.log(err);
    res.status(500).json(err);
  }

})


module.exports = router;
