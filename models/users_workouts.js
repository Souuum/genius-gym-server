const Sequelize = require("sequelize");
const db = require("../config/database");

const UsersWorkouts = db.define("Users_Workouts", {
    idUsers: {
        type: Sequelize.INTEGER,
    },
    idWorkout: {
        type: Sequelize.INTEGER,
    },

});

module.exports = UsersWorkouts;