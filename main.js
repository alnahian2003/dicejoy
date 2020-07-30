//16-MAY-2020
//start code

//for user
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //generate a random number between 1-6

var randomDiceImage = "dice" + randomNumber1 + ".svg" //dice1.svg to dice6.svg

var randomImageSource = "images/" + randomDiceImage; // source to images/dice1.svg to dice6.svg

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImageSource);

//for computer

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".svg";

var img2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//conditions

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "You Win!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "You Lose :(";
} else {
  document.querySelector("h1").innerHTML = "Draw! Try Again";
}

//End Code
//Special Thanks to my LOVE, Angela Yu