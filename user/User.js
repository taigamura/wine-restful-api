var mongoose = require('mongoose');

// Schema for the Users in users db
var UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

mongoose.model('User', UserSchema);

// Binds layout of the schema to the model named --> 'User'
module.exports = mongoose.model('User');