// npm install --save mongoose
const mongoose = require('mongoose');

// https://mongoosejs.com/docs/index.html
const iconSchema = mongoose.Schema({
  name: { type: String, required: true },
  classNames: { type: String, required: true },
  htmlChildMarkup: { type: Boolean, required: true},
  style: { type: String, required: false },
  cssHidden: { type: String, required: false },
  tag: [String]
});

module.exports = mongoose.model('Icon', iconSchema);
