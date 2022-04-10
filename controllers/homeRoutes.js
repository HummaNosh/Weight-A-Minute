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

// if you want the 'select page'
router.get("/select", (req, res) => {
  res.render('select');
});

// when you go to the signup page, if youre logged in, go to profile page..CHANGE
router.get('/signUp', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  res.render('signUp');
});

// give me the add excersise page if not logged in go to sign up page
router.get('/addExcersise', (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/signUp');
    return;
  }
  // if session logged in already just give the page
  if (req.session.logged_in) {
  res.render('addExcersise');
}});

//  give me the history page if not logged in go to sign up page
router.get('/history', (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/signUp');
    return;
  }
  res.render('history');
});

// give me the progress page if not logged in go to sign up page
router.get('/progress', (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/signUp');
    return;
  }
  res.render('progress');
});

//  give me the dashboard page if not logged in go to sign up page
router.get('/dashboard', (req, res) => {

  if (!req.session.logged_in) {
    res.redirect('/signUp');
    return;
  }
  res.render('dashboard', 
  // {db_data: mysql_data});;
// }
)});

//  give me the about me page
router.get('/aboutme', (req, res) => {
  res.render('aboutme');
});


router.get('/profile', (req, res) => {
  res.render('profile');
});


router.get('/addExcersise', (req, res) => {
  res.render('profile');
});


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