var readlineSync = require('readline-sync');
var score = 0;
//weclome
function welcome(){
var name= readlineSync.question("Hey! enter your name: ")
console.log("Welcome to the game: Are you a youtube lover?")
console.log("-----------------------")
console.log("Player Name: "+ name.toUpperCase())
console.log("------------------------------------")}

//questionbank
var questions=[
  { question: 'Youtube is owned by which company??' ,
    answer:'Google'},
  { question:'On how many subscribers does a youtuber gets silver button- 50 thousand, lakh or million??' ,
    answer:'million'},
  { question:'In which year did youtube started premium subscription??' ,
    answer: '2018'},
  { question:'Youtube began on Valentines Day- Yes or No?' ,
    answer:'yes'},
  { question: 'Which company funded youtube launch?',
    answer:'PayPal'}]

// string length
 var length = questions.length;

function play(Q,A){
  var playerAnswer= readlineSync.question(Q)
  if (playerAnswer.toUpperCase()=== A.toUpperCase()){
    console.log("Your answer is correct: "+playerAnswer )
    score = score+1
    console.log("Current Score: " + score)
  }else{ 
    console.log("You entered wrong answer")
    console.log("Current score: " +score)
  }
}
function game(question,answer){
for(var i=0; i<length; i++){
  var currentQuestion = questions[i]
  var currentAnswer = questions[i]
  play(currentQuestion.question, currentAnswer.answer)
}}

function yourScore(){
  console.log("Your total score is: " +score)
  if (score>=4){
    console.log("You know this topic well. You deserve to be on leaderboard. So, are you waiting for just message me quickly!!!")
    console.log("Leaderboard: ")
    console.log(" Name : Modi  Score: 3\n Name: Papu  Score: 4")
  }
}

welcome()
game()
yourScore()