const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api');
//http://localhost:3001/api/ is our current route. If I see /api that means I am doing some kind of data exchange. In this case, we're going to the database
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
