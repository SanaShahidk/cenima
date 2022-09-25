document.querySelector(".movie-trailer").style.display = "none";
document.querySelector(".movie-content").style.display = "block";

document.querySelector(".show-trailer").style.display = "none";
document.querySelector(".show-content").style.display = "block";


document.querySelector(".batman-seats").style.display = "none";
document.querySelector(".crab-seats").style.display = "none";
document.querySelector(".me-seats").style.display = "none";
document.querySelector(".naval-seats").style.display = "none";
document.querySelector(".dead-seats").style.display = "none";
document.querySelector(".business-seats").style.display = "none";
document.querySelector(".guilty-seats").style.display = "none";
document.querySelector(".king-seats").style.display = "none";


var movieTrailer = document.getElementById("movie-trailer-show");
var showTrailer = document.getElementById("show-trailer-show");
var trendTrailer = document.getElementById("trend-trailer-show");
var famousTrailer = document.getElementById("famous-trailer-show");

function showMoviewTrailer(args) {
    if (args === "bat") {
        document.querySelector(".movie-trailer").style.display = "block";
        document.querySelector(".movie-content").style.display = "none";
        movieTrailer.setAttribute("src", "https://www.youtube.com/embed/u34gHaRiBIU");
    }
    else if (args === "crab") {
        document.querySelector(".movie-trailer").style.display = "block";
        document.querySelector(".movie-content").style.display = "none";
        movieTrailer.setAttribute("src", "https://www.youtube.com/embed/fmjKsL_-rfw");
    }
    else if (args === "me") {
        document.querySelector(".movie-trailer").style.display = "block";
        document.querySelector(".movie-content").style.display = "none";
        movieTrailer.setAttribute("src", "https://www.youtube.com/embed/Mmq_NVwLN_g");
    }
    else if (args === "naval") {
        document.querySelector(".movie-trailer").style.display = "block";
        document.querySelector(".movie-content").style.display = "none";
        movieTrailer.setAttribute("src", "https://www.youtube.com/embed/hS5EIQ3zubE");
    }
}

function closeMovieTrailer() {
    document.querySelector(".movie-trailer").style.display = "none";
    document.querySelector(".movie-content").style.display = "block";
    movieTrailer.setAttribute("src", "");
}

function showingShowTrailer(args2) {
    if (args2 === "dead") {
        console.log("dead");
        document.querySelector(".show-trailer").style.display = "block";
        document.querySelector(".show-content").style.display = "none";
        showTrailer.setAttribute("src", "https://www.youtube.com/embed/IN5TD4VRcSM");
    }
    else if (args2 === 'business') {
        document.querySelector(".show-trailer").style.display = "block";
        document.querySelector(".show-content").style.display = "none";
        showTrailer.setAttribute("src", "https://www.youtube.com/embed/M-PHcxPyasA");
    }
    else if (args2 === 'mind') {
        document.querySelector(".show-trailer").style.display = "block";
        document.querySelector(".show-content").style.display = "none";
        showTrailer.setAttribute("src", "https://www.youtube.com/embed/LP8goZ3Ok6s");
    }
    else if (args2 === 'ring') {
        document.querySelector(".show-trailer").style.display = "block";
        document.querySelector(".show-content").style.display = "none";
        showTrailer.setAttribute("src", "https://www.youtube.com/embed/x8UAUAuKNcU");
    }
}

function closeShowTrailer() {
    showTrailer.setAttribute("src", "");
    document.querySelector(".show-trailer").style.display = "none";
    document.querySelector(".show-content").style.display = "block";
}

// Starting SignUP/SignIN Work.

let mainContainer = document.querySelector(".main-container");
mainContainer.style.display = "none";

let formContainer = document.querySelector(".container2");
formContainer.style.display = "flex";

let signUp = document.querySelector(".signup");
signUp.style.display = "block";

let signin = document.querySelector(".signin");
signin.style.display = "none";

let signinError = document.querySelector(".signin-error");
signinError.style.display = "none";

let signUpName = document.getElementById("signupName");
let signUpEmail = document.getElementById("signupEmail");
let signupPassword = document.getElementById("signupPass");
let signupConfirmPassword = document.getElementById("signupCPass");
let signUpNumber = document.getElementById("signupNumber");
let error1 = 0;
let error2 = 0;
let error3 = 0;
let error4 = 0;
let error5 = 0;


function signUpCheck(event) {
    event.preventDefault();
    if (signUpName.value === "" || signUpName.value.length < 5) {
        signUpName.style.border = "2px solid red";
        error1 = 1;
    }
    else {
        error1 = 0;
        signUpName.style.border = "2px solid rgb(66, 70, 66)"
    }
    if (signUpEmail.value === "") {
        signUpEmail.style.border = "2px solid red";
        error2 = 1;
    }
    else {
        error2 = 0;
        signUpEmail.style.border = "2px solid rgb(66, 70, 66)"
    }
    if (signupPassword.value === "" || signupPassword.value.length < 5 || signupPassword.value.length > 9) {
        signupPassword.style.border = "2px solid red";
        error3 = 1;
    }
    else {
        error3 = 0;
        signupPassword.style.border = "2px solid rgb(66, 70, 66)"
    }
    if (signupConfirmPassword.value !== signupPassword.value) {
        signupConfirmPassword.style.border = "2px solid red";
        error4 = 1;
    }
    else {
        error4 = 0;
        signupConfirmPassword.style.border = "2px solid rgb(66, 70, 66)"
    }
    if (signUpNumber.value.length < 11) {
        signUpNumber.style.border = "2px solid red";
        error5 = 1;
    }
    else {
        error5 = 0;
        signUpNumber.style.border = "2px solid rgb(66, 70, 66)";
    }
    if (error1 === 0 && error2 === 0 && error3 === 0 && error4 === 0 && error5 === 0) {
        // var userInformation = {
        //     userName: signUpName.value,
        //     userEmail: signUpEmail.value,
        //     userPassword: signupPassword.value,
        //     userNumber: signUpNumber.value
        // }
        // var userInformation2 = JSON.stringify(userInformation);
        // localStorage.setItem("userInformation", userInformation2);
        // JSON.parse(userInformation2);
        // var gettingUserInformation = localStorage.getItem("userInformation");
        window.localStorage.setItem("userName", signUpName.value);
        window.localStorage.setItem("userEmail", signUpEmail.value);
        window.localStorage.setItem("userPassword", signupPassword.value);
        window.localStorage.setItem("userNumber", signUpNumber.value);

        signUpName.value = "";
        signUpEmail.value = "";
        signupPassword.value = "";
        signupConfirmPassword.value = "";
        signUpNumber.value = "";
        signUp.style.display = "none";
        signin.style.display = "block";
    }

}

let signinEmail = document.getElementById("signInEmail");
let signInPassword = document.getElementById("signInPassword");

function checkSignIn() {
    event.preventDefault();
    if (signinEmail.value !== localStorage.getItem("userEmail") || signInPassword.value !== localStorage.getItem("userPassword")) {
        signinError.style.display = "flex";
        signInPassword.style.border = "2px solid red";
        signinEmail.style.border = "2px solid red";
    }
    else if (signinEmail.value === localStorage.getItem("userEmail") && signInPassword.value === localStorage.getItem("userPassword")) {
        signInPassword.style.border = "2px solid rgb(66, 70, 66)";
        signinEmail.style.border = "2px solid rgb(66, 70, 66)";
        signInPassword.value = "";
        signinEmail.value = "";
        formContainer.style.display = "none";
        mainContainer.style.display = "block";
    }
}

function showsignUp() {
    mainContainer.style.display = "none";
    formContainer.style.display = "flex";
    signin.style.display = "none";
    signinError.style.display = "none";
    signUp.style.display = "block";
    signUpName.value = "";
    signUpEmail.value = "";
    signupPassword.value = "";
    signupConfirmPassword.value = "";
    signUpNumber.value = "";
    signinEmail.value = "";
    signInPassword.value = "";

}

function logOut() {
    mainContainer.style.display = "none";
    formContainer.style.display = "flex";
    signUp.style.display = "none";
    signin.style.display = "block";
    signinEmail.value = "";
    signInPassword.value = "";
    signinError.style.display = "none";
}

function signOut() {
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPassword");
    localStorage.removeItem("userNumber");
    mainContainer.style.display = "none";
    formContainer.style.display = "flex";
    signUp.style.display = "block";
    signin.style.display = "none";
}

var showBatmanSeats = document.getElementById("batmanSeatsButton");

showBatmanSeats.addEventListener("click", function () {
    if (localStorage.getItem("batmanSelectedSeats") !== undefined) {
        for (let i = 0; i < batmanSelectedSeats.length; i++) {
            document.getElementById(batmanSelectedSeats[i]).className = "confirmSelected";
        }
    }
    document.querySelector(".movie-trailer").style.display = "none";
    document.querySelector(".movie-content").style.display = "none";
    document.querySelector(".batman-seats").style.display = "block";
});

let batmanSelectedSeats = JSON.parse(localStorage.getItem("batmanSelectedSeats")) || [];
for (let i = 1; i < 16; i++) {
    document.getElementById("b"+i).className = "notSelected";
    console.log("b"+i);
}


function selectingBatmanSeat(getId) {
    let seatId = document.getElementById(getId);

    if (document.getElementById(getId).className === "notSelected") {
        document.getElementById(getId).className = "selected";
        batmanSelectedSeats.push(getId);
    }
    else if (document.getElementById(getId).className === "selected") {
        document.getElementById(getId).className = "notSelected";
        let itemToBeRemoved = batmanSelectedSeats.indexOf(getId);
        batmanSelectedSeats.splice(itemToBeRemoved, 1);
        // console.log(selectedSeats);
    }
}

function confirmBatmanSeats() {
    localStorage.setItem("batmanSelectedSeats", JSON.stringify(batmanSelectedSeats));
    document.querySelector(".movie-trailer").style.display = "none";
    document.querySelector(".movie-content").style.display = "block";
    document.querySelector(".batman-seats").style.display = "none";
}


var showCrabSeats = document.getElementById("crabSeatsButton");

showCrabSeats.addEventListener("click", function () {
    if (localStorage.getItem("crabSelectedSeats") !== undefined) {
        for (let i = 0; i < crabSelectedSeats.length; i++) {
            document.getElementById(crabSelectedSeats[i]).className = "confirmSelected";
        }
    }
    document.querySelector(".movie-trailer").style.display = "none";
    document.querySelector(".movie-content").style.display = "none";
    document.querySelector(".crab-seats").style.display = "block";
});

let crabSelectedSeats = JSON.parse(localStorage.getItem("crabSelectedSeats")) || [];
for (let i = 1; i < 16; i++) {
    document.getElementById("c"+i).className = "notSelected";
    // console.log("b"+i);
}

function selectingCrabSeat(getId) {
    let seatId = document.getElementById(getId);
    if (document.getElementById(getId).className === "notSelected") {
        document.getElementById(getId).className = "selected";
        crabSelectedSeats.push(getId);
    }
    else if (document.getElementById(getId).className === "selected") {
        document.getElementById(getId).className = "notSelected";
        let itemToBeRemoved = crabSelectedSeats.indexOf(getId);
        crabSelectedSeats.splice(itemToBeRemoved, 1);
        // console.log(selectedSeats);
    }
}

function confirmCrabSeats() {
    localStorage.setItem("crabSelectedSeats", JSON.stringify(crabSelectedSeats));
    document.querySelector(".movie-trailer").style.display = "none";
    document.querySelector(".movie-content").style.display = "block";
    document.querySelector(".crab-seats").style.display = "none";
}

var showMeSeats = document.getElementById("meSeatsButton");

showMeSeats.addEventListener("click", function () {
    if (localStorage.getItem("meSelectedSeats") !== undefined) {
        for (let i = 0; i < meSelectedSeats.length; i++) {
            document.getElementById(meSelectedSeats[i]).className = "confirmSelected";
        }
    }
    document.querySelector(".movie-trailer").style.display = "none";
    document.querySelector(".movie-content").style.display = "none";
    document.querySelector(".me-seats").style.display = "block";
});

let meSelectedSeats = JSON.parse(localStorage.getItem("meSelectedSeats")) || [];
for (let i = 1; i < 16; i++) {
    document.getElementById("m"+i).className = "notSelected";
    // console.log("b"+i);
}

function selectingMeSeat(getId) {
    let seatId = document.getElementById(getId);
    if (document.getElementById(getId).className === "notSelected") {
        document.getElementById(getId).className = "selected";
        meSelectedSeats.push(getId);
    }
    else if (document.getElementById(getId).className === "selected") {
        document.getElementById(getId).className = "notSelected";
        let itemToBeRemoved = meSelectedSeats.indexOf(getId);
        meSelectedSeats.splice(itemToBeRemoved, 1);
        // console.log(selectedSeats);
    }
}

function confirmMeSeats() {
    localStorage.setItem("meSelectedSeats", JSON.stringify(meSelectedSeats));
    document.querySelector(".movie-trailer").style.display = "none";
    document.querySelector(".movie-content").style.display = "block";
    document.querySelector(".me-seats").style.display = "none";
}

var showNavalSeats = document.getElementById("navalSeatsButton");

showNavalSeats.addEventListener("click", function () {
    if (localStorage.getItem("navalSelectedSeats") !== undefined) {
        for (let i = 0; i < navalSelectedSeats.length; i++) {
            document.getElementById(navalSelectedSeats[i]).className = "confirmSelected";
        }
    }
    document.querySelector(".movie-trailer").style.display = "none";
    document.querySelector(".movie-content").style.display = "none";
    document.querySelector(".naval-seats").style.display = "block";
});

let navalSelectedSeats = JSON.parse(localStorage.getItem("navalSelectedSeats")) || [];
for (let i = 1; i < 16; i++) {
    document.getElementById("n"+i).className = "notSelected";
}

function selectingNavalSeat(getId) {
    let seatId = document.getElementById(getId);
    if (document.getElementById(getId).className === "notSelected") {
        document.getElementById(getId).className = "selected";
        navalSelectedSeats.push(getId);
    }
    else if (document.getElementById(getId).className === "selected") {
        document.getElementById(getId).className = "notSelected";
        let itemToBeRemoved = navalSelectedSeats.indexOf(getId);
        navalSelectedSeats.splice(itemToBeRemoved, 1);
        // console.log(selectedSeats);
    }
}

function confirmNavalSeats() {
    localStorage.setItem("navalSelectedSeats", JSON.stringify(navalSelectedSeats));
    document.querySelector(".movie-trailer").style.display = "none";
    document.querySelector(".movie-content").style.display = "block";
    document.querySelector(".naval-seats").style.display = "none";
}

var showDeadSeats = document.getElementById("deadSeatsButton");
showDeadSeats.addEventListener("click", function () {
    if (localStorage.getItem("deadSelectedSeats") !== undefined) {
        for (let i = 0; i < deadSelectedSeats.length; i++) {
            document.getElementById(deadSelectedSeats[i]).className = "confirmSelected";
        }
    }
    document.querySelector(".show-trailer").style.display = "none";
    document.querySelector(".show-content").style.display = "none";
    document.querySelector(".dead-seats").style.display = "block";
});

let deadSelectedSeats = JSON.parse(localStorage.getItem("deadSelectedSeats")) || [];
for (let i = 1; i < 16; i++) {
    document.getElementById("d"+i).className = "notSelected";
}

function selectingDeadSeat(getId) {
    let seatId = document.getElementById(getId);
    if (document.getElementById(getId).className === "notSelected") {
        document.getElementById(getId).className = "selected";
        deadSelectedSeats.push(getId);
    }
    else if (document.getElementById(getId).className === "selected") {
        document.getElementById(getId).className = "notSelected";
        let itemToBeRemoved = deadSelectedSeats.indexOf(getId);
        deadSelectedSeats.splice(itemToBeRemoved, 1);
        // console.log(selectedSeats);
    }
}

function confirmDeadSeats() {
    localStorage.setItem("deadSelectedSeats", JSON.stringify(deadSelectedSeats));
    document.querySelector(".show-trailer").style.display = "none";
    document.querySelector(".show-content").style.display = "block";
    document.querySelector(".dead-seats").style.display = "none";
}

var showBusinessSeats = document.getElementById("businessSeatsButton");

showBusinessSeats.addEventListener("click", function () {
    if (localStorage.getItem("deadSelectedSeats") !== undefined) {
        for (let i = 0; i < businessSelectedSeats.length; i++) {
            document.getElementById(businessSelectedSeats[i]).className = "confirmSelected";
        }
    }
    document.querySelector(".show-trailer").style.display = "none";
    document.querySelector(".show-content").style.display = "none";
    document.querySelector(".business-seats").style.display = "block";
});

let businessSelectedSeats = JSON.parse(localStorage.getItem("businessSelectedSeats")) || [];
for (let i = 1; i < 16; i++) {
    document.getElementById("bu"+i).className = "notSelected";
}
function selectingBusinessSeat(getId) {
    let seatId = document.getElementById(getId);
    if (document.getElementById(getId).className === "notSelected") {
        document.getElementById(getId).className = "selected";
        businessSelectedSeats.push(getId);
    }
    else if (document.getElementById(getId).className === "selected") {
        document.getElementById(getId).className = "notSelected";
        let itemToBeRemoved = businessSelectedSeats.indexOf(getId);
        businessSelectedSeats.splice(itemToBeRemoved, 1);
        // console.log(selectedSeats);
    }
}

function confirmBusinessSeats() {
    localStorage.setItem("businessSelectedSeats", JSON.stringify(businessSelectedSeats));
    document.querySelector(".show-trailer").style.display = "none";
    document.querySelector(".show-content").style.display = "block";
    document.querySelector(".business-seats").style.display = "none";
}
var showGuiltySeats = document.getElementById("guiltySeatsButton");

showGuiltySeats.addEventListener("click", function () {
    if (localStorage.getItem("guiltySelectedSeats") !== undefined) {
        for (let i = 0; i < guiltySelectedSeats.length; i++) {
            document.getElementById(guiltySelectedSeats[i]).className = "confirmSelected";
        }
    }
    document.querySelector(".show-trailer").style.display = "none";
    document.querySelector(".show-content").style.display = "none";
    document.querySelector(".guilty-seats").style.display = "block";
});

let guiltySelectedSeats = JSON.parse(localStorage.getItem("guiltySelectedSeats")) || [];
for (let i = 1; i < 16; i++) {
    document.getElementById("gu"+i).className = "notSelected";
}
function selectingGuiltySeat(getId) {
    let seatId = document.getElementById(getId);
    if (document.getElementById(getId).className === "notSelected") {
        document.getElementById(getId).className = "selected";
        guiltySelectedSeats.push(getId);
    }
    else if (document.getElementById(getId).className === "selected") {
        document.getElementById(getId).className = "notSelected";
        let itemToBeRemoved = guiltySelectedSeats.indexOf(getId);
        guiltySelectedSeats.splice(itemToBeRemoved, 1);
        // console.log(selectedSeats);
    }
}

function confirmGuiltySeats() {
    localStorage.setItem("guiltySelectedSeats", JSON.stringify(guiltySelectedSeats));
    document.querySelector(".show-trailer").style.display = "none";
    document.querySelector(".show-content").style.display = "block";
    document.querySelector(".guilty-seats").style.display = "none";
}

var showKingsSeats = document.getElementById("kingSeatsButton");

showKingsSeats.addEventListener("click", function () {
    if (localStorage.getItem("kingSelectedSeats") !== undefined) {
        for (let i = 0; i < kingSelectedSeats.length; i++) {
            document.getElementById(kingSelectedSeats[i]).className = "confirmSelected";
        }
    }
    document.querySelector(".show-trailer").style.display = "none";
    document.querySelector(".show-content").style.display = "none";
    document.querySelector(".king-seats").style.display = "block";
});

let kingSelectedSeats = JSON.parse(localStorage.getItem("kingSelectedSeats")) || [];
for (let i = 1; i < 16; i++) {
    document.getElementById("k"+i).className = "notSelected";

}
function selectingKingSeat(getId) {
    let seatId = document.getElementById(getId);
    if (document.getElementById(getId).className === "notSelected") {
        document.getElementById(getId).className = "selected";
        kingSelectedSeats.push(getId);
    }
    else if (document.getElementById(getId).className === "selected") {
        document.getElementById(getId).className = "notSelected";
        let itemToBeRemoved = kingSelectedSeats.indexOf(getId);
        kingSelectedSeats.splice(itemToBeRemoved, 1);
        // console.log(selectedSeats);
    }
}

function confirmKingSeats() {
    localStorage.setItem("kingSelectedSeats", JSON.stringify(kingSelectedSeats));
    document.querySelector(".show-trailer").style.display = "none";
    document.querySelector(".show-content").style.display = "block";
    document.querySelector(".king-seats").style.display = "none";
}