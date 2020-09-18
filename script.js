//Establish variables
var displayDateEl = document.querySelector("#currentDay");
var currentHourEl = document.querySelector(".past");
var currentHour = moment().hour();
var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var button = $("<button>");
var icon = $("<i>");

// Display the current time using Moment.js
console.log(moment().format("dddd, MMMM Do"));

// Click event to save text area content to Local Storage

// When app opens, display content for each time block from local storage.
        //it can be done with a loop(more efficiently) or by targeting each time block separately
    for (i = 9; i < 18; i++)
    if (hours[i] < currentHour)

    //Display the current date
    displayDateEl.textContent = moment().format("dddd, MMMM Do");

//Change time block background color depending on the current hour (past, present, future)
console.log(moment().hour());
