/*
Practicing the five weeks of 
Coursera on my own.
August 2017
by Evan Genest twitter@mistergenest
Future Ideas brainstorm at the bottom
*/
console.log("Jet Set");

// PUT A TITLE
var newText = document.createTextNode("Catchin' flies with honey");
var newElem = document.createElement("h1");
newElem.appendChild(newText);
document.getElementById("luigi").appendChild(newElem);

// PUT AN IMAGE
// stoled from http://help.dottoro.com/ljvadxkw.php  
        var imageFiles = ["ev1.jpg", "ev2.jpg", "ev3.jpg"];
        function NextImage (imgId) {
            var img = document.getElementById (imgId);
            if (img.imageIdx === undefined) {
                img.imageIdx = -1;
            }
            img.imageIdx = (img.imageIdx + 1) % imageFiles.length;

            img.src = imageFiles[img.imageIdx];
        }

