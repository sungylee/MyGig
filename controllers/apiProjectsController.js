var router = require("express").Router();
var db = require("../models");

// GET all projects
router.get('/projects', function(req, res) {
    console.log("Hitting get - /api/projects");
    db.Project.findAll({
    }).then(function(projects) {
        var hbsObject = {
            gigs: projects
        };
        console.log(hbsObject);
        //res.json(projects[0]);
        res.render("index", hbsObject);
    });
});

// POST a new project
router.post('/projects', function(req, res) {
    console.log("Hitting post - /api/projects");
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
    db.Project.create(req.body)
    .then(function(project) {
        res.json(project);
    });
});

// UPDATE a given project details
router.put('/projects/:projectId', function(req, res) {
    console.log(`Hitting put - /api/projects/:${req.params.projectId}`);
    console.log(req.body);
    db.Project.update(
        req.body,
        {
            where: {
                projectId: req.params.projectId
            }
        }
    ).then(function(project) {
        // returns [ number_of_rows ]
        res.json(project);
    });
});

module.exports = router;
