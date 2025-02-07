let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', ''];
const cells = document.querySelectorAll('.cell');
const popup = document.getElementById('popup');
const popupText = document.getElementById('popup-text');

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function handleCellClick(index) {
  if (gameState[index] !== '') return;
  gameState[index] = currentPlayer;
  cells[index].textContent = currentPlayer;

  if (checkWinner()) {
    popupText.textContent = `${currentPlayer} Wins!`;
    popup.style.display = 'block';
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner() {
  for (let combo of winningCombinations) {
    const [a, b, c] = combo;
    if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
      return true;
    }
  }
  return gameState.every(cell => cell !== ''); // Check for a draw
}

function resetGame() {
  gameState = ['', '', '', '', '', '', '', '', ''];
  cells.forEach(cell => cell.textContent = '');
  popup.style.display = 'none';
  currentPlayer = 'X';
}

cells.forEach((cell, index) => {
  cell.addEventListener('click', () => handleCellClick(index));
});
