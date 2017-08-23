console.log("Hey.");
// Square 1
document.getElementById("purple").innerHTML = "<h2>BOO.</h2>";
document.querySelector("p").textInsert = "Cortland";

// Square 3
var t = new Date();
console.log(t);
console.log("Orange.");
var message = "<p>The time in Greenwich is: " + t.toUTCString() + "</p>"  ; 
message += "<p>The time around here is: " + t.toLocaleString() + "</p>"  ; 
message += "<p>Locale Date String: " + t.toLocaleDateString() + "</p>"  ; 
message += "<p>Date String: " + t.toDateString() + "</p>"  ; 

document.getElementById("blue").innerHTML = message ;
document.querySelector('div:nth-child(4)').innerHTML = '<h1>U2</h1>';

console.log('Ken');

function didd(){
	var x = 6;
	console.log(x);
}
document.getElementById("nutsWhen").addEventListener("click", didd );
console.log('Nordine');
// Yay!  The clicker works!  Going to bed.
