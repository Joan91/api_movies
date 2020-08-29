const express = require('express');
const app = express();
const db = require('../database/models');

const cors = require('cors');

moviesRouter = require('./routes/movies');
genreRouter = require('./routes/genres');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));



app.use('/api/movies', moviesRouter);
app.use('/api/genres', genreRouter);





app.listen(3000, function() {
    console.log('servidor corriendo en puerto 3000');
    console.log('http://localhost:3000');
});