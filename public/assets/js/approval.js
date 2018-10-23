$(function(){
    /*
        Following is from gigs.js
    if(localStorage.getItem("name")){
        $("#empName").html = ", " + localStorage.getItem("name");
    }

    var employeeId;


    $(".modal").show(); // Display dropdown

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
        employeeId = $("#roleSelect").val();
        $.get("/api/users/" + employeeId)
        .done(function(data){
            //console.log(data);
            localStorage.setItem("employeeId", data.employeeId);
            localStorage.setItem("role", data.currentPosition);
            localStorage.setItem("name", data.firstName);
            window.location.replace("/api/projects");
        });
    });
    */

    // Handling applicant clicking on 'APPLY' button
    $("#ApplyButton").on("click", function() {
        employeeId = "something";

        $.post("/api/applications", {
            ProjectProjectId: "something",
            UserEmployeeId: "something",
            status: "submitted"
        }.done( function(data) {
            // Applied
        }).fail( function(error) {
            // Error handling
        });
    });

    // Handling manager/PM clicking on 'APPROVE' SomeButton
    $("#ApproveButton").on("click", function() {
        applicationId = 'something';
        myRole = 'manager'  // 'manager' or 'pm'
        $.put(`/api/applications/${applicationId}`, {
            myRole + "Approval": true,
            status: myrole + "approved"
        }).done( function(data) {
            // Approved by manager
        }).fail( function(error) {
            // Eror handling
        });
    });
});
