// global constants
let clueHoldTime = null; //how long to hold each clue's light/sound
let cluePauseTime = null; //how long to pause in between clues
let nextClueWaitTime = null; //how long to wait before starting playback of the clue sequence

//global variables
var patternEasy = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var patternMedium = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
var patternHard = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
var patternInsane = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
var pattern = null;
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; 
var guessCounter = 0;
var lives = 3;
var timeLeft = 30;
var timeoutIds = []
var difficultyLevel = 'easy';
//initialize game variables
difficultyLevel = localStorage.currLevel
if (difficultyLevel === null) {
    difficultyLevel = 'easy'
}
document.getElementById('levelInHtml').innerHTML = difficultyLevel;

if (difficultyLevel === 'easy') {
  pattern = patternEasy
  clueHoldTime = 1000
  cluePauseTime = 300
  nextClueWaitTime = 1000
} else if (difficultyLevel === 'medium') {
  pattern = patternMedium
  clueHoldTime = 500
  cluePauseTime = 200
  nextClueWaitTime = 500
} else if (difficultyLevel === 'hard') {
  pattern = patternHard
  clueHoldTime = 250
  cluePauseTime = 100
  nextClueWaitTime = 250
} else {
  pattern = patternInsane
  clueHoldTime = 100
  cluePauseTime = 25
  nextClueWaitTime = 100
}

function startGame(){
    
    progress = 0;
    updateProgress(0);
    gamePlaying = true;
  
  document.getElementById("startButton").classList.add("hidden");
  document.getElementById("stopButton").classList.remove("hidden");
  playClueSequence();
}

function stopGame(){
    //initialize game variables
    gamePlaying = false;
    lives = 3;
    updateProgress(0);
  document.getElementById("stopButton").classList.add("hidden");
  document.getElementById("startButton").classList.remove("hidden");
}

function loseGame(){
  stopGame();
  window.location.href='/lose-file.html';
}

function winGame() {
  stopGame();
  window.location.href='/win-file.html';
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  if(pattern[guessCounter] == btn){
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        winGame();
      }else{
        progress++;
        updateProgress(progress);
        playClueSequence();
      }
    }else{
      guessCounter++;
    }
  }else{
    lives -= 1;
    updateLives(lives);
    if (lives === 0) {
      loseGame();
    }
  }
}


// Sound Synthesis Functions
const freqMap = {
  1: 130,
  2: 146,
  3: 164,
  4: 174,
  5: 196,
  6: 220,
  7: 246,
  8: 261,
  9: 293,
}

function playTone(btn,len){
  context.resume()
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}

function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  context.resume()
  clearTimeouts();
  timeLeft = 30;
  document.getElementById('timer').innerHTML = timeLeft;
  guessCounter = 0
  startTimer();
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function updateProgress(progress) {
  document.getElementById("progressScore").innerHTML = progress;
}


function updateLives(lives) {
  document.getElementById("pdLives").innerHTML = lives;
}

function startTimer() {
  var elem = document.getElementById('timer');
    
    var timerId = setInterval(countdown, 1000);
    timeoutIds.push(timerId)
    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);
        // doSomething();
        loseGame();
        
      } else {
        elem.innerHTML = timeLeft;
        timeLeft--;
      }
    }
  
  countdown();
}

function clearTimeouts(){
  while(timeoutIds.length){
    clearTimeout(timeoutIds.pop());
  }
}