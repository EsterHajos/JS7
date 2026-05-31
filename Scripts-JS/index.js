// DOM elements 

const wordEl = document.getElementById("word");
const textEl = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");



//Behöver jag dessa?
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");




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
  word.innerText = randomWord;
}


// Score 
function updateScore() {
  score++;
  scoreEl.innerText = score;
}

console.log(score); 

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






//Initializing word
let randomWord;

//Initializing score
let score = 0;

//Initializing time
let time = 10;



//I cant get it to work!! when I press enter nothing happens 