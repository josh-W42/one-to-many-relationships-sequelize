// NEW 
const express = require('express');
const router = express.Router();
const db = require('../models');


// this will be at the level of /users/
router.get('/', (req, res) => {
    db.user.findAll().then(allUsers => {
        res.render('./allUsers', { allUsers })
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
        console.log(user.pets);
    });
})

module.exports = router;