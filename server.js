const express = require('express');
const Pokemon = require('./models/pokemon.js');
const app = express();
const port = 3000;


// INDEX
app.get('/pokemon', (req, res) => {
res.render('index.ejs', { allPokemon: Pokemon });
});
// I want this page to only display the images of my Pokemon 



// SHOW
app.get('/:indexOfPokemon', (req, res) => {
res.render('show.ejs', { data: Pokemon[req.params.id] });
});

app.listen(3000);