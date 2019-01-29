const express = require('express');
// use express

const Icon = require('../models/icon');
// import mongoose Post Schema

const router = express.Router();

// get all documents in response
router.get('', (req, res) => {
 Icon.find()
  .then(documents => {
    // return documments + status 200 OK
    res.status(200).json({
      message: "Icons fetched successfully!",
      icons: documents
    });
  });
});

// create new icons
router.post('', (req, res) => {
  //create new icon object
  const icon = new Icon({
    label: req.body.label,
    category: req.body.category,
    html: req.body.html,
    htmlMarkup: req.body.htmlMarkup,
    htmlMarkupBefore: req.body.htmlMarkupBefore,
    htmlMarkupAfter: req.body.htmlMarkupAfter,
    htmlChildMarkup: req.body.htmlChildMarkup,
    htmlChildMarkupBefore: req.body.htmlChildMarkupBefore,
    htmlChildMarkupAfter: req.body.htmlChildMarkupAfter
  });
  // save to mongoDB
  icon.save().then(createdIcon => {
    res.status(201).json({
      message: 'Icon added successfully!',
      post: {
        id: createdIcon._id,
        label: createdIcon.label,
        category: createdIcon.category,
        html: createdIcon.html,
        htmlMarkup: createdIcon.htmlMarkup,
        htmlMarkupBefore: createdIcon.htmlMarkupBefore,
        htmlMarkupAfter: createdIcon.htmlMarkupAfter,
        htmlChildMarkup: createdIcon.htmlChildMarkup,
        htmlChildMarkupBefore: createdIcon.htmlChildMarkupBefore,
        htmlChildMarkupAfter: createdIcon.htmlChildMarkupAfter
      }
    });
  })
})

module.exports = router;
