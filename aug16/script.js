/* Aug 15, 2017.  Make a time convertor button.
*  Seeing if I can do this from memory.
*  otherwise, p. 284 Jeremy McPeak's 
*  Beginning JS.
*  
*/

console.log('Working well.  But no style.')

document.querySelector("div").textContent = "Ring, Ding.";
document.getElementById("whistle").innerHTML = "<h2>Woof, Woof.</h2>";
var box = document.getElementById("timeButton");
box.addEventListener("click", retrieveBoxInput());

function retrieveBoxInput(){
	var t = null;
	t = document.getElementById("userTime");
	document.getElementById("displayArea").textContent = "Hay --> " + t ;
}

console.log( "Retrieved: " + retrieveBoxInput() );

function toMil(t){
	return t + 2;
}

function toGre(t){
	return t - 5;
}

function toUnx(t){

	return 1000000;
}

document.textContent = "foo";
document.innerHTML = "bar";
var oldTime = 0;
console.log(oldTime);
oldTime = document.getElementById("userTime");
console.log(oldTime);
