console.log("Pepper");

var theForm = document.form1;
var theCat = theForm.cat1;
var theButton = theForm.button1;
var theTextArea = theForm.textarea1;

function petting() // mouseover
{
	message = theTextArea.value;
	message += "Purr...  \n";
	theTextArea.value = message;
}

function poking() // clicking
{
	message = theTextArea.value;
	message += "Meow!  \n";
	theTextArea.value = message;
}

function wipeOut(){
	theTextArea.value = "";
}

var message = "The cat responds both to clicking and touching.\n";
theTextArea.value = message;
theCat.addEventListener("mouseover", petting );
theCat.addEventListener("click", poking);
theButton.addEventListener("click", wipeOut );



