const router = require('express').Router();
const { Pet } = require('../../models');
const withAuth = require('../../utils/auth');

<<<<<<< HEAD:controllers/api/petRoutes.js
router.post('/', withAuth, async (req, res) => {
  try {
    const newPet = await Pet.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPet);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const petData = await Pet.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!petData) {
      res.status(404).json({ message: 'No pet found with this id!' });
      return;
    }

    res.status(200).json(petData);
  } catch (err) {
    res.status(500).json(err);
  }
});
=======

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://amazon-price1.p.rapidapi.com/search?keywords=Dog%20Collar&marketplace=US",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Host": "amazon-price1.p.rapidapi.com",
		"X-RapidAPI-Key": "14de605de7msh97ddb17e777614dp14d459jsn4613eeb38e45"
	}
};

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });

//Test API functionality ^^



// router.post('/', withAuth, async (req, res) => {
//   try {
//     const newProject = await Project.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });

//     res.status(200).json(newProject);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const projectData = await Project.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!projectData) {
//       res.status(404).json({ message: 'No project found with this id!' });
//       return;
//     }

//     res.status(200).json(projectData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
>>>>>>> main:controllers/api/projectRoutes.js

module.exports = router;
