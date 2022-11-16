/*
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
*/

var startButton = document.querySelector("#startButton");
var questions = document.querySelector(".questions");
var answers = document.querySelector(".extratext");
var timer = document.querySelector(".timer");

var secondsLeft = 90;




startButton.addEventListener("click", function() {
    
        var timeInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = " timer " + secondsLeft ;
    
        if(secondsLeft === 0) {
            clearInterval()
            console.log("yayyy");
        }it 
    }, 1000);
    questions.textContent = "Question number jaun";
})

