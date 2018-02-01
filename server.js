// Include Server Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const uuidv1 = require('uuid/v1');
const bcrypt = require('bcryptjs');
const sequelize = require('sequelize');
const db = require('./models');
const router = require('./router')
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

// initiate router
router(app);



// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({}).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});