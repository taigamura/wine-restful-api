// Configures the application

var express = require('express');
var app = express();
var db = require('./db');

var UserController = require('./user/UserController');

// Tells the app to link it to the route: /users
// '/' route in UserController gets mapped to /users
app.use('/users', UserController);

// Used to make app object visible to the rest of the program when we call for it using require()
module.exports = app;