$(function(){

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

});