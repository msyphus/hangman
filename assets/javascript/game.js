// Variables
var escapes = 0; //number of wins
var bites = 0;  //number of loses
var rubs = 5;  //number of belly rubs left
var words = ["fuzz", "bengal", "sokoke", "fiesty", "playful", "purrfect", "buddy", "furball", "tabby", "hiss", "pawsitive"];
var word; //the word chosen at random from the array above
var wordGuesses; //the word as it's being guessed
var wrong = []; //where to store the wrong guesses
var gameOver = false;  //trigger end of game
var userChoice; //the key that is pressed

//Display functions

function bellyRubs () {
    document.getElementById("rubsLeft").textContent = "Belly Rubs Left: " + rubs; 
};

function successes () {
    document.getElementById("wins").textContent = "You've escaped " + escapes + " bites";
};

function fails () {
    document.getElementById("losses").textContent = "You've been bitten " + bites + " times";
}

//Create a new game: generate a random word and display as blanks, update display data, reset variables
function randWord() {
    gameOver = false;
    wordGuesses = [];
    word = words[Math.floor(Math.random() * words.length)];
    for (var i = 0; i < word.length; i++) {
    wordGuesses[i] = "_";
    }
    document.getElementById("answer").innerHTML = wordGuesses.join(" ");  
    wrong = [];
    document.getElementById("letterList-text").textContent = wrong;
    rubs = 5;   
    bellyRubs();
    document.getElementById("huImg").src = "assets/images/belly01.JPG";
    document.getElementById("caption").textContent = "What a sweet boy!";
};

//What to do if the player wins the game
function isWin () {
    if(wordGuesses.indexOf("_") === -1) {
        escapes++;
        successes();
        document.getElementById("letterList-text").textContent = "Wow! See if you can do that again."
        gameOver = true;
    }
};

//What to do when a key is pressed
document.onkeyup = function(event) {
    if(gameOver === false){
        var userCode = event.keyCode;
        userChoice = event.key.toLowerCase();
        if(userCode < 65 || userCode > 90) {
            alert("Please type letters only.");
        } else {
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
        incorrect.textContent = wrong.join(", ");
        rubs--;
        bellyRubs();
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
            fails();
            document.getElementById("letterList-text").textContent = "Try again...if you dare!"
            gameOver = true;
        }
        }
        isWin();
    } 
}  
};






