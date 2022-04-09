const router = require('express').Router();
const { Pet, User } = require('../models');
const withAuth = require('../utils/auth');
//current route is /
//This is the very first page we are taken to is the homeroutes file. GET is what we use by default in our browser.
//this is the http://localhost:Port/ //If we have nothing after the last slash, it is our root route. If we GET to the route route we are expecting to get back to the home page, we can see athat on line 23
router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const petData = await Pet.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const pets = petData.map((pet) => pet.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      pets, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
//I can go to this from the browser address bar http://localhost:3001/project/:id id would be replaced with actual project ID
router.get('/pet/:id', async (req, res) => {
  try {
    const petData = await Pet.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const pet = petData.get({ plain: true });

    res.render('pet', {
      ...pet,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route. withAuth is a helper that checks to see if the person is logged in. Anytime it is showing someone's profile so they can add, delete, or edit a pet, they need to check the withAuth
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Pet }],
    });

    const user = userData.get({ plain: true });
   //rendering profile.handlebars file below
    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// rendering search handlebars

router.get('/search', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Pet }],
    });

    const user = userData.get({ plain: true });
   //rendering profile.handlebars file below
    res.render('search', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
