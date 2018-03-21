
let img = document.getElementsByTagName('img')[0];
img.style.position = 'absolute';
img.style.left = '10px';


const catwalk = function() {
  var oldLeft = parseInt(img.style.left);
  var newLeft = oldLeft + 10;
  img.style.left = newLeft + 'px';


  if (newLeft > 500) {
    console.log("we have reached 10000");
    clearInterval(timerDone)
    img.style.transform = 'scaleX(-1 )';
    backTimerDone = window.setInterval(catWalkBack, 50)
  }

};

const catWalkBack = function() {
  var oldLeft = parseInt(img.style.left);
  var newLeft = oldLeft - 10;
  img.style.left = newLeft + 'px';


  if (newLeft < 0) {
    console.log("finshed");
    clearInterval(backTimerDone)
    img.style.transform = 'scaleX(1)';
    timerDone = window.setInterval(catwalk, 50)
  }

};

let timerDone = window.setInterval(catwalk, 50);
