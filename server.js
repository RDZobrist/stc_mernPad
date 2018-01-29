

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
app.get('/users', function (req, res) {
    db.stc_mern_notepad.findAll({})
        .then(function (usersDB) {
            res.json(usersDB);

        })
});
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
app.post("/api/saved", function (req, res) {
    let id = id;
//   
//     var preHash = req.body.Password;
//     var hashedPWD;
//     let localIDuuid = uuidv1();

//     // query db, find the value of last id
//     // store last id value to local variable
//     // increment last id by one and save to new user entry
    db.stc_mern_notepad.findAll({
        limit: 1,
        where: {},
        order: [['id', 'DESC']]
    }).then(function (entries) {
        res.json(entries)
    })}
//         last_id = entries[0].id;
//         current_id = last_id + 1;


        // generate salt
        // bcrypt.genSalt(10, function (err, salt) {
        //     // use salt to hash user password
        //     bcrypt.hash(preHash, salt, function (err, hash) {
        //         if (err) throw new Error('Error', err)
        //         else {
        //             hashedPWD = hash;
        //             const sibi_americans = db.sibi_americans.build({
        //                 id: current_id,
        //                 Title: req.body.Title,
        //                 GivenName: req.body.GivenName,
        //                 MiddleInitial: req.body.MiddleInitial,
        //                 Surname: req.body.Surname,
        //                 StreetAddress: req.body.StreetAddress,
        //                 State: req.body.State,
        //                 ZipCode: req.body.ZipCode,
        //                 City: req.body.City,
        //                 EmailAddress: req.body.EmailAddress,
        //                 Username: req.body.Username,
        //                 Password: hashedPWD,
        //                 BrowserUserAgent: req.body.BrowserUserAgent,
        //                 TelephoneNumber: req.body.TelephoneNumber,
        //                 Birthday: req.body.Birthday,
        //                 Color: req.body.Color,
        //                 Ocupation: req.body.Ocupation,
        //                 Company: req.body.Company,
        //                 Vehicle: req.body.Vehicle,
        //                 Domain: req.body.Domain,
        //                 GUID: localIDuuid
        //             }).save().then(newUser => {
        //                 console.log(newUser);
        //                 res.sendStatus(200);
        //             }).catch(error => {
        //                 console.log(error)
        //             })
        //         }
        //     });
        // })

)
  


// Main "/" Route. This will redirect the user to our rendered React application
app.get("*", function (req, res) {
   
    res.sendFile(__dirname + "/index.html");
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
// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({}).then(function () {
    app.listen(PORT, function (req, res) {

        console.log("App listening on PORT " + PORT);
    });
});
