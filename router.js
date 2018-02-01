const notes_controller = require('./src/controller/notes');
// const auth_controller = require('./src/controller/authentication');
const uuidv1 = require('uuid')
const db = require('./models')
module.exports = function(app){

    // ++++++++++++++++++++++++++++++
    // .....__ Notes API __..........
    // +++++'+++++++++++++++++++++++++


    // fetch all notes and render JSON
    app.get("/notes", notes_controller.fetchAllNotesJSON);
    // get note by id
    app.get("/note/:id", notes_controller.fetchNote);
    // delete note
    app.delete("/note/:id", notes_controller.deleteNote);
    // create note
    app.post("/new/note", notes_controller.createNote);
    // edit note
    app.put("/editnote/:id", notes_controller.editNote);
  


    // Main "/" Route. This will redirect the user to our rendered React application
    app.get("*", (req, res) => {

        res.sendFile(__dirname + "public/index.html");
    });

}