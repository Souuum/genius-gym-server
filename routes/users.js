var express = require('express');
var router = express.Router();
var Users = require("../models/users");

/* GET users listing. */
router.get('/', function (req, res, next) {
  Users.findAll()
    .then(users => { res.send(users) })
});


router.get('/:id', function (req, res, next) {
  const id = req.params.id;

  Users.findByPk(id)
    .then(user => { res.send(user) })
});

router.get('/name/:name/:firstname', function (req, res, next) {
  const name = req.params.name;
  const firstname = req.params.firstname;

  Users.findAll({ where: { lastName: name, firstName: firstname } })
    .then(users => { res.send(users) })
});

router.get('/email/:email', function (req, res, next) {
  const email = req.params.email;
  Users.findOne({ where: { email: email } })
    .then(user => { res.send(user) });


})


module.exports = router;
