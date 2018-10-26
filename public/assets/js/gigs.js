$(function(){

    //$("#roleModal").show(); // Display dropdown

    if(sessionStorage.getItem("empFName")){
        $(".empName").html(sessionStorage.getItem("empFName"));
        $(".empEmail").html(sessionStorage.getItem("empEmail"));
        $("#roleModal").hide();
        if (sessionStorage.getItem("empRole") !== "Employee"){
            $("#btnPostGig").show()
        }
    }

    $("#logout").on("click", function(){
        sessionStorage.clear();
        window.location.replace("/");
    });

    $.get("/api/users")
    .done(function(data){
        for (var i = 0; i < data.length; i++){
            var optName = $("<option>");
            optName.val(data[i].employeeId);
            optName.html(data[i].firstName + " " + data[i].lastName);
            $("#roleSelect").append(optName);
        }
    });

    $("#btnRole").on("click", function(){
        var employeeId = $("#roleSelect").val();
        $.get("/api/users/" + employeeId)
        .done(function(data){
            //console.log(data);
            sessionStorage.clear();
            sessionStorage.setItem("employeeId", data.employeeId);
            sessionStorage.setItem("empFName", data.firstName);
            sessionStorage.setItem("empLName", data.lastName);
            sessionStorage.setItem("empRole", data.currentPosition);
            sessionStorage.setItem("empMgrName", data.managerId);
            sessionStorage.setItem("empEmail", data.email);
            $(".empName").html(data.firstName);
            $(".empEmail").html(data.email);
            if (sessionStorage.getItem("empRole") !== "Employee"){
                $(btnPostGig).show()
            }
            $("#roleModal").hide();
            //window.location.replace("/api/projects");
        });
    });

    // Handling applicant clicking on 'APPLY' button
    $(document).on("click", ".apply-button", function() {
        var employeeId = sessionStorage.getItem("employeeId");
        var projectId = $(this).data("projectid");

        $.post("/api/applications", {
            ProjectProjectId: projectId,
            UserEmployeeId: employeeId,
            status: "submitted"
        }).done( function(data) {
            var message = "Congratulations! You have successfully applied for Project ";
            message += data.ProjectProjectId + "<br/>";
            message += "Your application Id is " + data.applicationId + "<br/><br/>";
            //console.log(message);
            $("#modalMessage").html(message);
            var OK = $("<p><a href='/api/projects' class='btn btn-dark'>OK</a></p>");
            $("#modalMessage").append(OK);
            $("#applyModal").show();
        }).fail( function(error) {
            var message = "Sorry! An error occured. Please try again";
            $("#modalMessage").html(message);
            var OK = $("<p><a href='/api/projects' class='btn btn-dark'>OK</a></p>");
            $("#modalMessage").append(OK);
            $("#applyModal").show();
        });
    });


    // Handling manager/PM clicking on 'APPROVE' SomeButton
    $("#ApproveButton").on("click", function() {
        var employeeId = sessionStorage.getItem("employeeId");
        var applicationId = $(this).data("applicationid");

        // TODO: How do we determine whether it's pm or manager approval?

         $.put(`/api/applications/${applicationId}`, {
             "managerApproval": true,
             // "pmApproval": true,
             status: "approved"
         }).done( function(data) {
             // Approved by manager
             // Do something to populate the FE.
         }).fail( function(error) {
             // Do something to pupulate the FE.
        });
    });
});
