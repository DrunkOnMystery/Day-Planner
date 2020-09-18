//Establish variables
var displayDateEl = document.querySelector("#currentDay");
// var currentHourEl = document.querySelector(".past");
// var currentHour = moment().hour();
// var nineAMEL = document.querySelector("#nineAM");
// var tenAMEL = document.querySelector("#tenAM");
// var elevenAMEL = document.querySelector("#elevenAM");
// var twelvePMEL = document.querySelector("#twelvePM");
// var onePMEL = document.querySelector("#onePM");
// var twoPMEL = document.querySelector("#twoPM");
// var threePMEL = document.querySelector("#threePM");
// var fourPMEL = document.querySelector("#fourPM");
// var fivePMEL = document.querySelector("#fivePM");
// var hours = [nineAMEL, tenAMEL, elevenAMEL, twelvePMEL, onePMEL, twoPMEL, threePMEL, fourPMEL, fivePMEL];
// var button = $("<button>");
// var icon = $("<i>");

// Display the current time using Moment.js
console.log(moment().format("dddd, MMMM Do"));

// Click event to save text area content to Local Storage

// When app opens, display content for each time block from local storage.
        //it can be done with a loop(more efficiently) or by targeting each time block separately
        // hours.forEach(timeCheck);

    // function timeCheck() {
    //     if (currentHour === (hours[i] + 9)) {
    //         (hours[i]).style.class = ".present"
    //     }
    //     else if (currentHour < (hours[i] + 9)) {
    //         (hours[i]).style.class = ".future"
    //     }
    // }

        // for (i = 9; i < 18; i++) {
        //     if (currentHour === (hours[i] + 9)) {
        //         (hours[i]).style.class = ".present"
        //     }
        //     else if (currentHour < (hours[i] + 9)) {
        //         (hours[i]).style.class = ".future"
        //     }
        // }
//         function timeCheck() {
//             console.log(moment().hour());
//         if (currentHour === 9) {
//             $("nineAMEL").addClass(".present");
//             $("#nineAM").removeClass(".past");
//         if (currentHour < 9) {
//         $("#nineAM").addClass(".future");
//         $("#nineAM").removeClass(".past");
//         }
//     }
// }

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


