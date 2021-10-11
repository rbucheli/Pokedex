// DEPENDENCIES //
const express = require('express');
const Pokemon = require('./models/pokemon.js');
const app = express();
const methodOverride = require('method-override');
const pokemon = require('./models/pokemon.js');
const port = 3000;

// DATABASE

// MODELS

// MIDDLEWARE
app.use(methodOverride('_method'));
app.use((req, res, next) => {
  console.log('I run for all routes');
  next();
});
app.use(express.urlencoded({ extended:false }));


// ROUTES //
// INDEX (get)
app.get('/pokemon', (req, res) => {
res.render('index.ejs', { allPokemon: Pokemon });
});
// I want this page to only display the images of my Pokemon 

// NEW (get)
app.get('/pokemon/new', (req, res) => {
  res.render('new.ejs');
});

// DESTROY (delete)


// UPDATE (put)

// CREATE (post)
app.post('/pokemon', (req, res) => {
  pokemon.push(req.body);
  res.redirect('/pokemon');
});

// EDIT (get) (put)
app.get('/pokemon/new', (req, res) => {
  res.render('new.ejs');
});

// SHOW (get)
app.get('/pokemon/:index', (req, res) => {
res.render('show.ejs', { allPokemon: Pokemon[req.params.index] });
});
// I want this page to display name, image, unordered list of types, and stats



// LISTENER //
app.listen(3000);