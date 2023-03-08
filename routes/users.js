var express = require('express');
var router = express.Router();
var Users = require("../models/users");

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/test', function (req, res, next) {
  res.send('test');
});

router.get('/test2', function (req, res, next) {
  res.send('test2');
});

router.get('/:id', function (req, res, next) {
  const id = req.params.id;

  Users.findOne({ where: { id: id } })
    .then(user => { res.send(user) })
});

module.exports = router;
