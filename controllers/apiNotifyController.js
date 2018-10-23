var router = require("express").Router();
var db = require("../models");
var msgSend = new (require("../Messaging"));

router.post('/notify/:role/:applicationId', function(req, res) {
    console.log(`Hitting post - /api/notify/${req.params.role}/${req.params.applicationId}`);
    //console.log(req.body);

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
        // Determine who want to notify based on :role.
        switch (req.params.role) {
            case 'manager':
                return db.User.findOne({
                    where: {
                        employeeId:  result.User.managerId
                    }
                });
                break;
            case 'applicant':
                return result.User;
                break;
            case 'pm':
                return db.User.findOne({
                    where: {
                        employeeId: result.Project.pmEmployeeId
                    }
                });
                break;
            default:
                console.log("Unknown role has been selected");
        }
    }).then(notify => {
        console.log(`trying to send msg to ${notify.email}`);
        console.log(req.body);

        msgSend.sendEmail(
            notify.email,
            req.body.subject,
            req.body.msg
        ).then(result => {
            console.log(`Email sent to ${notify.email}`);
            res.end(`Email sent to ${notify.email}`);
        }).catch(err => {
            console.log(err);
        });

        msgSend.sendSMS(
            notify.phone,
            req.body.msg
        ).then(result => {
            console.log(`SMS sent to ${notify.phone}`);
            res.end(`SMS sent to ${notify.phone}`);
        }).catch(err => {
            console.log(err);
        });


    }).catch(function(error) {
        // Error handling here.
    });
});

module.exports = router;
