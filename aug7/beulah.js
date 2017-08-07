/* Getting input from a button and box.  Also: tracks the mouse position 
when SHIFT held.
Evan Genest twitter@mistergenest */
document.addEventListener("DOMContentLoaded", 
	function(event) {
		function sayHello(event){
			console.log(event);
			this.textContent = "Meowed!";
			var name = document.getElementById("handle").value;
			var message = "<h2>Hello, " + name + " !";
			document
				.getElementById("alpha").innerHTML = message;

		}
// oooooooo
		document.querySelector("button").addEventListener("click", sayHello);
		document.querySelector("body").addEventListener("mousemove", 
			function (event) {
				if (event.shiftKey === true) {
					console.log("x: " + event.clientX);
					console.log("y: " + event.clientY);
				}
			}
		); // end eventListener
// ooooooo
	}

);