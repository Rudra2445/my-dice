// Generate a random number between 1 and 6 (inclusive)
var randomNum;
randomNum=Math.floor(Math.random() * 6) + 1;

var randomIndex = "dice" + randomNum + ".png";

var randomSource = "images/" + randomIndex;

var image1 =document.querySelectorAll("img")[0];
image1.setAttribute("src",randomSource);

var randomnumber2=Math.floor(Math.random() * 6) + 1;

var randomindex2="dice" + randomnumber2 + ".png";

var randomsource2="images/" +randomindex2;

var image2 =document.querySelectorAll("img")[1];
image2.setAttribute("src",randomsource2);

if(randomNum>randomnumber2)
{
    document.querySelector("h1").innerHTML="🚩Player 1 wins!";
}
else if(randomnumber2>randomNum)
{
    document.querySelector("h1").innerHTML="🚩Player 2 wins!";
}
else if(randomNum===randomnumber2)
{
    document.querySelector("h1").innerHTML="It's a tie";
}
