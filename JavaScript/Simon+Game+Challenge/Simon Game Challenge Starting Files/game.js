var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level=0;
var started = false;

$(document).keypress(function() {
    
    if (!started) {
      $("#level-title").text("Level " + level);
      newSequence();
      started = true;
    }
  });

$(".btn").click(function() {
    userChosenColour = $(this).attr("id");  
    userClickedPattern.push(userChosenColour);  
    playsound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer((userClickedPattern.length)-1);
});

function checkAnswer(currentLevel){
if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
    console.log("Sucess");
    if(userClickedPattern.length===gamePattern.length){
        setTimeout(function () {
            newSequence();
          }, 1000);
    
    }
}
else{  
    console.log("Wrong")

    playsound("wrong")
    $("body").addClass('game-over');
    $("h1").text("Game Over, Press Any Key to Restart");
      startOver();
    setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

    startOver(); 
    
}
};

function newSequence() {
    userClickedPattern = [];
    level++;
    $("h1").text("Level "+level); 

    var randomNum = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColors[randomNum];

    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

   
   playsound(randomChosenColour);
 
};

function playsound(song){
    var audio = new Audio("sounds/" + song + ".mp3");
    audio.play();
}


function animatePress(currentColour){
    $( "." + currentColour).addClass('pressed');
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
      }, 100);
    
    };

function startOver(){
level=0;
gamePattern=[];
started = false;
}

