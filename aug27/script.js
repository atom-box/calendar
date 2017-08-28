/* By Evan Genest August 28, 2017
*  Features: event listeners for a whack a mole
						an IIFE
	 DevStatus: Line 36 works, displays 'saccharide'
*/

function chirp(){
	console.log("Tweettt.");
	
}

function saySomething()
{
	var d = new Date();
	d = d.toUTCString();


	if (d%2)
	{ 
		console.log(d + " oh!");
	}
	else 
	{
		console.log(d + " ee!");
	}
}


//todo on mouseover, lay down a new text

// GIVEN (1) A NUMBER AND (2) A WORD,
// FUNCTION WILL LAY A WORD IN THAT TILE

function paint()
{
	var newText = document.createTextNode("polysaccharide");
	var newElem = document.createElement("h3");
	newElem.appendChild( newText );
	document.getElementById("cooties").appendChild(newElem);

}

//function erase;

//todo print to console what is in the moused over space 
//function insert;

//  SEEMS LIKE MAIN TO ME
(function (){
	chirp();
	var c = 0;
	document.querySelector("p.cain").addEventListener("mouseover", saySomething());
	paint();


})();
//(function (){ /* code */          }());
