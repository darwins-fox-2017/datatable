let Person = require('../models/person')

create = (req, res, next) => {
  let doc = new Person(req.body)
  doc.save().then(function(data) {
    res.send(data)
  }).catch(function(err) {
    res.send(err)
  })
}

read = (req, res, next) => {
  // req.body.page or req.params.page = bla || 1 -> skip page * limit page
  // req.body.page or req.params.limit = bla || 10 -> limit display per page
  // req.body.page or req.params.sortBy = bla || id -> asc
  Person.find({}).skip(5).limit(2).sort('_id').exec((err, docs) => {
      if(err) res.send(err)
      res.json(docs)
  })
}

update = (req, res, next) => {
  Person.findById(req.params.id, (err, doc) => {
    if (err) res.send(err)
    else {
      doc.update(req.body, (error, data) => {
        if(error) res.send(error)
        else res.send(data)
      })
    }
  })
}

deleteData = (req, res, next) => {
  Person.remove({_id : req.params.id}, (err, doc) => {
    if (err) res.send(err)
    else res.send(doc)
  })
}

module.exports = {
  create: create,
  read: read,
  update: update,
  deleteData: deleteData
}
