var router = require("express").Router();
var request = require("request");
var db = require("../models");
var PORT = process.env.PORT || 3000;    // Be sure to handle different port assigned by Heroku
var NOTIFYSERVER = `localhost:${PORT}`; // Assume notify server is local

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
    //console.log(req.body);
    /*
        When JSON input from http client is like this:
        {
            "ProjectProjectId" : 1,
            "UserEmployeeId": 212000000,
            "status": "started"
         }
    */

    db.Application.create(
        req.body
    ).then(function(application) {
        res.json(application);
        return application;
    }).then(application => {
        sendAppliedEmail({
            notify: 'applicant',
            projectId: req.body.ProjectProjectId,
            applicationId: application.applicationId
        });

        sendAppliedEmail({
            notify: 'manager',
            projectId: req.body.ProjectProjectId,
            applicationId: application.applicationId
        });
    }).catch(function(error) {
        //TODO:  Should build a better query result check in case of failures.
        console.log(error);
    });
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

    // Should put notification upon approval
});

// Wrapper function to determine msg content based off on who we are notifying.
function sendAppliedEmail(params) {
    var roles = {
        applicant: {
            url: `http://${NOTIFYSERVER}/api/notify/applicant/${params.applicationId}`,
            subject: "Your application has submitted",
            body: `Your application for project id: ${params.projectId} has been submitted.  Your application id is ${params.applicationId}.`
        },
        manager: {
            url: `http://${NOTIFYSERVER}/api/notify/manager/${params.applicationId}`,
            subject: "Your direct direct import has submitted application",
            body: `Your direct report's application for project id: ${params.projectId} has been submitted.  His/Her application id is ${params.applicationId}.`
        }
    };

    sendEmail({
        url: roles[params.notify].url,
        subject: roles[params.notify].subject,
        body: roles[params.notify].body
    });
}

// Method to make the API call to trigger email send
function sendEmail(msg) {
    request({
        method: 'POST',
        url: msg.url,
        json: true,
        body: {
            subject: msg.subject,
            msg: msg.body
        }
    }, function(err, res, body) {
        if (err) {
            console.error('error posting json: ', err);
            throw err;
        }
    });
}

module.exports = router;
