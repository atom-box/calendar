// DOM manipulation
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);


function sayHello() {
  var x = document.querySelector("input").value;
  var message = "<h2><em>Hello you little " + x + " !</em><h2>";

/*function sayHello () {
  var name =
   document.getElementById("name").value;
   var message = "<h2>Hello " + name + "!</h2>";
*/




  // document
  //   .getElementById("content")
  //   .textContent = message;

  document
    .getElementById("content")
    .innerHTML = message;

  if (name === "student") {
    var title = 
      document
        .querySelector("#title")
        .textContent;
    title += " & Lovin' it!";
    document
        .querySelector("h1")
        .textContent = title;
  }
}