const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

// this will put the select (homepage) page on home

router.get('/', async (req, res) => {
  try {
  
    // Pass serialized data and session flag into template
    res.render('select',  {  
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }

});
router.get('/signUp', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('signUp');
});

router.get('/addExcersise', (req, res) => {

  res.render('addExcersise');
});

router.get('/history', (req, res) => {

  res.render('history');
});

// bring in progress page
router.get('/progress', (req, res) => {

  res.render('progress');
});

// bring in dashboard page
router.get('/dashboard', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/select');
    return;
  }
  res.render('dashboard');
});

router.get('/aboutme', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/select');
    return;
  }
  res.render('aboutme');
});

router.get('/profile', (req, res) => {
  // if (req.session.logged_in) {
  //   res.redirect('/');
  //   return;
  // }
  console.log("pooooo")
  res.render('profile');
});

// Dan's routes
router.get('/createNewExercise', (req, res) => {
  res.render('createNewExercise')
})

module.exports = router;


// router.get('/project/:id', async (req, res) => {
//   try {
//     const projectData = await Project.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     const project = projectData.get({ plain: true });

//     res.render('project', {
//       ...project,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Use withAuth middleware to prevent access to route
// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Project }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

