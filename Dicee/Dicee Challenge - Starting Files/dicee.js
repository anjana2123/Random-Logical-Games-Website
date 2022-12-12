var randomNumber1= Math.floor(Math.random()*6) +1;
var randomNumberDice1="dice"+randomNumber1+".png";
var randomImageSource1="images/"+randomNumberDice1;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute('src',randomImageSource1);

var randomNumber2= Math.floor(Math.random()*6)+1;
var randomDiceNumber2="dice"+randomNumber2+".png";
var randomImageSource2="images/"+randomDiceNumber2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

document.querySelector("h1").innerHTML="Refresh Me";
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML= "🚩1 WINS!";
}
else if (randomNumber2>randomNumber1) {
  document.querySelector("h1").innerHTML= "🚩2 WINS!";
}
else{
  document.querySelector("h1").innerHTML= "Draw";
}
