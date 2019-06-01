// Configures the application

var express = require('express');
var app = express();
var db = require('./db');

var UserController = require('./user/UserController');

// Tell app to link '/' to callback
app.use('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// Tells the app to link it to the route: /users
// '/' route in UserController gets mapped to /users
app.use('/users', UserController);

// // Displays "Hello World" on default app.js
// app.get('/', function (req, res) {
//     res.send('Hello World Nodemon');
// });

// Used to make app object visible to the rest of the program when we call for it using require()
module.exports = app;