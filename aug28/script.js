/* By Evan Genest August 28, 2017
*  Features: four listeners:
			change, keydown, keypress keyup  click
		Notes: Why does 
*/

var myForm = document.form1;
var t1 = myForm.textarea1;
var t2 = myForm.textarea2;
var clearButton = myForm.button1;

console.log('wrox');

function displayEvent(e)
{
	var message = t2.value;
	message += e.type + "\n";
	t2.value = message;
}

function wipeIt(e)
{
	t2.value = "";
}

t1.addEventListener("mouseover", displayEvent );
t1.addEventListener("change", displayEvent);
t1.addEventListener("keydown", displayEvent );
t1.addEventListener("click", displayEvent);
clearButton.addEventListener("click", wipeIt);


