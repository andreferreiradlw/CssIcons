const path = require('path');
// npm install --save express
const express = require('express');
// import the express package

// npm install --save body-parser
const bodyParser = require('body-parser');
// import the body-parser package

const mongoose = require('mongoose');
// import mongoose package

const iconsRoutes = require('./routes/icons');
// import posts routes

const app = express();
// execute the express package

app.use(bodyParser.json());
// middleware for parsing json data
app.use(express.urlencoded({ extended: false }));
// parse application/x-www-form-urlencoded (optional)

mongoose.connect('mongodb+srv://postsAdmin:Wz6FViMK0Icav5Et@cluster0-84mkz.mongodb.net/CssIcons?retryWrites=true', { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to MongoDB Database!');
  })
  .catch(() => {
    console.log('Connection Failed!');
  });
// connect to mongodb atlas cluster

// setup headers for CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-Width, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, PUT, OPTIONS');
  next();
});

// get all documents in collection
app.use('/api/icons', iconsRoutes);
// use posts routes and filter for calls with path /api/posts/*

module.exports = app;
// export the entire express app
// to be imported by server.js
