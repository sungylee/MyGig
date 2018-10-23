var router = require("express").Router();
var db = require("../models");

// GET all users
router.get('/users', function(req, res) {
    console.log("Hitting get - /api/users");
    db.User.findAll({
    }).then(function(users) {
        //console.log(users);
        res.json(users);
    });
});

// GET a given user
router.get('/users/:employeeId', function(req, res) {
    db.User.findOne(
        {
            where: {
                employeeID: req.params.employeeId
            }
        }
    ).then(function(user) {
        // console.log(user);
        res.json(user);
    });
});

// POST a new user
router.post('/users', function(req, res) {
    console.log("Hitting post - /api/users");
    console.log(req.body);
    /*
        Sample JSON input
        {
            "name": "BunnyBuild",
            "description": "Make as many bunnies as possible.",
            "product": "Animal Zoo",
            "projectStartDate": "2008-12-1 00:00:00",
            "projectDuration": 3,
            "skills": "java, javascript, python"
        }
    */
    db.User.create(req.body)
    .then(function(user) {
        res.json(user);
    });
});

// UPDATE a given user's details
router.put('/user/:employeeId', function(req, res) {
    console.log(`Hitting put - /api/projects/:${req.params.employeeId}`);
    console.log(req.body);
    db.User.update(
        req.body,
        {
            where: {
                projectId: req.params.employeeId
            }
        }
    ).then(function(user) {
        // returns [ number_of_rows ]
        res.json(user);
    });
});

module.exports = router;
