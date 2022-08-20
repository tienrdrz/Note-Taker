const router = require('express').Router();
const express = require('express')
const app = express();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log('hi')
})

module.exports = router;