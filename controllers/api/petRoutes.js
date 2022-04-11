const router = require('express').Router();
const { send } = require('express/lib/response');
const { Pet } = require('../../models');
const withAuth = require('../../utils/auth');

//new code
// once they signup from the signup form for pets, the form data is sent to this api users POST -- see first post below
//The current route for this file is: http://localhost:3001/api/pets

router.post('/', async (req, res) => {
  console.log("petsRoutes")
  try {
    console.log(req.session.user_id)
    const petData = await Pet.create({...req.body, user_id:req.session.user_id});
    console.log("petData")
    console.log(petData)
    if (!petData) {
      res.status(400).json({message:"error pet was not added!"})
      
    }
    res.json(petData)
  } catch (err) {
    res.status(400).json(err);
  }
});


router.post('/search', async (req, res) => {
  try {
    const petData = await Pet.findOne({ where: { name: req.body.name } });

    if (!petData) {
      res
        .status(400)
        .json({ message: 'Please add a pet name' });
      return;
    }

    // const validName = await userData.checkName(req.body.password);

    // if (!validPassword) {
    //   res
    //     .status(400)
    //     .json({ message: 'Incorrect email or password, please try again' });
    //   return;
    // }

    req.session.save(() => {
      req.session.pet_id = petData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now at the next page!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});
//the post is goign to be sent by the javascript file to this api and it's goign to be an eventlistener on that logout button
// router.post('/logout', (req, res) => {
//   if (req.session.logged_in) {
//     req.session.destroy(() => {
//       res.status(204).end();
//     });
//   } else {
//     res.status(404).end();
//   }
// });



module.exports = router;