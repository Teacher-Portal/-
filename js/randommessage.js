var ranmess = document.getElementById("randommessage")

// Sample array
var myArray = ["Did you know that theres only one devolper that worked on this?", "Fun fact Xenapsis used to be called Plasm until I later changed that.", "Did  you know it takes a average of 20 minutes to rip a game?", "If you dont know what to play you should try riddle school its old but gold.", "Slope 2 offers 2 player support now!"];

// Get a random index from the array length
var randomIndex = Math.floor(Math.random() * myArray.length);

// Use the random index to get a random item from the array
var randomItem = myArray[randomIndex];

ranmess.innerHTML = randomItem

// Thanks chat gpt