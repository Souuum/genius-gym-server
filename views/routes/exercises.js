var express = require('express');
var router = express.Router();
var Exercises = require("../models/exercises");

/* GET Exercises listing. */
router.get('/', function (req, res, next) {
    Exercises.findAll()
        .then(Exercises => { res.send(Exercises) })
});

router.get('/:id', function (req, res, next) {
    const id = req.params.id;

    Exercises.findByPk(id)
        .then(Exercise => { res.send(Exercise) })
});

router.get('/name/:name', function (req, res, next) {
    const name = req.params.name;

    Exercises.findOne({ where: { name: name } })
        .then(Exercise => { res.send(Exercise) })
});


module.exports = router;
