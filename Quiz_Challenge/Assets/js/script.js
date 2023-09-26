var currentQuestionIndex = 0;
import questions from "./questions.js";

var time = questions.length * 15;
var timeId;

var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var getbackEl = document.getElementById("getback");
var titleEl = document.getElementById("title");
var feedbackEl = document.getElementById("feedback");

//function init() {
//getWins();
//Getlosses();
//}

function startQuiz() {
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");
  questionsEl.removeAttribute("class");
  startBtn.disable = true;
}
// startTimer();

timeId = setInterval(clockTick, 1000);
//timerEl.textContent = time;
getQuestion();

function getQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  // var titleEl = (textContent = currentQuestion.title);

  var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.title;

  choicesEl.innerHTML = "";

  for (var i = 0; i < questions[currentQuestionIndex].choices.length; i++) {
    var choices = questions[currentQuestionIndex].choices[i];
    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choices);
    choiceNode.addEventListener("click", questionClick);
    choiceNode.textContent = i + 1 + " ." + choices;
    choicesEl.appendChild(choiceNode);
  }
}
function questionClick(event) {
  var buttonEl = event.target;

  if (!buttonEl.matches(" .choice")) {
    return;
  }

  if (buttonEl.value !== questions[currentQuestionIndex].answer) {
    console.log(buttonEl.value);
    time -= 15;

    if (time < 0) {
      time = 0;
    }

    feedbackEl.textContent = "wrong!";
  } else {
    feedbackEl.textContent = "Correct!";
  }
  timerEl.textContent = time;
  feedbackEl.setAttribute("class", "feedback");
  setTimeout(function () {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 1000);
  currentQuestionIndex++;
  if (time <= 0 || currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
}

function quizEnd() {
  clearInterval(timeId);

  var endScreenEl = document.getElementById("end-screen");
  endScreenEl.removeAttribute("class");

  var finalScoreEl = document.getElementById("finalScore");
  finalScoreEl.textContent = time;

  questionsEl.setAttibute("class", "hide");
}

function clockTick() {
  time--;
  timerEl.textContent = time;

  if (time <= 0) {
    quizEnd();
  }
}

function saveHighscore() {
  var initials = initialsEl.value.trim();
  if (initials !== "") {
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];

    var newScore = {
      score: time,
      initials: initials,
    };

    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));

    window.location.href = "highscores.html";
  }
}
function checkforEnter(event) {
  if (event.key === "Enter") {
    saveHighscore();
  }
}

submitBtn.onclick = saveHighscore;
startBtn.onclick = startQuiz;
initialsEl.onkeyup = checkforEnter;
