// http://localhost:3001/api
const router = require('express').Router();

const loginRoute = require('./loginRoute')
const signupRoute = require('./signupRoute');
const dashboardRoute = require('./dashboardRoute');
const updateDeleteRoutes = require('./updateDeleteRoutes');

router.use('/login', loginRoute);
router.use('/signup', signupRoute);
router.use('/dashboard', dashboardRoute);
router.use('/', updateDeleteRoutes);

module.exports = router;