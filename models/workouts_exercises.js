const Sequelize = require("sequelize");
const db = require("../config/database");

const WorkoutsExercises = db.define("Workout_Exercises", {
    idWorkout: {
        type: Sequelize.INTEGER,
    },
    idExercise: {
        type: Sequelize.INTEGER,
    },
    nbReps: {
        type: Sequelize.INTEGER,
    },
    nbSets: {
        type: Sequelize.INTEGER,
    },

});

module.exports = WorkoutsExercises;