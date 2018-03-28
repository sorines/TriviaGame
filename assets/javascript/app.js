// player will have countdown of 20 seconds to answer four questions
//id=answer, the answers appear after the 20 seconds are up
//you can only pick one answer for ever question
//the page will reveal the number of answers that are correct or wrong
 
var answers = {
        movie:"Varsity Blues", 
        Diwali:"Hindu Hallowing",
        Cat:"Sprinkles",
        Actress:"Hillary Swank"
    
};

$( "input[type=radio][name=radio]:checked" ).val();

var correct = val();


console.log(answers.movie);
console.log("#result");






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

console.log(timer);
console.log("#timer");

timers();