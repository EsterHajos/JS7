console.log("JS IS RUNNING");




// DOM elements 

const wordEl = document.getElementById("word");
const textEl = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");



// Word arrays
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];

// Variables 

let randomWord;
let score = 0;
let time = 10;


//Add a random word to DOM 
function addWordToDom() {
  let randomIndex = Math.floor(Math.random() * words.length);
  randomWord = words[randomIndex];
  wordEl.innerText = randomWord;
}


// Score 
function updateScore() {
  score++;
  scoreEl.innerText = score;
}


// Time 
function updateTime() {
 time--;

  timeEl.innerText = time;

  if (time === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
} 

console.log(time);  

// Game over
function gameOver() {
  endgameEl.style.display = "flex";
  endgameEl.innerHTML = `
  <h1>Game Over!</h1>
  <p>Score: ${score}</p>
  <button onclick="location.reload()">Play Again</button>
`;
}


// Start game

addWordToDom();

const timeInterval = setInterval(updateTime, 1000);


// Event listener 

textEl.addEventListener("input", () => {
  const insertedText = textEl.value.trim();
  if (insertedText === randomWord) { 
    updateScore ();
    addWordToDom();
    time += 5;
    timeEl.innerText = time;
    textEl.value = "";
  }
});




