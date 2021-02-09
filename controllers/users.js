// NEW 
const express = require('express');
const router = express.Router();
const db = require('../models');


// This will be at the level of /users/
router.get('/', (req, res) => {
    db.user.findAll().then(allUsers => {
        res.render('users/', { allUsers })
    });
});

// set up the show page.
router.get('/:id', (req, res) => {
    db.user.findOne({
        where: {
           id: req.params.id 
        },
        include: [db.pet]
    }).then( user => {
        console.log(user);
        res.render('users/show', { user });
    }).catch(error => {
        console.log('An error has occured when getting a user.');
        res.redirect('/users');
    });
});

// Add post route
router.post('/:id/newPet', (req, res) => {
    db.pet.create({
        name: req.body.name,
        species: req.body.species,
        userId: req.params.id,
        description: req.body.description,
    }).then(newPet => {
        res.redirect(`/users/${req.params.id}`);
    }).catch(error => {
        console.log('error in creating a new pet');
        console.log(error);
    });
});

module.exports = router;