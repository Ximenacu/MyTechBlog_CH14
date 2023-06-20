const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const usersRoute = require('./usersRoute');
const dashboardRoute = require('./dashboardRoute');

router.use('/', homeRoutes);
router.use('/users', usersRoute);
router.use('/dashboard', dashboardRoute);

module.exports = router;
