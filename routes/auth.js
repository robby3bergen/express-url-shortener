const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const User = require('../models/user');

/* -- SIGNUP ROUTE -- */
router.post('/signup', (request, response, next) => {
  const {username, password} = request.body;

  // check if username and password were entered
  if (!username || !password) {
    return response.status(422).json({
      'Error': 'Enter a valid username and password'
    })
  }

  User.findOne({username})
  .then(user => {
    // return error if user already exists
    if (user !== null) {
      return response.status(422).json({
        'Error': 'Username already exists'
      })
    }

    // hash password
    const salt = bcrypt.genSaltSync();
    const hashedPassword = bcrypt.hashSync(password, salt);

    // create new user
    const newUser = new User({username, password: hashedPassword});

    // store user in database and return json response
    return newUser.save(err => {
      if (err) {
        response.status(422).json({
          'Error': 'Unable to store user in database'
        })
      } else {
        request.session.currentUser = newUser; // store user in session
        response.status(200).json(newUser);
      }
    });
  })
  .catch(next);
})

module.exports = router;