const router = require('express').Router();

const apiRoutes = require('./api');
//any html we are going to send back will go into homeroutes
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
