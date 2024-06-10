function getRandomDiceImage() {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  return "images/dice" + randomNumber + ".png";
}
var leftDiceImage = getRandomDiceImage();
var leftImageElement = document.querySelector(".img1");
leftImageElement.setAttribute("src", leftDiceImage);

var RightImage= getRandomDiceImage();
var rightimageelement = document.querySelector(".img2");
rightimageelement.setAttribute("src",RightImage);

if(RightImage>leftDiceImage){
	document.querySelector("h1").innerHTML ="Player 2 Wins! 🚩<br> {REFRESH TO PLAY AGAIN} " 

}
else if(RightImage==leftDiceImage){
	document.querySelector("h1").innerHTML="Tie🙁 Try Again! <br>{REFRESH TO PLAY AGAIN}"
}
else {
	document.querySelector("h1").innerHTML ="Player 1 Wins! 🚩<br> {REFRESH TO PLAY AGAIN}"
}
