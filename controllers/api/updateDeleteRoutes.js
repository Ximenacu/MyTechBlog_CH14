// http://localhost:3001/api
const {Posts} = require('../../models')
const router = require('express').Router();
const withAuth = require('../../utils/auth');

router.get('/:id',withAuth, async (req,res) =>{
  console.log("------------------GET /api/:ID ------------------------")
  console.log(":id :---", req.params.id);
  res.redirect(`/${req.params.id}`);
  
})

module.exports = router;