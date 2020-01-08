/**
 * Image gallery for kinda previewing the selected images
 * and darken and lightent the images on click of button
 * by applying opacity to the images
 */

//get the main displayed image reference so that we can replace src of other image
const displayedImage = document.querySelectorAll('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

var bottomImages = document.querySelectorAll(".bottom-img");

//added click event on click of images
for (var i = 0; i < bottomImages.length; i++) {
    bottomImages[i].addEventListener("click", function() {

        //get the current clicked image src ref
        var srcPath = this.src;

        window.console.log(srcPath);

        //set the current clicked img src to the displayed-img src so that it's replaced
        document.querySelector(".displayed-img").setAttribute("src", srcPath);

        window.console.log(updatedSrc);
    });
}

// putting all the Darken and Lighten button logic 
document.querySelector(".dark").addEventListener("click", function(event) {
    var buttonText = document.querySelector(".dark").innerHTML;
    window.console.log(buttonText);
    if (buttonText === "Darken") {

        //Applying css style to the main image
        document.querySelector(".overlay").style.cssText = "background: rgba(150,150,150,0.6)";

        //updating  the button title to lighten viceversa
        document.querySelector(".dark").innerHTML = "Lighten";

        //updating the button background to the white so that user the clear idea
        document.querySelector(".dark").style.cssText = "background-color: white";
    } else if (buttonText === "Lighten") {
        document.querySelector(".overlay").style.cssText = "opacity: 0";
        document.querySelector(".dark").innerHTML = "Darken";
        document.querySelector(".dark").style.cssText = "background: rgba(150,150,150,0.6)";
    }
});