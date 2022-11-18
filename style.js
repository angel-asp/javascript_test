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
var extratext = document.querySelector(".extratext");
var timer = document.querySelector(".timer");
var multipleChoiceButton = document.querySelector("#multipleChoiceButton");
var secondsLeft = 90;
var hideStartButtion = document.querySelector("#hideLi");
//var promtOne = document.querySelector("#promtOne");
//var promtTwo = document.querySelector("#promtTwo");
//var promtThree = document.querySelector("#promtThree");
//var promtFour = document.querySelector("#promtFour");
//future box where you type in your name
var nameBox = "1";


//vars used for question 1
 var questionOne = "What color is the sky?";

 var answerOneOne = document.createElement("li")
 answerOneOne.textContent = "blue";
 answerOneOne.className = "multipleChoiceButton";
 answerOneOne.addEventListener("click", setQuestionTwo);
 answerOneOne.setAttribute("id", "promtOne");

 var answerOneTwo =  document.createElement("li");
 answerOneTwo.textContent = "red";
 answerOneTwo.className = "multipleChoiceButton";
 answerOneTwo.addEventListener("click", wrongAnswer);
 answerOneTwo.setAttribute("id", "promtTwo");

 var answerOneThree =  document.createElement("li");
 answerOneThree.textContent = "green";
 answerOneThree.className = "multipleChoiceButton";
 answerOneThree.addEventListener("click", wrongAnswer);
 answerOneThree.setAttribute("id", "promtThree");

 var answerOneFour = document.createElement("li");
 answerOneFour.textContent = "purple";
 answerOneFour.className = "multipleChoiceButton";
 answerOneFour.addEventListener("click", wrongAnswer);
 answerOneFour.setAttribute("id", "promtFour");

//first question being set
function setAnswers () {
    questions.textContent = questionOne;
    extratext.textContent = "";
    multipleChoiceButton.appendChild(answerOneOne);
    multipleChoiceButton.appendChild(answerOneTwo);
    multipleChoiceButton.appendChild(answerOneThree);
    multipleChoiceButton.appendChild(answerOneFour);
} 

//function when you press wrong buttion
function wrongAnswer() {
    //set a fuction to subtract 15 sec from countdown
    setQuestionTwo();
}
//sets up second question and answers
function setQuestionTwo() {
    questions.textContent = "what animal can fly";
    answerOneOne.textContent = answerTwoOne;
    answerOneTwo.textContent = answerTwoTwo;
    answerOneThree.textContent = answerTwoThree;
    answerOneFour.textContent = answerTwoFour;
}

var questionTwo = "What animal can fly";

var answerTwoOne = "pig";
var answerTwoTwo = "cat";
var answerTwoThree = "bird";
var answerTwoFour = "pig";












//function that starts quiz
function quiz() {
   hideStartButtion.textContent = "";
    startButton.className = "orderedlistBox";
    startButton.setAttribute("id", "nothingButtion")
    setAnswers();
}

// function that loads at end of test
function loadEndPage() {
    questions.textContent = "All done!";
    extratext.textContent = "your final score is " + secondsLeft;
    startButton.textContent = "Enter Name " + nameBox;
}


// start quiz 


startButton.addEventListener("click", function() {
        
        var timeInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = " timer " + secondsLeft ;
        
    
        if(secondsLeft === 0) {
            clearInterval(timeInterval);
            console.log("yayyy");
            timer.textContent = "timer";
            loadEndPage()
        } 
    }, 1000);
    quiz()
})

