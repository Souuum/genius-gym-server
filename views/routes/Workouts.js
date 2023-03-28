var express = require('express');
var router = express.Router();
var Workouts = require("../models/workouts");
var Workouts_Exercises = require("../models/workouts_exercises");
var Exercises = require("../models/exercises");
var Users = require("../models/users");

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

router.get('/custom/exercises/:id', function (req, res, next) {
    const id = req.params.id;

    Workouts.findOne({ include: Exercises, where: { id: id } })
        .then(Workout => { res.send(Workout) })
});

router.get('/exercises/:id', function (req, res, next) {
    const id = req.params.id;

    Workouts.findOne({ include: Exercises, where: { id: id } })
        .then(Workout => { res.send(Workout) })
});

router.post('/exercises', function (req, res, next) {
    const workoutData = req.body;
    Workouts.create(workoutData, { include: Exercises })
        .then(workout => console.log(workout.toJSON()))
        .catch(error => console.error(error));
});

router.post('/custom/exercises/', async function (req, res, next) {
    const userId = req.body.userId;
    const workoutData = req.body.Workout;
    const workout = await Workouts.create(JSON.parse(workoutData));
    const user = await Users.findByPk(userId); // assuming you have the userId
    await user.addWorkout(workout);
    const exercisesData = JSON.parse(req.body.Exercise);
    exercisesData.forEach(element => {
        Workouts_Exercises.create({
            WorkoutId: workout.id,
            ExerciseId: element.id,
            nbReps: element.reps,
            nbSets: element.sets,
        });
    });
    // succes status
    res.status(200).send();


});

router.post('/custom/modify/', async function (req, res, next) {
    // we first look for the workout
    const workoutId = JSON.parse(req.body.Workout).id;
    console.log(workoutId)
    const workout = await Workouts.findByPk(workoutId);
    console.log(workout)
    // we then update the workout
    const workoutData = req.body.Workout;
    await workout.update(JSON.parse(workoutData));
    // we then delete all the exercises associated with the workout
    await Workouts_Exercises.destroy({ where: { WorkoutId: workoutId } });
    // we then add the new exercises
    const exercisesData = JSON.parse(req.body.Exercise);
    exercisesData.forEach(element => {
        Workouts_Exercises.create({
            WorkoutId: workout.id,
            ExerciseId: element.id,
            nbReps: element.reps,
            nbSets: element.sets,
        });
    }
    );
    // succes status
    res.status(200).send();
});

module.exports = router;