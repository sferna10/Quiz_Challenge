var currentQuestionIndex = 0;
var time = question.length * 15;
var timeId;

var questionEl = document.getElementsById("question");
var timerEL = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var busmitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var geedbackEl = document.getElementById("getback");

function startQuiz() {
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");
  questionEl.removeAttibute("class");

  //Start timer
  
  timerId = setInterval(clockTick, 1000);
  timerEl.textContent = time;
  getQuestion();
}

function getQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  var title1 = (textContent = currentQuestion.title);
}
var titleEl = document.getElementbyId('question-title');
titleEl.textContent = currentQuestionIndex.title;

choiceEl.innerHTML = " ";

for (var i = 0; 1 < currentQuestion.choices.length; i++) {
  var choice = currentQuestion.choices[i];
  var choiceNode = document.createElement("button");
  choiceNode.setAttribute("class", "choice");
  choiceNode.setAttribute("value", "choice");

  choiceNode.textContent = i + i + " ." + choice;
  choiceEl.appendChild(choiceNode);
}

function questionClick(event) {
  var buttonEl = event.target;
}

function questionClick(event) {
  var buttonEl = event.target;

  if (!buttonEl.matches(" .choice")) {
    return;
  }

  if (buttonEl.value !== question[currentQuestionIndex].answer) {
    time -= 15;

    if (time < 0) {
      time = 0;
    }
    timerEl.textContent = time;
    feedbackEl.textContent = "wrong!";
  } else {
    feedbackEl.textContext = "Correct!";
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function () {
      feedbackEl.setAttribute("class", "feedback hide");
    }, 1000);
    curentQuestionIndex++;
  if (time <= 0|| currentQuestionIndex === questions.length)
  quizEnd();
  } else {
    getQuestion();
  } 
}
function quizEnd (){
  clearInterval(timerId);

  var endScreenEl = document.getElementbyId ('end-screen');
  endScreenEl.removeAttribute ('class');
 
  var finalScoreEl = document.getElementById ('finalScore');
  finalScoreEl.textContent = time;

questionEl.setAttibute ("class", "hide");

function clockTick (){
  time --;
}timerEL.textContent =time;
if (time <= 0) {
  quizEnd ();
}
}

function saveHighscore (){
  var initials = initialsEl.value.trim();
  if (initials !== "") {
    var highscores = 
    JSON.parse(window.localStorage.getItem('highscores')) || [];
    

    var newScore = {
      score: time, initials: initials,
    };
    highscores.push(newScore);
    window.localStorage.setItem('highScores', JSON.stringify(highscores))
  
    window.location.href = "highcores.html";
    }
}
function checkforEnter(event) {
  if (event.key ==="Enter"){
    saveHighscore();
  }
}
submitBtn.oneclick = saveHighscore;
startBtn.onclick =startQuiz;
choicesEl.onclick =questionClick;
initialsEl.onkeyup = checkforEnter;

  
  
  
