var router = require("express").Router();
var db = require("../models");

// GET all projects
router.get('/applications', function(req, res) {
    console.log("Hitting get - /api/applications");
    db.Application.findAll({
    }).then(function(applications) {
        console.log(applications);
        res.json(applications);
    });
});

// POST a new project
router.post('/applications', function(req, res) {
    console.log("Hitting post - /api/applications");
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
    db.Application.create(req.body)
    .then(function(application) {
        res.json(application);
    });
});

// UPDATE a given project details
router.put('/applications/:applicationId', function(req, res) {
    console.log(`Hitting put - /api/applications/:${req.params.applicationId}`);
    console.log(req.body);
    db.Applicatoin.update(
        req.body,
        {
            where: {
                projectId: req.params.applicationId
            }
        }
    ).then(function(application) {
        // returns [ number_of_rows ]
        res.json(application);
    });
});

module.exports = router;
