const Sequelize = require("sequelize");
const db = require("../config/database");

const Exercises = db.define("exercises", {
    name: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.STRING,
    },

});

module.exports = Exercises;