for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        makeAnimation(buttonInnerHTML);
    });
}



document.addEventListener("keypress", function(event) {
  
    makeSound(event.key);
    makeAnimation(event.key);
    
  
  });
  

function makeSound(key) {
    
    switch (key) {
        case "w":

            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":

            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":

            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":

            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":

            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "k":

            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;


        case "m":

            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;


        default: console.log(key);

    }
}

function makeAnimation(currentKey){
   var animation = document.querySelector("."+currentKey);
animation.classList.add("pressed");
setTimeout((timeout) => {
    animation.classList.remove("pressed");
}, 200);
}