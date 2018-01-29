

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
// Sets an initial port. We'll use this later in our listener
const PORT = process.env.PORT || 3010;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

app.get('/notes', function (req, res) {
    db.Note.findAll({
        limit: 15,
        where: {},
        // order: [['id', 'DESC']]
    }).then((entries) => {
        res.json(entries)
    })
}
);
app.get('/test', (req, res) =>{
    let uuid = uuidv1();
        db.Note.create({
        title: 'as;lkdfjsdlk',
        body:'askjhdhaskjdhjk',
        category: 'sports',
        title:'alksdjaslk',
        emailAddress: 'rdzobrist.dev@gmail.com',
        username: 'kjdhfdksjfh',
        password: 'hashedPWD',
        guid: uuid,
    }).then(savedNote=> {

        console.log(savedNote);
        res.json(savedNote)
        res.sendStatus(200);
    }).catch(error => {
        console.log(error)
    })
});


// -------------------------------------------------
app.get("/api/saved", function (req, res) {

    db.Note.findAll({
        limit: 10,
        where: {},
        order: [['id', 'DESC']]
    }).then( (entries) => {
        res.json(entries)
    })}

)
  


// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function (req, res) {
   
    res.sendFile(__dirname + "public/index.html");
});
// success Route. This will redirect the user to our rendered React application
// app.get("/success", function(req, res) {
//   res.sendFile(__dirname + "/public/success.html");
// });
// -------------------------------------------------
// Syncing our sequelize models and then starting our Express app
// // =============================================================

// pool.connect((err, db, done) => {
//     if (err) {
//         return console.log(err);

//     } else (db.query('SELECT * from stc_mern_notepads', (err, table) => {
//         done();
//         if (err) { console.log(err) }
//         else { console.log(table) }
//     }))
// });

// -------------------------------------------------
// Starting the Express app
// =============================================================
    app.listen(PORT, function (req, res) {

        console.log("App listening on PORT " + PORT);
    });

