// npm install --save mongoose
const mongoose = require('mongoose');

// https://mongoosejs.com/docs/index.html
const iconSchema = mongoose.Schema({
  name: { type: String, required: true },
  classNames: { type: String, required: true },
  htmlChildMarkup: { type: Boolean, required: true},
  style: { type: String, required: false },
  cssHidden: { type: String, required: false },
  tags: [String],
  cssMarkup: { type: String, required: false },
  cssMarkupBefore: { type: String, required: false },
  cssMarkupAfter: { type: String, required: false },
  cssChildMarkup: { type: String, required: false },
  cssChildMarkupBefore: { type: String, required: false },
  cssChildMarkupAfter: { type: String, required: false }
});

module.exports = mongoose.model('Icon', iconSchema);
