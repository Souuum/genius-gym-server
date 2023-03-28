var express = require('express');
var router = express.Router();
const auth = require("../auth.js");
const sessions = require("../controllers/sessions.controller");

router.post("/", auth.login);
router.get("/check", async (req, res) => {
    let isLoggedIn = await auth.isLoggedIn(req, res)
    if (isLoggedIn) {
        res.send(JSON.stringify({ isLoggedIn: true }))
    } else {
        res.send(JSON.stringify({ isLoggedIn: false }))
    }
});

module.exports = router;