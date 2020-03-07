// Variables
var huhu = ["../Images/belly01", "../Images/warn02", "../Images/bite02"]; //Huhu's images
var escapes = 0; //number of wins
var bites = 0;  //number of loses
var rubs = 5;  //number of belly rubs left
var status = ["What a sweet boy!", "I don't like the look on his face!", "Woohoo!  Free acupuncture!"] ;  //the image captions
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var words = ["fuzz", "bengal", "sokoke", "fiesty", "playful", "purrfect", "buddy", "fur ball"];
var blanks = [];
var choices = []; //letters the user has guessed

//generate a random word
function randWord() {
    var word = words[Math.floor(Math.random() * words.length)];
    for (var i =0; i < word.length; i++) {
        blanks[i] = "_";
    }
    document.getElementById("blanks").innerHTML = word;
}

//Display word in blanks



