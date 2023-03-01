// variable review
let greeting = "Good evening";
console.log(greeting);

// simple function
function greet() {
    console.log(greeting);
}

greet();

// function with an inout parameter
function greetUser(username) {
    let userGreeting = greeting + ", " + username;
    console.log(userGreeting);
}

greetUser("Cameron");

// function with input parameter
// that modifies the page
function greetUserOnPage(username) {
    let greetingDisplay = document.getElementById("greetingDisplay");
    greetingDisplay.innerHTML = greeting + ", " + username;
}

greetUserOnPage("Cameron");

// Function that outputs (or "returns") a value
function getUserGreeting(username) {
    return greeting + ", " + username;
}

getUserGreeting("Cameron");
console.log(
    getUserGreeting("Cameron")
);

// Function using another function
// that modifies the page
function greetUserOnPageV2(username) {
    let greetingDisplay = document.getElementById("greetingDisplay");
    greetingDisplay.innerHTML = getUserGreeting(username);
}

greetUserOnPageV2("Cameron Dubey");