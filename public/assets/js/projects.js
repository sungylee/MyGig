$(function(){

    // PM posts a new project details
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


        // TODO: How do we determine whether it's pm or manager approval?

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
             // Approved by manager
             // Do something to populate the FE.
         }).fail( function(error) {
             // Do something to pupulate the FE.
        });
    });
});
