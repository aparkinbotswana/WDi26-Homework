var catMargin = 20;

var catPos = document.getElementById("catpic");
catPos.style.marginLeft = "0";

var moveCat = function() {
    catMargin = catMargin + 20;
    catPos.style.marginLeft = catMargin.toString() + "px";
    console.log(catMargin);
}

window.setInterval(moveCat, 500);
