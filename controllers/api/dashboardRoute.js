// http://localhost:3001/api/dashboard
const {Posts, Users} = require('../../models')


const router = require('express').Router();
const withAuth = require('../../utils/auth');

router.get('/',withAuth ,async (req, res) => {
  console.log("---------------- Get /api/dashboard -------------")
  console.log("id: ", req.session.userId);
  const loggedIn = req.session.loggedIn;
  try {
    const dbPosts = await Posts.findAll({
      order: [['createdAt', 'DESC']],
      where: {user_id: req.session.userId}, 
      include: [{
        model: Users,
        attributes: ['userName'],
      }]
    });
    console.log("---dbPosts: ", dbPosts);
    const myposts = dbPosts.map((comment) => comment.get({ plain: true }));
    console.log("---serialized:", myposts)
    res.render('dashboard', {myposts, layout: 'main', loggedIn });
  }catch (err){
    console.log(err);
    res.status(500).json(err);
  }
  
});

router.post('/new', withAuth, async (req, res) =>{
  console.log("---------------- POST /api/dashboard/new -------------")
  const loggedIn = req.session.loggedIn;

  console.log("id: ", req.session.userId);

  try {
    const dbPosts = await Posts.create({
      title: req.body.newPostTitle,
      content: req.body.newPostBody,
      user_id:  req.session.userId,
    });
    console.log("---dbPosts: ", dbPosts);
    res.status(200).json(dbPosts);
  }catch (err){
    console.log(err);
    res.status(500).json(err);
  }

})
  
module.exports = router;