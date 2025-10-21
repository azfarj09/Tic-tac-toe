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


