// Use the arrays to defined the nouns, verbs, adjectives
const nouns = ["dog", "monkey", "tree", "robot", "monster","cat"];
const verbs = ["runs", "sleeps", "flies","dances", "sings", "walks"];
const adjectives = ["happy", "sad", "colorful", "silly","angry", "friendly"];

// use getElementById element to get button and story for the user
const createBtn = document.getElementById("createBtn");
const storyText = document.getElementById("storyText");

// Function to generate a random story
function createStory() {

    // Set the randomelements to select one word from each category randomly. For this use var element
    var randomNoun = nouns[Math.floor(Math.random() * (nouns.length))];
    var randomVerb = verbs[Math.floor(Math.random() * (verbs.length))];
    var randomAdjective = adjectives[Math.floor(Math.random() * (adjectives.length))];

    // Construct the structure of the story in proper form
    const story = `The ${randomAdjective} ${randomNoun} ${randomVerb}!`;

    // display story for the user 
    storyText.textContent = story;

}

// To create story add eventlistener to the createBtn
createBtn.addEventListener("click", createStory);




