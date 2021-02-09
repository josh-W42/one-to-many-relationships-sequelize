// NEW 
const express = require('express');
const router = express.Router();
const db = require('../models');

// From the /pets route layer.
router.get('/', (req, res) => {
    db.pet.findAll().then(results => {
        const pets = results;
        res.render('pets/', { pets });
    });
});

router.get('/pets/show',)

module.exports = router;