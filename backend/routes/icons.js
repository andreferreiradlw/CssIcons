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
    name: req.body.name,
    classNames: req.body.classNames,
    htmlChildMarkup: req.body.htmlChildMarkup,
    style: req.body.style,
    tags: req.body.tags,
    cssHidden: req.body.cssHidden,
    cssMarkup: req.body.cssMarkup,
    cssMarkupBefore: req.body.cssMarkupBefore,
    cssMarkupAfter: req.body.cssMarkupAfter,
    cssChildMarkup: req.body.cssChildMarkup,
    cssChildMarkupBefore: req.body.cssChildMarkupBefore,
    cssChildMarkupAfter: req.body.cssChildMarkupAfter
  });
  // save to mongoDB
  icon.save().then(createdIcon => {
    res.status(201).json({
      message: 'Icon added successfully!',
      post: {
        id: createdIcon._id,
        name: createdIcon.name,
        classNames: createdIcon.classNames,
        htmlChildMarkup: createdIcon.htmlChildMarkup,
        style: createdIcon.style,
        tags: createdIcon.tags,
        cssHidden: createdIcon.cssHidden,
        cssMarkup: createdIcon.cssMarkup,
        cssMarkupBefore: createdIcon.cssMarkupBefore,
        cssMarkupAfter: createdIcon.cssMarkupAfter,
        cssChildMarkup: createdIcon.cssChildMarkup,
        cssChildMarkupBefore: createdIcon.cssChildMarkupBefore,
        cssChildMarkupAfter: createdIcon.cssChildMarkupAfter
      }
    });
  })
})

module.exports = router;
