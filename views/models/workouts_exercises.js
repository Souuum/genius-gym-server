const Sequelize = require("sequelize");
const db = require("../config/database");

const WorkoutsExercises = db.define("Workout_Exercises", {
    nbReps: {
        type: Sequelize.INTEGER,
    },
    nbSets: {
        type: Sequelize.INTEGER,
    },

});

module.exports = WorkoutsExercises;