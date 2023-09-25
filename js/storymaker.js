// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const nounOne = document.getElementById("noun1");
const verb = document.getElementById("verb");
const adjective = document.getElementById("adjective");
const nounTwo = document.getElementById("noun2");
const setting = document.getElementById("setting");



// Constants for p tag to display query selectors
const chosenNounOne = document.querySelector("#choosenNoun1");
const chosenVerb = document.querySelector("#choosenVerb");
const chosenAdjective = document.querySelector("#choosenAdjective");
const chosenNounTwo = document.querySelector("#choosenNoun2");
const chosenSetting = document.querySelector("#choosenSetting");


// Constants for final buttons and p tags
const showStory = document.querySelector("#playback");
const randomStory = document.querySelector("#random");
const story = document.querySelector("#story");
const reset = document.querySelector("#reset");
const credit = document.querySelector("#credits");



// Variables for pre-defined arrays
var nounOneArray = ["The Turkey", "Mom", "Dad", "The Dog"];
var verbArray = ["sat on", "ate", "danced with", "saw"];
var adjectiveArray = ["a funny", "a scary", "a goofy", "a slimy"];
var nounTwoArray = ["goat", "monkey", "fish", "cow"];
var settingArray = ["on the moon", "on the chair", "in my spaghetti", "in my soup"];

// Variables for count to grab array elements

let nounOneCount = 0;
let verbCount = 0;
let adjectiveCount = 0;
let nounTwoCount = 0;
let settingCount = 0;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    // variable to get array element and displaying it

    var displayNounValue = nounOneArray[nounOneCount];
    chosenNounOne.textContent = displayNounValue;

    nounOneCount = nounOneCount + 1;

    // if-else to change count setting

    if (nounOneCount > nounOneArray.length) {
        nounOneCount = 0;
    }
}

function verb_on_click() {
    var displayVerbValue = verbArray[verbCount];
    chosenVerb.textContent = displayVerbValue;

    verbCount++;

    if (verbCount > verbArray.length) {
        verbCount = 0;
    }
}

function adjective_on_click() {
    var displayAdjectiveValue = adjectiveArray[adjectiveCount];
    chosenAdjective.textContent = displayAdjectiveValue;

    adjectiveCount++;

    if (adjectiveCount > adjectiveArray.length) {
        adjectiveCount = 0;
    }
}


function noun2_on_click() {
    var displayNounTwoValue = nounTwoArray[nounTwoCount];
    chosenNounTwo.textContent = displayNounTwoValue;

    nounTwoCount++;

    if (nounTwoCount > nounTwoArray.length) {
        nounTwoCount = 0;
    }
}

function setting_on_click() {
    var displaySettingValue = settingArray[settingCount];
    chosenSetting.textContent = displaySettingValue;

    settingCount++;

    if (settingCount > settingArray.length) {
        settingCount = 0;
    }
}


// concatenate the user story and display
function playback_on_click() {

    if (nounOneCount === 0) {
        alert("Please provide a noun")
    }

    else if (verbCount === 0) {
        alert("Please provide a verb");
    }

    else if (adjectiveCount === 0) {
        alert("Please provide an adjective");
    }

    else if (nounTwoCount === 0) {
        alert("Please provide a second noun");
    }

    else if (settingCount === 0) {
        alert("Please provide a setting");
    }

    else {
        console.log(nounOneCount);
        var userStory = nounOneArray[nounOneCount - 1] + " " + verbArray[verbCount - 1] + " " + adjectiveArray[adjectiveCount - 1] + " " + nounTwoArray[nounTwoCount - 1] + " " + settingArray[settingCount - 1];
        story.textContent = userStory;
        credit.textContent = "Created by Nathan Marino/200527317"
    }

}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    nounOneRandomCount = Math.floor(Math.random() * 4);
    verbRandomCount = Math.floor(Math.random() * 4);
    adjectiveRandomCount = Math.floor(Math.random() * 4);
    nounTwoRandomCount = Math.floor(Math.random() * 4);
    settingRandomCount = Math.floor(Math.random() * 4);

    var randomStory = nounOneArray[nounOneRandomCount] + " " + verbArray[verbRandomCount] + " " + adjectiveArray[adjectiveRandomCount] + " " + nounTwoArray[nounTwoRandomCount] + " " + settingArray[settingRandomCount];
    story.textContent = randomStory;
}

function reset_on_click() {
    location.reload();
}

/* Event Listeners
-------------------------------------------------- */

nounOne.addEventListener("click", function () {
    noun1_on_click();
});

verb.addEventListener("click", function () {
    verb_on_click();
});

adjective.addEventListener("click", function () {
    adjective_on_click();
});

nounTwo.addEventListener("click", function () {
    noun2_on_click();
});

setting.addEventListener("click", function () {
    setting_on_click();
});

showStory.addEventListener("click", function () {
    playback_on_click();
})

randomStory.addEventListener("click", function () {
    random_on_click();
})

reset.addEventListener("click", function () {
    reset_on_click();
})









