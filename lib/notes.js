const fs = require('fs');
const path = require('path');
// const { db } = require('../Develop/db/db.json');

function addNote(body, notesArray) {
    const createNote = body;

    notesArray.push(createNote);

    fs.writeFileSync(
        path.join(__dirname, '../Develop/db/db.json'),
        JSON.stringify({ notesArray }), null, 2)
    
    return createNote;
}

module.exports = {addNote}