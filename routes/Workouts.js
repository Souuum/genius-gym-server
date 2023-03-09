var express = require('express');
var router = express.Router();
var Workouts = require("../models/workouts");

/* GET Workouts listing. */
router.get('/', function (req, res, next) {
    Workouts.findAll()
        .then(Workouts => { res.send(Workouts) })
});

router.get('/:id', function (req, res, next) {
    const id = req.params.id;

    Workouts.findByPk(id)
        .then(Workout => { res.send(Workout) })
});

router.get('/name/:name', function (req, res, next) {
    const name = req.params.name;

    Workouts.findOne({ where: { name: name } })
        .then(Workout => { res.send(Workout) })
});

module.exports = router;
