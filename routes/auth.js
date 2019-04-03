const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const User = require('../models/user');

/* -- Signup route -- */
router.post('/signup', (request, response, next) => {
  const {username, password} = request.body;

  // check if username and password were entered
  if (!username || !password) {
    return response.status(422).json({
      'error': 'Enter a valid username and password'
    })
  }

  User.findOne({username})
  .then(user => {
    // return error if user already exists
    if (user !== null) {
      return response.json({
        'error': 'Username already exists'
      })
    }

    // hash password
    const salt = bcrypt.genSaltSync();
    const hashedPassword = bcrypt.hashSync(password, salt);

    // create new user
    const newUser = new User({username, password: hashedPassword});

    // store user in database and return json response
    return newUser.save((err, user) => {
      if (err) {
        response.status(422).json({
          'error': 'Unable to store user in database'
        })
      } else {
        const currentUser = {'userId': user._id, 'username': user.username};
        request.session.currentUser = currentUser; // store user in session
        response.status(200).json(currentUser);
      }
    });
  })
  .catch(next);
})

/* -- Login route -- */
router.post('/login', (request, response, next) => {
  const {username, password} = request.body;

  // check if username and password were entered
  if (!username || !password) {
    return response.status(422).json({
      'error': 'Enter a valid username and password'
    })
  }

  // get user from database
  User.findOne({username})
  .then(user => {
    if (user) {
      // if password matches, store user in session and send response
      if (bcrypt.compareSync(password, user.password)) {
        const currentUser = {'userId': user._id, 'username': user.username};
        request.session.currentUser = currentUser;
        return response.status(200).json(currentUser);
      } else {
        return response.status(401).json({'Unauthorised': 'User or password is invalid'});
      }
    } else {
      return response.status(401).json({'Unauthorised': 'User or password is invalid'});
    }
  })
  .catch(next)
})

/* -- User-logged-in route -- */
router.get('/userloggedin', (request, response, next) => {
  return response.status(200).json(request.session.currentUser);
})

/* -- Logout route -- */
router.post('/logout', (request, response, next) => {
  request.session.currentUser = null;
  return response.status(200).json({
    'userId': null,
    'username': null,
    'message': 'user has logged out'
  })
})

module.exports = router;