const express = require('express');
const bodyParser = require('body-parser');

const movies = require('./routes/movies');

const app = express();

app.use(bodyParser.json());
app.use('/movies', movies);

const PORT = process.env.PORT || 5000;

app.listen(PORT,() => {
    console.log(`Listening on port ${PORT}`);
});