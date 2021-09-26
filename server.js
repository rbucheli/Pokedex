const express = require('express');
const Pokemon = require('./models/pokemon.js');
const app = express();
const port = 3000;

// ROUTES //
// INDEX
app.get('/pokemon', (req, res) => {
res.render('index.ejs', { allPokemon: Pokemon });
});
// I want this page to only display the images of my Pokemon 

// SHOW
app.get('/pokemon/:indexOfPokemon', (req, res) => {
res.render('show.ejs', { data: Pokemon[req.params.id] });
});
// I want this page to display name, image, unordered list of types, and stats

app.listen(3000);