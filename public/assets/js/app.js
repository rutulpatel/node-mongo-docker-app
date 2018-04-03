$(document).ready(function() {

    $("#addTodo").on("click", function() {
        

        if($("#todoTextbox").val().trim().length > 0) {
            var inp = $("#todoTextbox").val();
            console.log(inp);
            alert(inp);    

            $.ajax({
                url: "/add",
                method: "POST",
                data: { "taskName": inp },
                success: function(res) {
                    console.log(res);
                    location.reload();
                }
            })
        } else {
            alert("Please enter valid task name...");
        }
    });




});