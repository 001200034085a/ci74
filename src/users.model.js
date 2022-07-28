const mongoose = require('mongoose');
const  Schema  = mongoose.Schema;
const validator = require('validator');

const userSchema = new Schema({
   name:  String ,
   age: Number,
   address:  String ,
   gender:  String ,
   phoneNumber: String ,
   email: String,
});

module.exports = mongoose.model('Users', userSchema);
