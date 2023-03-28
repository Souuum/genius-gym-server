const express = require("express");
const router = express.Router();
const Users = require("../models/users");
const session = require("express-session");

// JWT
const jwt = require("jsonwebtoken");

// library to hash
const crypto = require("crypto");

const checkUser = async ({ email }) => {
    try {
        return (
            (await Users.findOne({
                where: {
                    email,
                },
            })) !== null
        );
    } catch {
        return false;
    }
};

router.post("/", (req, res) => {
    const params = req.body;
    console.log("Auth request");
    const { token } = params;
    if (token) {
        try {
            const decode = jwt.verify(token, "Fv3r!fyM");
            console.log("Valid token");
            delete decode.password;
            res.status(200).json({
                auth: true,
                data: { ...decode, token },
            });
        } catch (err) {
            console.log("Expired token");
            res.status(400).json({
                auth: false,
                data: { token: null },
            });
        }
    } else {
        console.log("No token");
        res.status(400).json({
            auth: false,
            data: { token: null },
        });
    }
});

router.post("/login", (req, res) => {
    const params = req.body;
    console.log("Login request");
    console.log(req.sessionID);


    var email = params.email.toLowerCase();
    var pw = params.password;

    if (email && pw) {
        const hashed = crypto
            .createHash("sha256")
            .update(email + ":" + pw)
            .digest("hex");
        if (req.session.authenticated) {
            res.status(200).json({
                auth: true,
                data: { ...req.session.user, token: req.session.token },
            });
        } else {
            const condition = { where: { email, password: hashed } };

            let user = Users.findOne(condition)
                .then((response) => {
                    if (response === null || response.length == 0) {
                        res.status(400).json({
                            auth: false,
                            data: { token: null },
                        });
                    } else {
                        const userData = response.dataValues;
                        const token = jwt.sign(userData, "Fv3r!fyM", { expiresIn: 20 });
                        delete userData.password;
                        req.session.authenticated = true;
                        req.session.user = userData;
                        console.log(req.sessionID);
                        console.log(req.session);
                        res.json(req.session);
                    }
                })
        }
    } else {
        res.status(400).json({
            auth: false,
            data: { token: null },
        });
    };
    // Users.findOne(condition)
    //     .then((response) => {
    //         if (response === null || response.length == 0) {
    //             res.status(400).json({
    //                 auth: false,
    //                 data: { token: null },
    //             });
    //         } else {
    //             const userData = response.dataValues;
    //             const token = jwt.sign(userData, "Fv3r!fyM", { expiresIn: 20 });
    //             delete userData.password;
    //             res.status(200).json({
    //                 auth: true,
    //                 data: { ...userData, token },
    //             });
    //         }
    //     })
    //     .catch((err) => {
    //         console.error(err);
    //         res.status(400).end();
    //     });


});

router.post("/signup", async (req, res) => {
    const params = req.body;
    try {
        var email = params.email.toLowerCase();
        if (email && (await checkUser({ email: email }))) {
            console.log("User exist");
            res.status(400).json({
                response: false,
                message: "Utilisateur existant !",
            });
        } else {
            console.log("Creating our user");
            var values = Object.values(params); //because trainingType is a special key
            var firstName = params.firstName;
            var lastName = params.lastName;
            var email = params.email.toLowerCase();
            var pw = params.password;
            var trainingType = values[4];


            const hashed = crypto
                .createHash("sha256")
                .update(email + ":" + pw)
                .digest("hex");

            Users.create({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: hashed,
                trainingType: trainingType

            })
                .then((response) => {
                    if (response === null || response.length == 0) {
                        console.log("Error when registering user");
                        res.status(400).json({
                            response: false,
                        });
                    } else {
                        console.log("User successfully registered");
                        res.status(200).json({
                            response: true,
                        });
                    }
                })
                .catch((err) => {
                    console.error(err);
                    res.status(400).json({
                        response: false,
                    });
                });
        }
    } catch (err) {
        console.warn(err);
        res.status(400).json({
            response: false,
            message: "An error occured",
        });
    }
});

module.exports = router;