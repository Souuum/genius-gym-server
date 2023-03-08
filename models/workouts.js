const Sequelize = require("sequelize");
const db = require("../config/database");

const Workouts = db.define("workouts", {
    name: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.STRING,
    },

});

module.exports = Workouts;