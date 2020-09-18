//Establish variables
var displayDateEl = document.querySelector("#currentDay");

var currentHour = moment().hour();

var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17]

// Display the current time using Moment.js
console.log(moment().format("dddd, MMMM Do"));
console.log(moment().hour());

// When app opens, display content for each time block from local storage.
        //it can be done with a loop(more efficiently) or by targeting each time block separately



function storeDataNineAM() {
    var userNotes = document.getElementById("nineAMUserData");
    localStorage.setItem("nineAM", userNotes.value);
}

function storeDataTenAM() {
    var userNotes = document.getElementById("tenAMUserData");
    localStorage.setItem("tenAM", userNotes.value);
}

function storeDataElevenAM() {
    var userNotes = document.getElementById("elevenAMUserData");
    localStorage.setItem("elevenAM", userNotes.value);
}

function storeDataTwelvePM() {
    var userNotes = document.getElementById("twelvePMUserData");
    localStorage.setItem("twelvePM", userNotes.value);
}

function storeDataOnePM() {
    var userNotes = document.getElementById("onePMUserData");
    localStorage.setItem("onePM", userNotes.value);
}

function storeDataTwoPM() {
    var userNotes = document.getElementById("twoPMUserData");
    localStorage.setItem("twoPM", userNotes.value);
}

function storeDataThreePM() {
    var userNotes = document.getElementById("threePMUserData");
    localStorage.setItem("threePM", userNotes.value);
}

function storeDataFourPM() {
    var userNotes = document.getElementById("fourPMUserData");
    localStorage.setItem("fourPM", userNotes.value);
}
function storeDataFivePM() {
    var userNotes = document.getElementById("fivePMUserData");
    localStorage.setItem("fivePM", userNotes.value);
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
    document.getElementById("nineAMUserData").innerHTML = localStorage.getItem("nineAM");
    document.getElementById("tenAMUserData").innerHTML = localStorage.getItem("tenAM");
    document.getElementById("elevenAMUserData").innerHTML = localStorage.getItem("elevenAM");
    document.getElementById("twelvePMUserData").innerHTML = localStorage.getItem("twelvePM");
    document.getElementById("onePMUserData").innerHTML = localStorage.getItem("onePM");
    document.getElementById("twoPMUserData").innerHTML = localStorage.getItem("twoPM");
    document.getElementById("threePMUserData").innerHTML = localStorage.getItem("threePM");
    document.getElementById("fourPMUserData").innerHTML = localStorage.getItem("fourPM");
    document.getElementById("fivePMUserData").innerHTML = localStorage.getItem("fivePM");
}

initialize();
colorDisplay();

