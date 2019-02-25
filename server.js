const express = require('express');
const bodyParser = require('body-parser');

const movies = require('./routes/movies');

const app = express();

app.use(bodyParser.json());
app.use('/movies', movies);

const PORT = process.env.PORT || 5000;

//Serve static assets if in production
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    
    //Set static folder
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

app.listen(PORT,() => {
    console.log(`Listening on port ${PORT}`);
});