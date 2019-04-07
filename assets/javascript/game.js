//This JS File is linked to index.html for Psychic Game
var computerChoices = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
];

var wins = 0;
var losses = 0;
var chances = 10;
var lettersGuessed = [];


// Setup event function for key press
document.onkeyup = function (event) {
    var userGuess = event.key.toLocaleLowerCase();

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(userGuess);

    if (computerChoices.includes(userGuess)) {
        if (userGuess === computerGuess) {
            wins++;  // wins = wins + 1;
            lettersGuessed.push(userGuess);
            chances--;  // chances = changes - 1;
            console.log("Wins: " + wins);
        }

        else if (userGuess !== computerGuess) {  
            losses++;
            lettersGuessed.push(userGuess);
            chances--;
            console.log("Losses: " + losses);
        }

        if (wins === 10) {
            alert("You are a psychic!");
            location.reload();
        }

        else if (losses === 10) {
            alert("YOU ARE NOT A PSYCHIC!");
            location.reload();
        }

        var html =
            "<p>You chose: " + userGuess + "</p>" +
            "<p>I'm thinking of: " + computerGuess + "</p>" +
            "<p>Your Guesses So Far: " + lettersGuessed + "</p>" +
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses Left: " + chances + "</p>";

        document.querySelector("#game").innerHTML = html;

    } else {
        console.log("Invalid input!")
    }

};