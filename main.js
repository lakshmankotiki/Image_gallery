const displayedImage = document.querySelectorAll('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

var bottomImages = document.querySelectorAll(".bottom-img");

/* Looping through images */
for (var i = 0; i < bottomImages.length; i++) {
    bottomImages[i].addEventListener("click", function() {
        var srcPath = this.src;
        // window.console.log(srcPath);
        document.querySelector(".displayed-img").setAttribute("src", srcPath);
        // window.console.log(updatedSrc);
    });
}

/* Wiring up the Darken/Lighten button */
document.querySelector(".dark").addEventListener("click", function(event) {
    var buttonText = document.querySelector(".dark").innerHTML;
    window.console.log(buttonText);
    if (buttonText === "Darken") {
        // window.console.log("inside");
        document.querySelector(".overlay").style.cssText = "background: rgba(150,150,150,0.6)";
        document.querySelector(".dark").innerHTML = "Lighten";
        document.querySelector(".dark").style.cssText = "background-color: white";
    } else if (buttonText === "Lighten") {
        document.querySelector(".overlay").style.cssText = "opacity: 0";
        document.querySelector(".dark").innerHTML = "Darken";
        document.querySelector(".dark").style.cssText = "background: rgba(150,150,150,0.6)";
    }
});