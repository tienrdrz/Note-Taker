const router = require('express').Router();
const { addNote, findNoteById, delNote } = require('../../lib/notes');

//this references the the json body in db.json
const { notes } = require('../../db/db.json');

// // Will be called in POST to add a note
// const addNote = require('../../lib/notes')

//GET the notes.html
router.get('/notes', (req, res) => {
    const result = notes;
    if (notes){
        res.json(result);
    } else {
        res.sendStatus(404); 
        console.log("Error")
    }
})

// // GET the notes in db
// router.get('/notes/:id', (req, res) => {
//     const result = findNoteById(req.params.id, notes);

//     if(result) {
//         res.json(result);
//     } else {
//         res.send(404).json({ message: "Error"});
//     }
// });

//POST a new note
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    const result = addNote(req.body, notes);
    console.log(result);
    res.json(result);
});

//DELETES a new note
router.delete('/notes/:id', (req, res) => {
delNote(req.params.id, notes);
if (delNote) {
    res.json(notes);
} else {
    res.status(404).json({message: "error"});
}
});

module.exports = router;