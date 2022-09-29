const fs = require('fs');
const path = require('path');
// const { db } = require('../Develop/db/db.json');

function findNoteById(id, notesArray) {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
};

function addNote(body, notesArray) {
    const createNote = body;

    notesArray.push(createNote);

    fs.writeFileSync(
        path.join(__dirname, '../Develop/db/db.json'),
        JSON.stringify({ notes: notesArray }), null, 2)
    
    return createNote;
};

//to delete a note we must get its id
function delNote(id, notesArray) {
    //get id
    const index = notesArray.findIndex(element => element.id === id);

    notesArray.splice(index,1);
    fs.writeFileSync(
        path.join(__dirname, '../Develop/db/db.json'),
        JSON.stringify({ notes: notesArray }), null, 2)
        return notesArray;
};


module.exports = {addNote, findNoteById, delNote}