let mongoose = require('mongoose')

let mongoDB = 'mongodb://127.0.0.1/data_table_db'
mongoose.Promise = global.Promise
mongoose.connect(mongoDB)

let db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error'))

module.exports = db
