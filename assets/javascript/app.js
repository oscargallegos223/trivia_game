    var timeLeft = 30;
    var elem = document.getElementById('some_div');
    
    var timerId = setInterval(countdown, 1000);
    
    function countdown() {
      if (timeLeft == 0) {
        clearTimeout(timerId);
        alert("time is up");
      } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
      }
    }
 //^^timer^^   
  

function submitAnswers(){
  var total = 4;
  var score = 0;

  //get user input

  var q1 = document.forms["quizForm"] ["q1"].value;
  var q2 = document.forms["quizForm"] ["q2"].value;
  var q3 = document.forms["quizForm"] ["q3"].value;
  var q4 = document.forms["quizForm"] ["q4"].value;
  

  //Validation
  
  for(i = 1; i <= total;i++){
    if(eval ("q"+i) == null || eval("q"+i) == ""){
      alert ("You Missed question" + i);
      return false;

  }
  }
//answers

var answers = ["c","a","d","a"];

//check answers
if(q1 == answers[0]) {
  score++;
}
if(q2 == answers[1]) {
  score++;
}
if(q3 == answers[2]) {
  score++;
}
if(q4 == answers[3]) {
  score++;
}

alert("You scored" +score+ 'out of' +total); 




}