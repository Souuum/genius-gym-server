var express = require('express');
var router = express.Router();
var Workouts = require("../models/workouts");
var Exercises = require("../models/exercises");

/* GET Workouts listing. */
router.get('/', function (req, res, next) {
    Workouts.findAll()
        .then(Workouts => { res.send(Workouts) })
});

router.get('/stock', function (req, res, next) {

    Workouts.findAll({ where: { isCustom: false } })
        .then(Workout => { res.send(Workout) })
});

router.get('/custom', function (req, res, next) {

    Workouts.findAll({ where: { isCustom: true } })
        .then(Workout => { res.send(Workout) })
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

router.get('/stock/exercises', function (req, res, next) {
    Workouts.findAll({ include: Exercises, where: { isCustom: false } })
        .then(Workout => { res.send(Workout) })
});

router.get('/exercises/:id', function (req, res, next) {
    const id = req.params.id;

    Workouts.findOne({ include: Exercises, where: { id: id } })
        .then(Workout => { res.send(Workout) })
});


module.exports = router;