$(".saveBtn").on("click", function () {
    console.log(this);
    // Pull value from the textare of chosen save button. This will serve as the value for out setItem
    var text = $(this).siblings(".description").val();

    // Pull the id of the clicked element to serve as the id
    var time = $(this).parent().attr("id");

    // This is where you will save the data to local storage
    localStorage.setItem(time, text);
})

$("#hour5 .description").val(localStorage.getItem("hour5"));
$("#hour6 .description").val(localStorage.getItem("hour6"));
$("#hour7 .description").val(localStorage.getItem("hour7"));
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));




// Function to update the color of the time display
function hourUpdater() {
    var dt = new Date();
    var currentTime = dt.getHours();



    $(".time-block").each(function() {

        // take the value frome each id and setting to the variable block.
        var block = parseInt($(this).attr("id").split("hour")[1]);
        console.log(block, currentTime)
        console.log(dt);

        if (block < currentTime) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }

        else if (block === currentTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }

        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }


    })

}
hourUpdater()
