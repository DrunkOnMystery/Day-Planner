//Establish variables
var displayDateEl = document.querySelector("#currentDay");
var 

// Display the current time using Moment.js
console.log(moment().format("dddd, MMMM Do"));

// Click event to save text area content to Local Storage

// When app opens, display content for each time block from local storage.
        //it can be done with a loop(more efficiently) or by targeting each time block separately

    //Display the current date
    displayDateEl.textContent = moment().format("dddd, MMMM Do");

//Change time block background color depending on the current hour (past, present, future)
console.log(moment().hour());
