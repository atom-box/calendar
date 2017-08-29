/*  Thirty minute rote recall of yesterday's syntax.
By: Evan Genest August 29, 2017 twitter@mistergenest
*/

var sleater = document.getElementById("blue");
var kinney = document.getElementById("black");
var marquee = document.querySelector("textArea");
kinney.value = " row the boat ashore ";
console.log("Bro.");
console.log( kinney.value );

function heardIt (e){
	var time = new Date();
	marquee.value += ("The time is now: " + time );
}

sleater.addEventListener("mouseover", heardIt);

kinney.addEventListener("mouseover", heardIt);
