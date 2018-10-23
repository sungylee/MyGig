$(function(){

    $(".modal").show(); // Display dropdown

    if(sessionStorage.getItem("empFName")){
        $(".empName").html(sessionStorage.getItem("empFName"));
        $(".empEmail").html(sessionStorage.getItem("empEmail"));
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
            sessionStorage.setItem("employeeId", data.employeeId);
            sessionStorage.setItem("empFName", data.firstName);
            sessionStorage.setItem("empLName", data.lastName);
            sessionStorage.setItem("empRole", data.currentPosition);
            sessionStorage.setItem("empMgrName", data.managerId);
            sessionStorage.setItem("empEmail", data.email);
            window.location.replace("/api/projects");
        });
    });

    // Handling applicant clicking on 'APPLY' button
    $(".apply-button").on("click", function() {
        var employeeId = sessionStorage.getItem("employeeId");
        var projectId = $(this).data("projectID");

        $.post("/api/applications", {
            ProjectProjectId: projectId,
            UserEmployeeId: employeeId,
            status: "submitted"
        }).done( function(data) {
            console.log("Applied Successfully: " + data)
        }).fail( function(error) {
            // Error handling
        });
    });

    // Handling manager/PM clicking on 'APPROVE' SomeButton
    // $("#ApproveButton").on("click", function() {
    //     applicationId = 'something';
    //     myRole = 'manager'  // 'manager' or 'pm'
    //     $.put(`/api/applications/${applicationId}`, {
    //         myRole + "Approval": true,
    //         status: myrole + "approved"
    //     }).done( function(data) {
    //         // Approved by manager
    //     }).fail( function(error) {
    //         // Eror handling
    //     });
    // });
});