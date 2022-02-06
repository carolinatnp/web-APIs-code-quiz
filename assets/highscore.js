// Variables for high score
var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var back = document.querySelector("#back");

clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {

    for (var i = 0; i < allScores.length; i++) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("class", "scoreboard");
        createDiv.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createDiv);

    }
}

back.addEventListener("click", function () {
    window.location.replace("./index.html");
});