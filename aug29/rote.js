/*  Thirty minute rote recall of yesterday's syntax.
By: Evan Genest August 29, 2017 twitter@mistergenest
*/

var sleater = document.getElementById("blue");
var kinney = document.getElementById("black");
var marquee = document.querySelector("textArea");
marquee.value = "Instructions: move the mouse over the words above to see the time.";

function heardIt (e){
	var time = new Date();
	marquee.value += ("The time is now: " + time );
}

sleater.addEventListener("mouseover", heardIt);

kinney.addEventListener("mouseover", heardIt);
