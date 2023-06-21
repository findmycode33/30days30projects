const board = document.getElementById("board")
const cells = Array.from(document.getElementsByClassName("cell"))
const resetButton = document.querySelector("button")
const finalResult = document.getElementById("result")
let currentPlayer = "X"
let gameActive = true

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

function makeMove(cellIndex) {
  if (!gameActive || cells[cellIndex].innerText !== "") {
    return
  }

  cells[cellIndex].innerText = currentPlayer
  cells[cellIndex].classList.add(currentPlayer)

  if (checkWin(currentPlayer)) {
    endGame(false)
    return
  }

  if (checkDraw()) {
    endGame(true)
    return
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X"
}

function checkWin(player) {
  return winningCombinations.some((combination) => {
    return combination.every((index) => {
      return cells[index].innerText === player
    })
  })
}

function checkDraw() {
  return cells.every((cell) => {
    return cell.innerText !== ""
  })
}

function endGame(draw) {
  gameActive = false
  const message = draw
    ? "It's a draw! 😁"
    : `Player ${currentPlayer} wins! 🥳🎉`
  finalResult.innerText = message
}

function resetGame() {
  currentPlayer = "X"
  gameActive = true
  finalResult.innerText = ""
  cells.forEach((cell) => {
    cell.innerText = ""
    cell.classList.remove("X")
    cell.classList.remove("O")
  })
}
