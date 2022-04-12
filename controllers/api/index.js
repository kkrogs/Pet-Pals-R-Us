const router = require('express').Router();
const userRoutes = require('./userRoutes');
const petsRoutes = require('./petRoutes');
const searchRoutes = require('./searchRoutes')
//http://localhost:3001/api/ is our current route. If I see /api that means I am doing some kind of data exchange. In this case, we're going to the database
router.use('/users', userRoutes);
router.use('/pets', petsRoutes);
router.use('/search', searchRoutes);

module.exports = router;
