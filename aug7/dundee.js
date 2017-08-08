console.log("Master, I am here.");
// BUTTON COUNTING TIME
var boingo = document.form1.boingo;
var times = 0;
function buttonVigil(){
	times++;
	boingo.value = "been clicked " + times + " times";
}
boingo.addEventListener("click", buttonVigil);
//
alert(document.getElementById("banner"));
console.log(document.querySelector("ul li"));
console.log(document.querySelectorAll("ul li"));
var x = document.getElementById("banner");
var y = document.querySelector("ul li");
var z = document.querySelectorAll("li").item(1);
var a = document.querySelector("input");

var container = document.documentElement;
console.log(container);
z.style.color = "blue";
console.log("INPUT (A): " + a);
var lsr1 = document.querySelector("h2");
var lsr2 = document.querySelector("input"); 

console.log("INPUT (A): " + a);
