// Include Server Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const uuidv1 = require('uuid/v1');
const bcrypt = require('bcryptjs');
const sequelize = require('sequelize');
const db = require('./models');
// Require History Schema
// const db = require("./models");



// Create Instance of Express
const app = express();
// Sets an initial port
const PORT = process.env.PORT || 3010;

// Run Morgan for Logging
app.use
app.use(logger("dev"));
app.use(bodyParser.json({type: '*/*'}));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));

app.use(express.static("public"));


// ++++++++++++++++++++++++++++++
// .....__ Notes API __..........
// ++++++++++++++++++++++++++++++
app.get('/notes', (req, res) => {
    db.Note.findAll({
        limit: 15,
        where: {},
        order: [['id', 'ASC']]
    }).then((entries) => {
        res.json(entries)
    })
});

app.get("/note/:id", (req, res) => {
    
    db.Note.findOne({
        where: {
            id: req.params.id
        }
    }).then((entry) => {
        res.send(entry);
    }).catch(error => {
        console.log(error)
    })
}

)


app.delete("/note/:id", (req, res) => {

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

)

app.post('/new/note', (req, res) => {
    let uuid = uuidv1();
    db.Note.create({
        title: req.body.title,
        body: req.body.body,
        category: req.body.category,
        guid: uuid,
    }).then(savedNote => {

        console.log(savedNote);
        res.sendStatus(200);
    }).catch(error => {
        console.log(error)
    })
});


app.put('/editnote/:id', (req, res) => {
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
})

// ++++++++++++++++++++++++++++++++++++++++
// .......... __ AUTH API __ ..............
// ++++++++++++++++++++++++++++++++++++++++





// Main "/" Route. This will redirect the user to our rendered React application
app.get("/",  (req, res) => {

    res.sendFile(__dirname + "public/index.html");
});


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({}).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});