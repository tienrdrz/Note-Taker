const path = require('path');
const router = require('express').Router();

// GET the index.html
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../Develop/public/index.html'))
});

//GET the notes.html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../Develop/public/notes.html'));
})


module.exports = router;