const displayedImage = document.querySelectorAll('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for(var i=0;i<displayedImage.length;i++) {
    displayedImage[i].addEventListener("click", function() {
        window.console.log(this.className.slice(13, 18));
    });
}

const newImage = document.createElement('img');
newImage.setAttribute('src', "");
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
