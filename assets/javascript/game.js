// Variables
//var huhu = ["../Images/belly01", "../Images/warn02", "../Images/bite02"]; //Huhu's images
var escapes = 0; //number of wins
var bites = 0;  //number of loses
var rubs = 5;  //number of belly rubs left
//var correctGuess;  //count the correct guesses
//var spaces; //number of spaces in the word
var status = ["What a sweet boy!", "I don't like the look on his face!", "Woohoo!  Free acupuncture!"] ;  //the image captions
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var words = ["fuzz", "bengal", "sokoke", "fiesty", "playful", "purrfect", "buddy", "fur ball"];
var word = words[Math.floor(Math.random() * words.length)];
var lettersGuessed = []; //letters the user has guessed
var currIndex;  //index of the current word
var wordGuesses = []; //the word being built to match the hidden word
var gameStart = false;
var gameEnd = false;

//generate a random word and display as blanks
function randWord() {
    for (var i = 0; i < word.length; i++) {
    wordGuesses[i] = "_";
    }
    document.getElementById("answer").innerHTML = wordGuesses.join(" ");     
};


document.getElementById("rubsLeft").textContent = "Belly Rubs Left: " + rubs; 

document.onkeyup = function(event) {
    
    var userChoice = event.key;
    currIndex = word.indexOf(userChoice, 0);
    if (currIndex >= 0 && rubs > 0) {
        while (currIndex >=0) {
            wordGuesses[currIndex] = userChoice;
            currIndex=word.indexOf(userChoice, currIndex + 1);
        }
        document.getElementById("answer").textContent = wordGuesses.join(" ");
    } else {
        if (rubs >= 1) {
        var incorrect = document.getElementById("letterList-text");
        incorrect.textContent = userChoice;
        rubs--;
        document.getElementById("rubsLeft").textContent = "Belly Rubs Left: " + rubs;
        if (rubs >=3) {
            document.getElementById("huImg").src = "Assets/Images/belly01.jpg";
            document.getElementById("caption").innerHTML = "What a sweet boy!";
        } else {
            document.getElementById("huImg").src = "Assets/Images/warn02.jpg";
            document.getElementById("caption").innerHTML = "I don't like the look on his face!";
        }
        } else {
            document.getElementById("huImg").src = "Assets/Images/bite02.jpg";
            document.getElementById("caption").innerHTML = "Woohoo!  Free acupuncture!";
            document.getElementById("answer").innerHTML = "Ouch! He caught you!";
        }
    }
};




