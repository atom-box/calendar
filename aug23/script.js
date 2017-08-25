/*
Practicing the five weeks of 
Coursera on my own.
August 2017
by Evan Genest twitter@mistergenest
Future Ideas brainstorm at the bottom
*/

console.log("Hey.");
// Square 1
document.getElementById("one").innerHTML = "<h2>BO.</h2>";

// Square 2
var button1 = document.cat.romeo;
var timesClicked = 0;
var requestMiles = document.cat.klondike;

function gotClicked(){
  timesClicked += 1;
  var catSays = "Meow";
  for ( var i =0; i <= timesClicked; i++){
    catSays += "...meow";
  }
  catSays += "!";
  console.log(catSays);
  // TODO: change to html 
}
button1.addEventListener("click", gotClicked);

var img1 = document.querySelector("img.canPurr");
img1.addEventListener("mouseover", console.log('Purr...'));
img1.textContent = 'zzz';

// Square 3
var t = new Date();
console.log(t);
var message = "<p>The time in Greenwich is: " + t.toUTCString() + "</p>"  ; 
message += "<p>The time around here is: " + t.toLocaleString() + "</p>"  ; 
message += "<p>Locale Date String: " + t.toLocaleDateString() + "</p>"  ; 
message += "<p>Date String: " + t.toDateString() + "</p>"  ; 

document.getElementById("three").innerHTML = message ;

// Square 4
document.querySelector('div:nth-child(4)').innerHTML = '<h1>U2</h1>';

console.log('Ken');



// Square Eight
document.getElementById("eight").innerText = "judge";
document.querySelector("div:nth-child(8)").textContent ='clown';
// Square Nine
function didd(){
  var x = 6;
  console.log(x);
}
document.getElementById("nutsWhen").addEventListener("click", didd );
console.log('Nordine');
// Yay!  The clicker works!  Going to bed.
