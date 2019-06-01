// Specifies the connection to the database

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/TestDb', {useNewUrlParser: true});


