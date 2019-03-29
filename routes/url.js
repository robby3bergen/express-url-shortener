const express = require('express');
const router = express.Router();

const Url = require('../models/url');

// GET url
router.get('/url/findbyid/:shortPath', (request, response, next) => {
  const shortPath = request.params.shortPath;

  Url.findOne({shortPath})
  .then(url => {
    return response.status(200).json(url);
  })
  .catch(next)
})

// POST new url
router.post('/url/add', (request, response, next) => {
  const destination = request.body.destination;
  //TODO: auto generate shortPath
  const shortPath = '1a2b3c4';

  Url.findOne({ destination })
  .then(url => {
    if (!url) {
      const newUrl = new Url({destination, shortPath});
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
