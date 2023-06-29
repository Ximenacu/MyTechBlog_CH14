const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api');

// const usersRoute = require('./usersRoute');
// const dashboardRoute = require('./dashboardRoute');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);


module.exports = router;
