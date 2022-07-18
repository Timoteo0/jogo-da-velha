document.addEventListener("DOMContentLoaded", () => {
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
});

function handleClick(event) {
  let square = event.target;

  let position = square.id;

  if (handleMove(position)) {
    setTimeout(() => {
      let player = "";

      if (playerTime == 0) {
        player = "X";
      } else {
        player = "O";
      }

      modalWinner(player);
      scoreboard(playerTime);
    }, 10);
  }
  updateSquares(position);
}

function updateSquares() {
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    let position = square.id;

    let symbol = board[position];

    if (symbol != "") {
      square.innerHTML = `<div class=${symbol}></div>`;
    }
  });
}

function modalWinner(player) {
  const winner = document.querySelector(".winner");
  winner.classList.add("open_winner");

  winner.innerHTML = `
  <span>O jogador <span class="winning_player">${player}</span> ganhou!</span> 
  <span class="winner_button" onClick='resetGame()'>Recomeçar</span>`;
}

function resetGame() {
  const winner = document.querySelector(".winner");
  winner.classList.remove("open_winner");

  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.innerHTML = "";
    playerTime = 0;
    symbols = ["o", "x"];
    board = ["", "", "", "", "", "", "", "", ""];
    gameOver = false;
  });
}

function isDraw() {
  const winner = document.querySelector(".winner");
  winner.classList.add("open_winner");

  winner.innerHTML = `
  <span>Empate!</span> 
  <span class="winner_button" onClick='resetGame()'>Recomeçar</span>`;
}

function scoreboard(playerTime) {
  const scoreX = document.querySelector(".scoreX");
  const scoreO = document.querySelector(".scoreO");

  if (playerTime == 0) {
    scoreX.textContent = parseInt(scoreX.textContent) + 1;
  } else {
    scoreO.textContent = parseInt(scoreO.textContent) + 1;
  }
}
