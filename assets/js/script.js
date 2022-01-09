// Set text for currentDate element to display todays date
$("#currentDay").text(moment().format("dddd" + ", " + "MMMM Do YYYY"));

// obtain current hour
const date = new Date();
let hour = date.getHours();

// modify timeblock color based on current hour
var changeBG = function () {
  // if hour is between 9 and 5 (am-pm)
  if (hour >= 9 && hour < 18) {

    var elements = document.getElementsByClassName("description");
    for (var i = 0; i < elements.length; i++) {

      if (elements[i].id < hour) {
        elements[i].classList.add("past");
      }
      else if (elements[i].id == hour) {
        elements[i].classList.add("present");
      }
      else if (elements[i].id > hour && elements[i].id < 18) {
        elements[i].classList.add("future");
      }
    }
  }

}
changeBG();

// function to save data to local storage
var saveStorage = function (key, task) {
  localStorage.setItem(key, task);
};

// funtion to load data from local storage
var loadStorage = function () {
  // create for loop to loop through all workday hours (9-5)
  for (var i = 9; i < 18; i++) {
    var task = localStorage.getItem(i);
    var text = $("#" + i);
    text.val(task);
  }
};

// save task function to obtain the specific textarea by parent element on click of save button
var saveTasks = function () {
  var btn = $(this);
  var parentEl = btn.parent();
  var textArea = parentEl.find("textarea");
  var key = textArea.attr("id");
  var task = textArea.val();
  saveStorage(key, task);
}

// event listener for the buttons of the class 
$(".saveBtn").on("click", saveTasks);
// load tasks from local storage
loadStorage();

