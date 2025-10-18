const boxes = Array.from({ length: 9 }, (_, i) => document.getElementById(`box${i + 1}`));
const turnDisplay = document.getElementById("turn");
let currentPlayer = "X";
let tieTimer = null;

const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]             // diagonals
];

function checkWin() {
    for (const [a, b, c] of winPatterns) {
        if (boxes[a].textContent && boxes[a].textContent === boxes[b].textContent && boxes[a].textContent === boxes[c].textContent) {
            // Clear the tie timer since we have a winner
            if (tieTimer) clearTimeout(tieTimer);
            alert(`${boxes[a].textContent} wins!`);
            location.reload();
            return true;
        }
    }
    return false;
}

function checkTie() {
    if (boxes.every(box => box.textContent)) {
        alert("Tie!");
        location.reload();
    }
}

function updateTurn() {
    turnDisplay.textContent = `${currentPlayer}'s turn`;
}


function makeMove(index) {
    if (boxes[index].textContent) return;

    boxes[index].textContent = currentPlayer;

    // Set color based on the letter: X = red, O = blue
    boxes[index].style.color = currentPlayer === "X" ? "red" : "blue";

    if (!checkWin()) {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        updateTurn();

        // Clear any existing timer and set a new one
        if (tieTimer) clearTimeout(tieTimer);
        tieTimer = setTimeout(checkTie, 1000);
    }
}

// Create move functions
for (let i = 1; i <= 9; i++) {
    window[`addMove${i}`] = () => makeMove(i - 1);
}

updateTurn();


/* const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const box7 = document.getElementById("box7");
const box8 = document.getElementById("box8");
const box9 = document.getElementById("box9");

let turn = 0;

function checkWin() {
    // Check X wins
    if (box1.textContent === "X" && box2.textContent === "X" && box3.textContent === "X") {
        alert("X wins!");
        location.reload();
        return true;
    }
    else if (box1.textContent === "X" && box4.textContent === "X" && box7.textContent === "X") {
        alert("X wins!");
        location.reload();
        return true;
    }
    else if (box1.textContent === "X" && box5.textContent === "X" && box9.textContent === "X") {
        alert("X wins!");
        location.reload();
        return true;
    }
    else if (box2.textContent === "X" && box5.textContent === "X" && box8.textContent === "X") {
        alert("X wins!");
        location.reload();
        return true;
    }
    else if (box3.textContent === "X" && box6.textContent === "X" && box9.textContent === "X") {
        alert("X wins!");
        location.reload();
        return true;
    }
    else if (box3.textContent === "X" && box5.textContent === "X" && box7.textContent === "X") {
        alert("X wins!");
        location.reload();
        return true;
    }
    else if (box4.textContent === "X" && box5.textContent === "X" && box6.textContent === "X") {
        alert("X wins!");
        location.reload();
        return true;
    }
    else if (box7.textContent === "X" && box8.textContent === "X" && box9.textContent === "X") {
        alert("X wins!");
        location.reload();
        return true;
    }
    // Check O wins
    else if (box1.textContent === "O" && box2.textContent === "O" && box3.textContent === "O") {
        alert("O wins!");
        location.reload();
        return true;
    }
    else if (box1.textContent === "O" && box4.textContent === "O" && box7.textContent === "O") {
        alert("O wins!");
        location.reload();
        return true;
    }
    else if (box1.textContent === "O" && box5.textContent === "O" && box9.textContent === "O") {
        alert("O wins!");
        location.reload();
        return true;
    }
    else if (box2.textContent === "O" && box5.textContent === "O" && box8.textContent === "O") {
        alert("O wins!");
        location.reload();
        return true;
    }
    else if (box3.textContent === "O" && box6.textContent === "O" && box9.textContent === "O") {
        alert("O wins!");
        location.reload();
        return true;
    }
    else if (box3.textContent === "O" && box5.textContent === "O" && box7.textContent === "O") {
        alert("O wins!");
        location.reload();
        return true;
    }
    else if (box4.textContent === "O" && box5.textContent === "O" && box6.textContent === "O") {
        alert("O wins!");
        location.reload();
        return true;
    }
    else if (box7.textContent === "O" && box8.textContent === "O" && box9.textContent === "O") {
        alert("O wins!");
        location.reload();
        return true;
    }
    return false;
}


function checkTie() {
    if (box1.textContent !== "" && box2.textContent !== "" && box3.textContent !== "" && box4.textContent !== "" && box5.textContent !== "" && box6.textContent !== "" && box7.textContent !== "" && box8.textContent !== "" && box9.textContent !== "") {
        alert("Tie!");
        location.reload();
    }
    else {
        return;
    }
}

function checkTurn() {
    if (turn === 0) {
        document.getElementById("turn").textContent = "X's turn";
    }
    else if (turn === 1) {
        document.getElementById("turn").textContent = "O's turn";
    }
}


function addMove1() {
    if (box1.textContent !== "") {
        return; // Exit if box is already filled
    }

    if (turn === 0) {
        box1.textContent = "X";
        turn = 1;
    }
    else if (turn === 1) {
        box1.textContent = "O";
        turn = 0;
    }

    if (!checkWin()) {
        checkTurn()
        setTimeout(checkTie()), 2000
    }
}

function addMove2() {
    if (box2.textContent !== "") {
        return; // Exit if box is already filled
    }

    if (turn === 0) {
        box2.textContent = "X";
        turn = 1;
    }
    else if (turn === 1) {
        box2.textContent = "O";
        turn = 0;
    }

    if (!checkWin()) {
        checkTurn()
        setTimeout(checkTie()), 2000
    }
}

function addMove3() {
    if (box3.textContent !== "") {
        return; // Exit if box is already filled
    }

    if (turn === 0) {
        box3.textContent = "X";
        turn = 1;
    }
    else if (turn === 1) {
        box3.textContent = "O";
        turn = 0;
    }

    if (!checkWin()) {
        checkTurn()
        setTimeout(checkTie()), 2000
    }
}

function addMove4() {
    if (box4.textContent !== "") {
        return; // Exit if box is already filled
    }

    if (turn === 0) {
        box4.textContent = "X";
        turn = 1;
    }
    else if (turn === 1) {
        box4.textContent = "O";
        turn = 0;
    }

    if (!checkWin()) {
        checkTurn()
        setTimeout(checkTie()), 2000
    }
}

function addMove5() {
    if (box5.textContent !== "") {
        return; // Exit if box is already filled
    }

    if (turn === 0) {
        box5.textContent = "X";
        turn = 1;
    }
    else if (turn === 1) {
        box5.textContent = "O";
        turn = 0;
    }

    if (!checkWin()) {
        checkTurn()
        setTimeout(checkTie()), 2000
    }
}

function addMove6() {
    if (box6.textContent !== "") {
        return; // Exit if box is already filled
    }

    if (turn === 0) {
        box6.textContent = "X";
        turn = 1;
    }
    else if (turn === 1) {
        box6.textContent = "O";
        turn = 0;
    }

    if (!checkWin()) {
        checkTurn()
        setTimeout(checkTie()), 2000
    }
}

function addMove7() {
    if (box7.textContent !== "") {
        return; // Exit if box is already filled
    }

    if (turn === 0) {
        box7.textContent = "X";
        turn = 1;
    }
    else if (turn === 1) {
        box7.textContent = "O";
        turn = 0;
    }

    if (!checkWin()) {
        checkTurn()
        setTimeout(checkTie()), 2000
    }
}

function addMove8() {
    if (box8.textContent !== "") {
        return; // Exit if box is already filled
    }

    if (turn === 0) {
        box8.textContent = "X";
        turn = 1;
    }
    else if (turn === 1) {
        box8.textContent = "O";
        turn = 0;
    }

    if (!checkWin()) {
        checkTurn()
        setTimeout(checkTie()), 2000
    }
}

function addMove9() {
    if (box9.textContent !== "") {
        return; // Exit if box is already filled
    }

    if (turn === 0) {
        box9.textContent = "X";
        turn = 1;
    }
    else if (turn === 1) {
        box9.textContent = "O";
        turn = 0;
    }

    if (!checkWin()) {
        checkTurn()
        setTimeout(checkTie()), 2000
    }

} */

