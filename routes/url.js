const express = require('express');
const router = express.Router();

const Url = require('../models/url');

// POST new url
router.post('/url/add', (request, response, next) => {
  const destination = request.body.destination;

  Url.findOne({ destination })
  .then(url => {
    if (!url) {
      const newUrl = new Url({destination});
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

module.exports = router;
