const express = require('express');
const app = express();
const db = require('./database/models');
moviesRouter = require('./routes/movies.js');
genreRouter = require('./routes/genres.js');

const cors = require('cors');


app.get('/' , require('./database/models/index'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/movies', moviesRouter);
app.use('/genres', genreRouter);


app.listen(3000, function() {
    console.log('servidor corriendo en puerto 3000');
    console.log('http://localhost:3000');
});