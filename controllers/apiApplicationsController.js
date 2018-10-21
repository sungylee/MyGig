var router = require("express").Router();
var db = require("../models");

// GET all projects
router.get('/applications', function(req, res) {
    console.log("Hitting get - /api/applications");

    // ToDo:  req.body should be used for qualifier.
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
        {
            "ProjectProjectId" : 1,
            "UserEmployeeId": 212000000,
            "status": "started"
         }
    */

    db.Application.create(req.body)
    .then(function(application) {
        res.json(application);
    });
    //TODO:  Should build a better query result check in case of failures.
});

// UPDATE a given project details
router.put('/applications/:applicationId', function(req, res) {
    console.log(`Hitting put - /api/applications/:${req.params.applicationId}`);
    console.log(req.body);
    db.Application.update(
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
