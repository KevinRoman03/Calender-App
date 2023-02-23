var currentDate =
  moment().format("dddd") + " " + moment().format("Do MMM YYYY");
var currentHour = moment().format("h:mm:ss a");

var nineAm = $("#9am");
var tenAm = $("#10am");
var elevenAm = $("#11am");
var twelvePm = $("#12pm");
var onePm = $("#13pm");
var twoPm = $("#14pm");
var threePm = $("#15pm");
var fourPm = $("#16pm");
var fivePm = $("#17pm");
var sixPm = $("#18pm");
var sevenPm = $("#19pm");

var hour = moment().hours();
var userInput;
var hourSpan;

var interval = setInterval(function () {
  var momentNow = moment();
  $("#currentDay").html(
    momentNow.format("YYYY MMMM DD") +
      " " +
      momentNow.format("dddd").substring(0, 3).toUpperCase()
  );

  $("#currentDay").html(currentDate + " " + momentNow.format("hh:mm:ss A"));
}, 100);

function initPage() {
  console.log("Current Hour " + hour);
  $(".form-control").each(function () {
    var time = $(this).attr("id");
    var init = JSON.parse(localStorage.getItem(time));
    switch (time) {
      case "09:00 am":
        nineAm.val(init);
        break;
      case "10:00 am":
        tenAm.val(init);
        break;
      case "11:00 am":
        elevenAm.val(init);
        break;
      case "12:00 pm":
        twelvePm.val(init);
        break;
      case "01:00 pm":
        onePm.val(init);
        break;
      case "02:00 pm":
        twoPm.val(init);
        break;
      case "03:00 pm":
        threePm.val(init);
        break;
      case "04:00 pm":
        fourPm.val(init);
        break;
      case "05:00 pm":
        fivePm.val(init);
        break;
      case "06:00 pm":
        sixPm.val(init);
        break;
      case "07:00 pm":
        sevenPm.val(init);
        break;
    }
  });
}
function background() {
  var formControls = $(".form-control");
  for (var i = 0; i < formControls.length; i++) {
    var timeTest = parseInt(formControls[i].id);
    hour = parseInt(hour);
    console.log(timeTest);
    console.log(hour);
    if (hour > timeTest) {
      $(formControls[i]).addClass("past");
    } else if (hour < timeTest) {
      $(formControls[i]).addClass("future");
    } else {
      $(formControls[i]).addClass("present");
    }
  }
}
$(document).ready(function () {
  initPage();
  background();

  $(".saveBtn").on("click", function () {
    userInput = $(this).siblings(".form-control").val().trim();
    console.log(userInput);
    hourSpan = $(this).siblings(".input-group-prepend").text().trim();
    console.log(hourSpan);
    localStorage.setItem(hourSpan, JSON.stringify(userInput));
  });
 
  $("#clearDay").on("click", function () {
    localStorage.clear();
    initPage();
  });
});
