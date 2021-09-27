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
app.get('/pokemon/:index', (req, res) => {
res.render('show.ejs', { allPokemon: Pokemon[req.params.index] });
});
// I want this page to display name, image, unordered list of types, and stats
// ejs syntax problem on show,ejs

app.listen(3000);