// Configures the application

var express = require('express');
var app = express();
var db = require('./db');

var UserController = require('./user/UserController');


// Tells the app to link it to the route: /users
// '/' route in UserController gets mapped to /users
app.use('/users', UserController);

// open 'web' folder to use
app.use(express.static('web'));

// // Tell app to link '/' to callback
// app.use('/', (req, res) => {
//     res.sendFile(__dirname + "/index.html");
// });

// // When route (http://localhost:3000/) accessed, return "Hello World" on page (???)
// // When the server accesses '/' with get method, "Hello World" is returned
// app.get('/', (req, res) => res.send('Hello World'));

// // When (http://localhost:3000/api/v1/list) is accessed, return TODO JSON
// app.get('/api/v1/list', (req, res) => {
//     const todoList = [
//         { title: 'Test TODO 1', done: true},
//         { title: 'Test TODO 2', done: false},
//         { title: 'Test TODO 3', done: false}
//     ];

//     res.json(todoList);
// });


// // Displays "Hello World" on default app.js
// app.get('/', function (req, res) {
//     res.send('Hello World Nodemon');
// });

// Used to make app object visible to the rest of the program when we call for it using require()
module.exports = app;