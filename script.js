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
        //it can be done with a loop(more efficiently) or by targeting each time block separately



function storeDataNineAM() {
    var userNotes = document.getElementById("nineAMUserData");
    localStorage.setItem("hour-9", userNotes.value);
}

function storeDataTenAM() {
    var userNotes = document.getElementById("tenAMUserData");
    localStorage.setItem("hour-10", userNotes.value);
}

function storeDataElevenAM() {
    var userNotes = document.getElementById("elevenAMUserData");
    localStorage.setItem("hour-11", userNotes.value);
}

function storeDataTwelvePM() {
    var userNotes = document.getElementById("twelvePMUserData");
    localStorage.setItem("hour-12", userNotes.value);
}

function storeDataOnePM() {
    var userNotes = document.getElementById("onePMUserData");
    localStorage.setItem("hour-13", userNotes.value);
}

function storeDataTwoPM() {
    var userNotes = document.getElementById("twoPMUserData");
    localStorage.setItem("hour-14", userNotes.value);
}

function storeDataThreePM() {
    var userNotes = document.getElementById("threePMUserData");
    localStorage.setItem("hour-15", userNotes.value);
}

function storeDataFourPM() {
    var userNotes = document.getElementById("fourPMUserData");
    localStorage.setItem("hour-16", userNotes.value);
}
function storeDataFivePM() {
    var userNotes = document.getElementById("fivePMUserData");
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
    document.getElementById("nineAMUserData").innerHTML = localStorage.getItem("hour-9");
    document.getElementById("tenAMUserData").innerHTML = localStorage.getItem("hour-10");
    document.getElementById("elevenAMUserData").innerHTML = localStorage.getItem("hour-11");
    document.getElementById("twelvePMUserData").innerHTML = localStorage.getItem("hour-12");
    document.getElementById("onePMUserData").innerHTML = localStorage.getItem("hour-13");
    document.getElementById("twoPMUserData").innerHTML = localStorage.getItem("hour-14");
    document.getElementById("threePMUserData").innerHTML = localStorage.getItem("hour-15");
    document.getElementById("fourPMUserData").innerHTML = localStorage.getItem("hour-16");
    document.getElementById("fivePMUserData").innerHTML = localStorage.getItem("hour-17");
}

initialize();
colorDisplay();

