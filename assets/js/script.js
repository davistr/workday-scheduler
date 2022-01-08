
// Set text for currentDate element to display todays date
$("#currentDay").text(moment().format("dddd" + ", " + "MMMM Do YYYY"));

// obtain current hour
const date = new Date();
let hour = date.getHours();
console.log(hour);
console.log(document.getElementsByClassName("description")[0].id);

// modify timeblock color based on current hour
var changeBG = function () {
  // if hour is between 9 and 5 (am-pm)
  if (hour >= 9 && hour < 17) {

    var elements = document.getElementsByClassName("description");
    for (var i = 0; i < elements.length; i++) {

      if (elements[i].id < hour) {
        elements[i].classList.add("past");
      }
      else if (elements[i].id == hour) {
        elements[i].classList.add("present");
      }
      else {
        elements[i].classList.add("future");
      }
    }
  }
}
changeBG();


var saveTasks = function () {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};