// Contains the actions which control the flow 
// of data into and from db

// Using the express router to create a subset of routes 
// which can be modular and independent from the whole app
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

// bodyParser is used as middleware to handle data in elegance
// Comes in handy when sending data through HTTP requests using forms
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Starts using User in controller
var User = require('./User');

// --------------- Creating a new User ---------------

// POST method takes 2 params: 
//      '/' = route which will be linked to function
//      function = the function linked

//      req = request to server
//      res = response from the server
router.post('/', function (req, res) {
    
    // create method takes 2 params:
    //      object = values to be inserted into db
    //      function = callback with err and value of success, user
    User.create({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    },
    function (err, user) {
        if (err) {
            return res.status(500).send("There was a problem adding the information to the db");
        }

        res.status(200).send(user);
    });
});

// --------------- Returns all the users in the db ---------------

// GET method takes 2 params
router.get('/', function (req, res) {

    // find() returns values from db
    //      first param is object defining the 
    //      requirements which must be fulfilled and in this case, all
    User.find({}, function (err, users) {
        if (err) {
            return res.status(500).send("There was aproblem finding the users");
        }

        res.status(200).send(users);
    });
});

// --------------- GET single the user in the db ---------------
//      /:id = This notation means that it's a placeholder 
//             for a query parameter, a simple value, 
//             which will be sent along with the request
//             --> The value passed to /:id will be accessible
//                 through req.params object

router.get('/:id', function (req, res) {
    // findById() is a mongoose method which will only want ID 
    // by which it will return user
    User.findById(req.params.id, function (err, user) {
        if (err) {
            return res.status(500).send("There was a problem finding a user");
        }
        if (!user) {
            return res.status(404).send("No user found");
        }

        // Return the found user
        res.status(200).send(user);
    });
});


// --------------- DELETE single user from the db ---------------
// Same formatting as router.get above
router.delete('/:id', function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err, user) {
        if (err) {
            return res.status(500).send("There was a problem deleting the user");
        }

        // User is successfully dated
        res.status(200).send("User " + user.name + " was deleted");
    });
});


// --------------- UPDATE single user in the db ---------------
router.put('/:id', function (req, res) {
    // Takes 3 params:
    //       ID
    //       Object corresponding to the user whose values will be updated
    //       Callback function
    // Request updated data to be sent back via {new: true}
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
        if (err) {
            return res.status(500).send("There was a problem updating user");
        }

        res.status(200).send(user);
    });
});

// Export b/c app.js needs it
module.exports = router;