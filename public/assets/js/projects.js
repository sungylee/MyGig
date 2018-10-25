$(function(){

    if(sessionStorage.getItem("empFName")){
        $(".empName").html(sessionStorage.getItem("empFName"));
        $(".empEmail").html(sessionStorage.getItem("empEmail"));
    }

    $("#logout").on("click", function(){
        sessionStorage.clear();
        window.location.replace("/");
    });

    $("#cancel").on("click", function(){
        window.location.replace("/");
    });

    // PM posts new project details
    $("#newProject").on("click", function(event) {
        event.preventDefault();
        console.log("Submit new project");
        var pmEmployeeId = sessionStorage.getItem("employeeId");
        // var applicationId = $(this).data("applicationid");
        var projectName = $("#projectName").val().trim();
        var productName = $("#productName").val().trim();
        var projectDesc = $("#projectDescription").val().trim();
        var projectDur = $("#projectDuration").val().trim();
        var skillSet = $("#skillSet").val().trim();
        var projectStart = $("#projectStart").val().trim();
         $.post("/api/projects", {
             name: projectName,
             description: projectDesc,
             product: productName,
             projectDuration: projectDur,
             skills: skillSet,
             projectStartDate: projectStart,
             pmEmployeeId: pmEmployeeId
         }).done( function(data) {
            $(".form-control").text("");
            $(".form-control").val("");
            var message = "Your project has been successfully posted." + "<br/>";
            message += "Project ID: " + data.projectId + "<br/><br/>";
            console.log(message);
            $("#modalMessage").html(message);
            var OK = $("<p><a href='/api/projects' class='btn btn-dark'>OK</a></p>");
            $("#modalMessage").append(OK);
            $("#projectModal").show();
         }).fail( function(error) {
            var message = "Sorry! An error occured. Please try again";
            $("#modalMessage").html(message);
            var OK = $("<p><a href='/api/projects' class='btn btn-dark'>OK</a></p>");
            $("#modalMessage").append(OK);
            $("#projectModal").show();
        });
    });
});