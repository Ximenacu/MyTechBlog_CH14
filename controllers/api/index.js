// http://localhost:3001/api
const router = require('express').Router();

// const usersRoute = require('./usersRoute');

const loginRoute = require('./loginRoute')
const signupRoute = require('./signupRoute');
const dashboardRoute = require('./dashboardRoute');

// router.use('/users', usersRoute);

router.use('/login', loginRoute);
router.use('/signup', signupRoute);
router.use('/dashboard', dashboardRoute);

module.exports = router;