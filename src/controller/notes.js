const db = require('../../models');
const uuidv1 = require('uuid/v1');

exports.fetchAllNotesJSON = function(req, res){
    db.Note.findAll({
        limit: 15,
        where: {},
        order: [['id', 'ASC']]
    }).then((entries) => {
        res.json(entries)
    })
};

exports.fetchNote = function(req, res){
    db.Note.findOne({
        where: {
            id: req.params.id
        }
    }).then((entry) => {
        res.send(entry);
    }).catch(error => {
        console.log(error)
    })
};

exports.deleteNote = function(req, res){
    db.Note.destroy({
        where: {
            id: req.params.id
        }
    }).then((entry) => {
        console.log(entry.id)
        res.sendStatus(200)
    }).catch(error => {
        console.log(error)
    })
}

exports.createNote = function(req, res){
    let uuid = uuidv1();
    let uuid1 = uuidv1() + 'jklkoms';
    db.Note.create({
        title: req.body.title,
        body: req.body.body,
        category: req.body.category,
        guid: uuid,
        UserId: uuid1
    }).then(savedNote => {

        console.log(savedNote);
        res.sendStatus(200);
    }).catch(error => {
        console.log(error)
    })
}

exports.editNote = function(req, res){
      db.Note.update({
          title: req.body.title,
          body: req.body.body,
          category: req.body.category
      }, {
          where: {
              id: req.body.id
          }
      }).then((updatedNote) => {
          console.log('this is the updated note: ', updatedNote);
          res.sendStatus(200);
      })
}