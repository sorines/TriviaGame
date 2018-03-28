// player will have countdown of 20 seconds to answer four questions
//id=answer, the answers appear after the 20 seconds are up
//you can only pick one answer for ever question
//the page will reveal the number of answers that are correct or wrong

//this sets answers


//countdown

var intervalId;
var timer=10;
function timers(){
clearInterval(intervalId);
intervalId = setInterval(decrement, 1000);
};

function decrement(){
timer--;
$("#timer").text("Time Remaining: " + timer);

if (timer===0){
    stop();
    alert("Times Up!!");
}
};

function stop(){
    clearInterval(intervalId);

};

console.log(timers);
console.log(timer);

timers();

//trying to get this to answer at random trivia. It comes out at
//correct answers. win, lose. 
clearInterval(intervalId);

if  ($("input").val(["answer"])){
    $("#result").text("Win,Win..Win");
    clearInterval(intervalId);
}else{
($("input").val(["wrong"]));
$("#result").text("False, Brown Bear.");

}

console.log("input");
console.log("#result");




