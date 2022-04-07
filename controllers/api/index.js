const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
//http://localhost:3001/api/ is our current route. If I see /api that means I am doing some kind of data exchange. In this case, we're going to the database
router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

module.exports = router;
