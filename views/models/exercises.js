const Sequelize = require("sequelize");
const db = require("../config/database");

console.log("EXERCISES");

const Exercises = db.define("Exercises", {
    name: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.STRING,
    },

});

module.exports = Exercises;