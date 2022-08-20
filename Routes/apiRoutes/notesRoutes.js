const router = require('express').Router();
const { db } = require('../../Develop/db/db.json');

// Will be called in POST to add a note
const addNote = require('../../lib/notes')

// GET the notes in db
router.get('/notes', (req, res) => {
    res.json(db);
});

//POST a new note
router.post('/notes', (req, res) => {
    req.body.id = db.length.toString();

    const result = addNote(req.body, db);
    console.log(result);
    res.json(result);
});

//DELETES a new note

module.exports = router;