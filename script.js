// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
// Adding click event listener on the save button and saving user input in local storage
$(".saveBtn").on("click", function () {
// Get the id of the containing time-block by traversing the DOM to the parent element
var id = $(this).parent().attr("id");
// Get the user input description from the sibling textarea element
var description = $(this).siblings(".description").val();
// Save the user input in local storage using the id as the key
localStorage.setItem(id, description);
});

$(".time-div").each(function() {
  var timeDiv = $(this).attr("id").split("-")[1];

  if (currentHour == timeDiv) {
      $(this).addClass("present");
      $(this).children(".description").addClass("present");

  } else if (currentHour < timeDiv) {
      $(this).removeClass("present");
      $(this).addClass("future");

  } else if (currentHour > timeDiv) {
      $(this).removeClass("future");
      $(this).addClass("past");
  }
});

// Getting any user input that was saved in localStorage and setting the values of the corresponding textarea elements
$(".time-block").each(function () {
var id = $(this).attr("id");
var description = localStorage.getItem(id);
if (description !== null) {
$(this).find(".description").val(description);
}
});

// Displaying the current date in the header of the page
$("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
});