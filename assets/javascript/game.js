// Variables
//var huhu = ["../Images/belly01", "../Images/warn02", "../Images/bite02"]; //Huhu's images
var escapes = 0; //number of wins
var bites = 0;  //number of loses
var rubs = 5;  //number of belly rubs left
//var correctGuess;  //count the correct guesses
//var spaces; //number of spaces in the word
//var status = ["What a sweet boy!", "I don't like the look on his face!", "Woohoo!  Free acupuncture!"] ;  //the image captions
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var words = ["fuzz", "bengal", "sokoke", "fiesty", "playful", "purrfect", "buddy", "fur ball"];
var word;
//var lettersGuessed = []; //letters the user has guessed
var currIndex;  //index of the current word
var wordGuesses = []; //the word being built to match the hidden word
var wrong = [];
//var gameStart = false;
//var gameEnd = false;

//generate a random word and display as blanks
function randWord() {
    word = words[Math.floor(Math.random() * words.length)];
    for (var i = 0; i < word.length; i++) {
    wordGuesses[i] = "_";
    }
    document.getElementById("answer").innerHTML = wordGuesses.join(" ");  
    wrong = [];
    document.getElementById("letterList-text").textContent = wrong;
    rubs = 5;   
    document.getElementById("rubsLeft").textContent = "Belly Rubs Left: " + rubs;
    document.getElementById("huImg").src = "assets/images/belly01.JPG";
    document.getElementById("caption").textContent = "What a sweet boy!";
};


document.getElementById("rubsLeft").textContent = "Belly Rubs Left: " + rubs; 
document.getElementById("wins").textContent = "You've escaped " + escapes + " bites";
document.getElementById("losses").textContent = "Youv'e been bitten " + bites + " times";

function isWin () {
    if(wordGuesses.indexOf("_") === -1) {
        escapes++;
        document.getElementById("wins").textContent = "You've escaped " + escapes + " bites";
    }
};

document.onkeyup = function(event) {
    
    var userChoice = event.key;
    wordIndex = word.indexOf(userChoice, 0);
    if (wordIndex >= 0 && rubs > 0) {
        while (wordIndex >=0) {
            wordGuesses[wordIndex] = userChoice;
            wordIndex=word.indexOf(userChoice, wordIndex + 1);
        }
        document.getElementById("answer").textContent = wordGuesses.join(" ");
    } else {
        if (rubs > 1) {
        var incorrect = document.getElementById("letterList-text");
        wrong.push(event.key);
        console.log(wrong)
        incorrect.textContent = wrong.join(", ");
        rubs--;
        document.getElementById("rubsLeft").textContent = "Belly Rubs Left: " + rubs;
        if (rubs < 3) {
            document.getElementById("huImg").src = "assets/images/warn02.JPG";
            document.getElementById("caption").innerHTML = "I don't like the look on his face!";
        }
        } else {
            document.getElementById("huImg").src = "assets/images/bite02.JPG";
            document.getElementById("caption").innerHTML = "Woohoo!  Free acupuncture!";
            document.getElementById("answer").innerHTML = "Ouch! He caught you!";
            document.getElementById("rubsLeft").textContent = "Belly Rubs Left: Yikes!";
            bites++;
            document.getElementById("losses").textContent = "You've been bitten " + bites + " times";
        }
    }
    isWin();
};




