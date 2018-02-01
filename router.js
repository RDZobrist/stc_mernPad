const notes_controller = require('./src/controller/notes');
const auth_controller = require('./src/controller/authentication');
const uuidv1 = require('uuid')

module.exports = function(app){

    // ++++++++++++++++++++++++++++++
    // .....__ Notes API __..........
    // ++++++++++++++++++++++++++++++
    app.get('/notes', notes_controller.fetchAllNotesJSON)
       
    
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

    app.post('/signup')



    // Main "/" Route. This will redirect the user to our rendered React application
    app.get("/", (req, res) => {

        res.sendFile(__dirname + "public/index.html");
    });

}