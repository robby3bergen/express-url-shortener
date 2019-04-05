const express = require('express');
const router = express.Router();

const Url = require('../models/url');

/* Redirect route */
router.get('/:id', (request, response, next) => {
  const id = request.params.id;

  Url.findById(id)
  .then(url => {
    return response.status(303).redirect(url.destination);
  })
  .catch(next)
})

/* POST new url */
router.post('/url/add', (request, response, next) => {
  // user should not be able to add a url if not logged in
  if (!request.session.currentUser) {
    return response.status(401).json({'error': 'you are not authorized to add urls'});
  }

  //check if destination url already exists in database, else add it
  const {destination, userId} = request.body;
  Url.findOne({ destination })
  .then(url => {
    if (!url) {
      const newUrl = new Url({ destination, userId });
      return newUrl.save(err => {
        if (err) {
          response.status(422).json({'error': 'something went wrong'});
        } else {
          response.status(200).json(newUrl);
        }
      })
    } else {
      response.status(200).json(url);
    }
  })
  .catch(next)
});

/* POST delete url */
router.post('/url/delete', (request, response, next) => {
  // user should not be able to delete a url if not logged in
  if (!request.session.currentUser) {
    return response.status(401).json({'error': 'you are not authorized to delete urls'});
  }

  // delete url
  const {urlId, userId} = request.body;
  Url.deleteOne({ '_id': urlId, userId })
  .then(url => response.status(200).json({'message': 'url was deleted'}))
  .catch(next)
});

/* GET url list */
router.post('/url/list', (request, response, next) => {
  const userId = request.body.userId;
  
  Url.find({ userId })
  .then(listOfUrls => {
    response.status(200).json(listOfUrls);
  })
  .catch(next)
});

module.exports = router;
