const router = require('express').Router();
const { Pet } = require('../../models');
const withAuth = require('../../utils/auth');

//new code
// once they signup from the signup form for pets, the form data is sent to this api users POST -- see first post below
//The current route for this file is: http://localhost:3001/api/pets

router.post('/', async (req, res) => {
  console.log("petsRoutes")
  try {
    const petData = await Pet.create(req.body);
    console.log("petData")
    console.log(petData)
    req.session.save(() => {
      req.session.pet_id = petData.id;
      req.session.logged_in = true;

      res.status(200).json(petData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});









// router.get('/pet', withAuth, async(req,res) => {

//   try {
//     const petData = await Pet.findAll(
//       {
//         include: [{ model: Person }
//       }
//     );

//     if (!petData) {
//       res.status(404).json({ message: 'There was no information' });
//       return;
//     }

//     res.status(200).json(petData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });























/// old code
// router.post('/', withAuth, async (req, res) => {
//   try {
//     const newPet = await Pet.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });

//     res.status(200).json(newPet);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.delete('/pet', withAuth, async (req, res) => {
//   try {
//     const petData = await Pet.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!petData) {
//       res.status(404).json({ message: 'No pet found' });
//       return;
//     }

//     res.status(200).json(petData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;