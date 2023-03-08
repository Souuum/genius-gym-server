const Sequelize = require("sequelize");
const db = require("../config/database");

const Exercises = db.define("Exercises", {
    name: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.STRING,
    },

});

module.exports = Exercises;