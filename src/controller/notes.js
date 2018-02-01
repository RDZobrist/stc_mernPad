const db = require('../../models');
const uuidv1 = require('uuid/v1');

exports.fetchAllNotesJSON = function(req, res, send){
    db.Note.findAll({
        limit: 15,
        where: {},
        order: [['id', 'ASC']]
    }).then((entries) => {
        res.json(entries)
    })
}