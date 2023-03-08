var express = require('express');
var router = express.Router();
var Exercises = require("../models/Exercises");

/* GET Exercises listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/:id', function (req, res, next) {
    const id = req.params.id;

    Exercises.findOne({ where: { id: id } })
        .then(Exercise => { res.send(Exercise) })
});

module.exports = router;
