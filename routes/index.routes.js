const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => { 
    const loggedinUser = req.session.user || req.user;
    console.log({ loggedinUser });
    res.render('index', { user: loggedinUser });
});


const loginCheck = () => {
    return (req, res, next) => {
      // if the user is logged in we proceed as intended (call next())
      if (req.session.user || req.user) {
        next();
      } else {
        // if user is not logged in we redirect to login
        res.redirect('/login');
      }
    }
  }

router.get('/private', loginCheck(), (req, res, next) => {
  res.render('private');
});

router.get('/private-two', loginCheck(), (req, res, next) => {
    res.render('private-two');
  });



module.exports = router;
