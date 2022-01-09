//selecting all selectors
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game");
const settingBtn = document.getElementById("settings-btn");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const difficultySelect = document.getElementById("difficulty");

//list of word for game
const words = [
  "sign",
  "balling",
  "crystalclear",
  "juice",
  "highclass",
  "airplane",
  "submarine",
  "jetfighter",
  "dependent",
  "nintynine",
  "fun",
  "ball",
  "north",
  "south",
  "east",
  "silver",
  "admit",
  "independent",
  "dark",
  "bad",
  "sad",
  "loveable",
  "night",
  "day",
  "evening",
  "jump",
  "run",
];

//initialize word
let randomWord;

//init score
let score = 0;

//init time
let time = 10;

//set difficulty to value in local storage
let difficulty =
  localStorage.getItem("difficulty") !== null
    ? localStorage.getItem("difficulty")
    : "medium";

//set difficulty select value
difficultySelect.value =
  localStorage.getItem("difficulty") !== null
    ? localStorage.getItem("difficulty")
    : "medium";

//focus on text on start
text.focus();

//timer to count down
const timeInterval = setInterval(updateTime, 1000);
//generate random word from array
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

//add word to DOM
function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

//update score
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}
//update timer
function updateTime() {
  time--;
  timeEl.innerHTML = time + "s";
  //stop timer from going into negative
  if (time === 0) {
    clearInterval(timeInterval);
    //end the game
    gameOver();
  }
}

//game over show end screen
function gameOver() {
  endgameEl.innerHTML = `<h1>Time Ran Out</h1> <p>Your Final Score is ${score}</p> <button onclick="location.reload()">Retry</button>`;

  endgameEl.style.display = "flex";
}
addWordToDOM();

//event listeners
text.addEventListener("input", function (e) {
  const insertedText = e.target.value;

  //check to see if the inserted text is equal to the random word

  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();

    //clear
    e.target.value = "";

    //setting difficulty
    if (difficulty === "hard") {
      time += 2;
    } else if (difficulty === "medium") {
      time += 4;
    } else {
      time += 6;
    }

    updateTime();
  }
});

//setting button click event listeners
settingBtn.addEventListener("click", function () {
  settings.classList.toggle("hide");
});

//settings select
settingsForm.addEventListener("change", function (e) {
  difficulty = e.target.value;
  localStorage.setItem("difficulty", difficulty);
});
