let db = require('../db.js')
const mongoose = require('mongoose');

let Schema = mongoose.Schema

let personSchema = new Schema({
  name : {type: String, require: true},
  position: String,
  office : String,
  age : Number,
  startDate : Date,
  salary : String
})

let Person = mongoose.model('Person', personSchema)

module.exports = Person
