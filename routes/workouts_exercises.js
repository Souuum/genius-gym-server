var express = require('express');
var router = express.Router();
var WorkoutsExercises = require("../models/workouts_exercises");

/* GET WorkoutsExercises listing. */
router.get('/', function (req, res, next) {
    WorkoutsExercises.findAll()
        .then(WorkoutsExercises => { res.send(WorkoutsExercises) })
});

router.get('/:id', function (req, res, next) {
    const id = req.params.id;

    WorkoutsExercises.findByPk(id)
        .then(workoutExercise => { res.send(workoutExercise) })
});

router.get('/workoutid/:id', function (req, res, next) {
    const name = req.params.id;

    WorkoutsExercises.findAll({ where: { idWorkout: id } })
        .then(workoutExercises => { res.send(workoutExercises) })
});

router.get('/exerciseid/:id', function (req, res, next) {
    const name = req.params.id;

    WorkoutsExercises.findAll({ where: { idWorkout: id } })
        .then(workoutExercises => { res.send(workoutExercises) })
});


module.exports = router;
