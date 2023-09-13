var currentQuestionIndex = 0;
var time = questions.length * 15;
var timeId;

var questionsEl = document.getElementById("questions");
var timerEL = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var getbackEl = document.getElementById("getback");
var titleEl = document.getElementById("title");

function startQuiz() {
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");
  questionsEl.removeAttribute("class");

  //Start timer
  
  timerId = setInterval(clockTick, 1000);
  timerEL.textContent = time;
  getQuestion();
}

function getQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  var titleEl = (textContent = currentQuestion.title);
}
var titleEl = document.getElementById('question-title');
titleEl.textContent = currentQuestionIndex.title;

//choicesEl.innerHTML = "";

for (var i = 0; i < questions[currentQuestionIndex].choices.length; i++) {
  var choice = questions[currentQuestionIndex].choices[i];
  var choiceNode = document.createElement("button");
  choiceNode.setAttribute("class", "choice");
  choiceNode.setAttribute("value", "choice");

  choiceNode.textContent = i + i + " ." + choice;
  //choicesEl.appendChild(choiceNode);
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
    if (time <= 0|| currentQuestionIndex === questions.length){
      quizEnd();
    } else {
      getQuestion();
    }
  }
}

function quizEnd (){
  clearInterval(timerId);

  var endScreenEl = document.getElementbyId ('end-screen');
  endScreenEl.removeAttribute ('class');
 
  var finalScoreEl = document.getElementById ('finalScore');
  finalScoreEl.textContent = time;

  questionEl.setAttibute ("class", "hide");
}

function clockTick (){
  time --;
}
  
timerEL.textContent =time;
  
if (time <= 0) {
  quizEnd ();
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

submitBtn.onclick = saveHighscore;
startBtn.onclick =startQuiz;
//choicesEl.onclick =questionClick;
initialsEl.onkeyup = checkforEnter;

  
  
  
