// .ENV
require("dotenv").config();
// import
const express = require('express');
const axios = require('axios');
const ejsLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');
const db = require('./models');
// NEW
const controllers = require('./controllers');

// Middleware
const app = express();
app.set('view engine', 'ejs');

app.use(ejsLayouts);
app.use(express.urlencoded({ extended: false}));
app.use(methodOverride('_method'));
app.use(require('morgan')('dev'));

// Routes 
app.get('/', (req, res) => {
    res.redirect('/users');
});

// CONTROLERS TIME
app.use('/users', controllers.users);
app.use('/pets', controllers.pets);

//PORT
const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log('Listening on port: ', PORT));