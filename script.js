const target = document.getElementById("target-circle");
const gameBoard = document.getElementById("game-board");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const startBtn = document.getElementById("start-btn");
const gameOver = document.getElementById("game-over");
const finalScore = document.getElementById("final-score");
const restartBtn = document.getElementById("restart-btn");

let score = 0;
let timeLeft = 30;
let gameTimer;

// Function to generate a random position for the target circle
function generateRandomPosition() {
	const x = Math.floor(Math.random() * (gameBoard.offsetWidth - target.offsetWidth));
	const y = Math.floor(Math.random() * (gameBoard.offsetHeight - target.offsetHeight));
	return {x: x, y: y};
}

// Function to start the game
function startGame() {
	score = 0;
	timeLeft = 30;
	scoreDisplay.textContent = score;
	timeDisplay.textContent = timeLeft;

	// Show the target circle
	target.style.display = "block";
	const position = generateRandomPosition();
	target.style.top = position.y + "px";
	target.style.left = position.x + "px";

	// Start the game timer
	gameTimer = setInterval(function() {
		timeLeft--;
		timeDisplay.textContent = timeLeft;

		if (timeLeft === 0) {
			endGame();
		}
	}, 1000);

	// Hide the start button
	startBtn.style.display = "none";
}

// Function to end the game
function endGame() {
	clearInterval(gameTimer);
	target.style.display = "none";
	gameOver.style.display = "block";
	finalScore.textContent = score;
}

// Function to restart the game
function restartGame() {
	gameOver.style.display = "none";
	startGame();
}

// Event listener for clicking on the target circle
target.addEventListener("click", function() {
	score++;
	scoreDisplay.textContent = score;

	const position = generateRandomPosition();
	target.style.top = position.y + "px";
	target.style.left = position.x + "px";
});

// Event listener for clicking on the start button
startBtn.addEventListener("click", startGame);

// Event listener for clicking on the restart button
restartBtn.addEventListener("click", restartGame);
