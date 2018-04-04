$(document).ready(function() {

    $("#addTodo").on("click", function() {
        if($("#todoTextbox").val().trim().length > 0) {
            var inp = $("#todoTextbox").val();
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

    $(".deleteTask").on("click", function(e) {
        e.preventDefault();
        $.ajax({
            url: "/remove/" + $(this).attr('id'),
            method: "DELETE",
            success: function(res) {
                console.log(res);
                location.reload();
            }
        })
    });
});