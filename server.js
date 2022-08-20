const router = require('express').Router();
const express = require('express')
const app = express();

// const { notes } = require('./Develop/db/db.json');

const PORT = process.env.PORT || 3001;

// Adding the Routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Calling the Routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`On ${PORT}`)
})

module.exports = router;