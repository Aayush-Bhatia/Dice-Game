
var randomvar1 =  Math.floor(Math.random()*6)+1;
var randomimage = "dice" + randomvar1 + ".png";//dice1.png
var randomsrc = "images/" + randomimage ;//images/dice1.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomsrc );

var randomvar2 =  Math.floor(Math.random()*6)+1;
var randomimage = "dice" + randomvar2 + ".png";//dice1.png
var randomsrc = "images/" + randomimage ;//images/dice1.png
var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src", randomsrc );

if(randomvar1>randomvar2){
    document.querySelector("h1").innerHTML="winner 1"
} else{
    document.querySelector("h1").innerHTML="winner 2"
}
