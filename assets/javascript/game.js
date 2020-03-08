// Variables
var huhu = ["../Images/belly01", "../Images/warn02", "../Images/bite02"]; //Huhu's images
var escapes = 0; //number of wins
var bites = 0;  //number of loses
var rubs = 5;  //number of belly rubs left
var correctGuess;  //count the correct guesses
var spaces; //number of spaces in the word
var status = ["What a sweet boy!", "I don't like the look on his face!", "Woohoo!  Free acupuncture!"] ;  //the image captions
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var words = ["fuzz", "bengal", "sokoke", "fiesty", "playful", "purrfect", "buddy", "fur ball"];
var lettersGuessed = []; //letters the user has guessed
var currIndex;  //index of the current word
var wordGuesses = []; //the word being built to match the hidden word
var gameStart = false;
var gameEnd = false;

//generate a random word and display as blanks
function randWord() {
    var word = words[Math.floor(Math.random() * words.length)];
    var blanks = [];
    for (var i = 0; i < word.length; i++) {
    blanks[i] = "_";
    }
    document.getElementById("blanks").innerHTML = blanks.join(" ");
    console.log(word)
}

document.getElementById("rubsLeft").textContent = "Belly Rubs Left: " + rubs;




