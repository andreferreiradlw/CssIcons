// npm install --save mongoose
const mongoose = require('mongoose');

// https://mongoosejs.com/docs/index.html
const iconSchema = mongoose.Schema({
  label: { type: String, required: true },
  category: { type: String, required: true },
  html: { type: String, required: true},
  htmlMarkup: { type: String, required: true },
  htmlMarkupBefore: { type: String, required: false },
  htmlMarkupAfter: { type: String, required: false },
  htmlChildMarkup: { type: String, required: false },
  htmlChildMarkupBefore: { type: String, required: false },
  htmlChildMarkupAfter: { type: String, required: false }
});

module.exports = mongoose.model('Icon', iconSchema);
