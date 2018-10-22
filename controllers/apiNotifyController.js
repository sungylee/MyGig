var router = require("express").Router();
var db = require("../models");

router.get('/notify/manager/:applicationId', function(req, res) {
    console.log("Hitting post - /api/notify/manager");
    console.log(req.body);

    // req.body.applicationId
    /*
    Sample data
        {
            "applicationId": 1,
            "managerApproval": false,
            "pmApproval": false,
            "status": "started",
            "createdAt": "2018-10-21T20:00:20.000Z",
            "updatedAt": "2018-10-21T20:00:20.000Z",
            "UserEmployeeId": 212000000,
            "ProjectProjectId": 1,
            "User": {
                "employeeId": 212000000,
                "firstName": "jay",
                "lastName": "cha",
                "currentPosition": "Sr. Site Reliability Engineer",
                "managerId": 212000005,
                "email": "jay,cha@ge.com",
                "phone": null,
                "skill1": null,
                "skill2": null,
                "skill3": null,
                "skill4": null,
                "skill5": null,
                "skill6": null,
                "skill7": null,
                "skill8": null,
                "skill9": null,
                "skill10": null,
                "createdAt": "2018-10-21T20:00:20.000Z",
                "updatedAt": "2018-10-21T20:00:20.000Z"
            },
            "Project": {
                "projectId": 1,
                "name": "testProj",
                "description": "Just testing",
                "product": "the product",
                "projectStartDate": "2018-12-19T00:00:00.000Z",
                "projectDuration": 2,
                "skills": "java",
                "createdAt": "2018-10-21T20:00:20.000Z",
                "updatedAt": "2018-10-21T20:00:20.000Z"
            }
        }
    */
    // The following should give inner join of all three tables.
    db.Application.findOne({
        where: {
            applicationId: req.params.applicationId
        },
        include: [db.User, db.Project]
    }).then(result => {
        return db.User.findOne({
            where: {
                employeeId:  result.User.managerId
            }
        })
    }).then(manager => {
        console.log(manager);
        res.json(manager);
    }).catch(function(error) {
        // Error handling here.
    });
});


module.exports = router;
