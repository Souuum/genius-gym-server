var express = require('express');
var router = express.Router();
var UsersWorkouts = require("../models/users_workouts");

/* GET UsersWorkouts listing. */
router.get('/', function (req, res, next) {
    UsersWorkouts.findAll()
        .then(usersWorkouts => { res.send(usersWorkouts) })
});

router.get('/:id', function (req, res, next) {
    const id = req.params.id;

    UsersWorkouts.findByPk(id)
        .then(userWorkout => { res.send(userWorkout) })
});

router.get('/workoutid/:id', function (req, res, next) {
    const id = req.params.id;

    UsersWorkouts.findAll({ where: { idWorkout: id } })
        .then(userWorkouts => { res.send(userWorkouts) })
});

router.get('/userid/:id', function (req, res, next) {
    const id = req.params.id;

    UsersWorkouts.findAll({ where: { UserId: id } })
        .then(userWorkouts => { res.send(userWorkouts) })
});


module.exports = router;
