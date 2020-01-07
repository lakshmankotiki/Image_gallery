const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
var imgSelector = document.querySelectorAll("img");
for(var i=1;i<imgSelector.length;i++) {
    document.querySelectorAll("img")[i].addEventListener("click", function() {
        window.alert("clicked man...");
    });
}

const newImage = document.createElement('img');
newImage.setAttribute('src', "");
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
