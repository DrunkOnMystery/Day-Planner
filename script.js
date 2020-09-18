//Establish variables
var displayDateEl = document.querySelector("#currentDay");

var currentHour = moment().hour();
//Tester for "off-hours"
// var currentHour = 11;

var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17]

// Display the current time using Moment.js
console.log(moment().format("dddd, MMMM Do"));
console.log(moment().hour());

// When app opens, display content for each time block from local storage.

function storeData9() {
    var userNotes = document.getElementById("userData-9");
    localStorage.setItem("hour-9", userNotes.value);
}

function storeData10() {
    var userNotes = document.getElementById("userData-10");
    localStorage.setItem("hour-10", userNotes.value);
}

function storeData11() {
    var userNotes = document.getElementById("userData-11");
    localStorage.setItem("hour-11", userNotes.value);
}

function storeData12() {
    var userNotes = document.getElementById("userData-12");
    localStorage.setItem("hour-12", userNotes.value);
}

function storeData13() {
    var userNotes = document.getElementById("userData-13");
    localStorage.setItem("hour-13", userNotes.value);
}

function storeData14() {
    var userNotes = document.getElementById("userData-14");
    localStorage.setItem("hour-14", userNotes.value);
}

function storeData15() {
    var userNotes = document.getElementById("userData-15");
    localStorage.setItem("hour-15", userNotes.value);
}

function storeData16() {
    var userNotes = document.getElementById("userData-16");
    localStorage.setItem("hour-16", userNotes.value);
}
function storeData17() {
    var userNotes = document.getElementById("userData-17");
    localStorage.setItem("hour-17", userNotes.value);
}

//Display the current date
    displayDateEl.textContent = moment().format("dddd, MMMM Do");

//Change time block background color depending on the current hour (past, present, future)

function colorDisplay() {
    for (i = 9; i < 18; i++) {
        if (i < currentHour) {
            $(".hour-" + i).addClass("past");
        }
        else if (i === currentHour) {
            $(".hour-" + i).addClass("present");
        }
        else if (i > currentHour) {
            $(".hour-" + i).addClass("future");
        }
    }
}

//Retrieve user inputs on initialize
function initialize() {
    for (i=9; i<18; i++) {
        document.getElementById("userData-" + i).innerHTML = localStorage.getItem("hour-" + i);
    }
}

initialize();
colorDisplay();

