var saveHighscore = JSON.parse(localStorage.getItem ("highscores"))
for (let i = 0; i < saveHighscore.length; i++) {
    var newLi = document.createElement("li");
    newLi.textContent = saveHighscore[i].initials + " - " + saveHighscore[i].score;
    
    document.querySelector("#highscores").append(newLi)
}
