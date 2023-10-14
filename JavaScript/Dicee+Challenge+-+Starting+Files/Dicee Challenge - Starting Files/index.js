var randomnum1=Math.floor(Math.random()*6)+1;
var randomnum2=Math.floor(Math.random()*6)+1;

if(randomnum1>randomnum2){
    document.querySelector("h1").innerHTML="PLAYER 1 WIN"
}

else if(randomnum1<randomnum2){
    document.querySelector("h1").innerHTML="PLAYER 2 WIN"
}

else {
    document.querySelector("h1").innerHTML="DRAW"
}

document.querySelector(".img1").src=("./images/dice"+randomnum1+".png");
document.querySelector(".img2").src=("./images/dice"+randomnum2+".png");


