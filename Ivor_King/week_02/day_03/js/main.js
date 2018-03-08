var catMargin = 0;
var catPos = document.getElementById("catpic");
catPos.style.left = "0";
var catDir = true;
var timeVar = 300;

var moveCat = function() {
    if (catDir === true) {
        catMargin = catMargin + 30;
        catPos.style.left = catMargin.toString() + "px";
    }
    else {
        catMargin = catMargin - 30;
        catPos.style.left = catMargin.toString() + "px";
    }
    if (window.innerWidth - catMargin < 0 || catMargin < 0) {
        catDir = !catDir;
        if (catDir === true) {
            catPos.style.transform = "scaleX(1)";
        }
        else {
            catPos.style.transform = "scaleX(-1)";
        }
    }
    // if (catMargin === 120) {
    //     console.log("freezer");
    //     catPos.src = "https://media.giphy.com/media/BK1EfIsdkKZMY/giphy.gif";
    //     window.clearInterval(moveCat);
    // }
};

window.setInterval(moveCat, timeVar);
