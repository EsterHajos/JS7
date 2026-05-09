//Add a random word to DOM 
function addWordToDom() {
  let randomIndex = Math.floor(Math.random() * words.length);
  randomWord = words[randomIndex];
  word.innerHTML = randomWord;
}


// Score 
function updateScore() {
  score++;

  scoreEl.innerHTML = score;
}

console.log(score); 

// Time (do I have to have this?)
function updateTime() {
 time = time - 1;

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
`;
}


console.log(endgameEl);

addWordToDom();

let timeInterval = setInterval(updateTime, 1000);




text.addEventListener("input", function (e) {
  if (text.value === randomWord) {
    addWordToDom();
    updateScore();
    text.value = "";
    time = time + 3; //varför la jag 3 här? 
    timeEl.innerText = time;
  }
});



// Variables for the DOM elements
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");

// Array
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

//Initializing word
let randomWord;

//Initializing score
let score = 0;

//Initializing time
let time = 10;