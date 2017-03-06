let express = require('express');
let router = express.Router();

let Person = require('../controllers/person')

router.get('/', Person.read)

router.post('/', Person.create)

router.put('/:id', Person.update)

router.delete('/:id', Person.deleteData)

module.exports = router
