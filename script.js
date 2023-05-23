var playerTotal = 0;
var computerTotal = 0;
var numbers4to21 = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
var random421 = numbers4to21[Math.floor(Math.random() *numbers4to21.length)];
var numbers2to11 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

var wantToPlay = confirm("Would you like to play Black Jack?");
if (wantToPlay) {
    randomplayer();
}
else alert("Suit yourself, but do come back later");

function randomplayer() {
playerTotal += random421;
console.log("Player's number is " + random421);
checkWin();
}

function checkWin() {
if (playerTotal === 21) {
    randomcomputer();
}
else if (playerTotal > 21) {
    playerLoses();
}
else again();
return;
}

function again() {
    var twistOrStick = confirm("Twist or stick? For twist, click OK; for stick, click Cancel.");
    if (twistOrStick) {
        nextPhase();
    }
    else randomcomputer();
}

function nextPhase() {
    let random2to11 = numbers2to11[Math.floor(Math.random() *numbers2to11.length)];
    playerTotal += random2to11;
    console.log("Player was dealt " + random2to11 + ". Player's total is now " + playerTotal + ".");
    checkWin();
}

function playerWins() {
    console.log("Game over. You win!");
}

function playerLoses() {
    console.log("Bust! You lose!");
}

function randomcomputer() {
    let random2to11 = numbers2to11[Math.floor(Math.random() *numbers2to11.length)];
    computerTotal += random2to11;
    console.log("Computer's number is " + random2to11 + ". Computer's new total is " + computerTotal + ".");
    if (computerTotal === 21) {
        computerWins();
    }
    else if (computerTotal < 17) {
        randomcomputer();
    }
    else if (computerTotal > 21) {
        console.log("Computer bust! You win!");
        return;
    }
    else 
    compareTotals();
}

function computerWins() {
    console.log("Computer scored 21 and banker always wins. You lose!");
}

function compareTotals() {
    if (playerTotal === computerTotal) {
        console.log("Computer has same score and banker always wins. You lose!")
    }
    else if (computerTotal > playerTotal) {
        console.log("Computer has higher total. Computer wins.");
    }
    else console.log("Player has higher total. Player wins!");
};