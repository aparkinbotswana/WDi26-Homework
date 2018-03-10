$('h1').funText('candy');
const img = document.getElementsByTagName('img')[0];
img.style.position = 'absolute';
img.style.left = '0px';
let viewportWidth = document.documentElement.clientWidth;
let stopTimerTwoGlobal;

const reverseWalk = function(){
  let oldLeft = parseInt(img.style.left);
  let newLeft = oldLeft - 25;
  img.style.left = newLeft + 'px';
  if(newLeft < 10){
    img.style.transform = "scaleX(-1)";
    location.reload(); //Temp Fix
    window.clearInterval(stopTimerTwoGlobal)
    let stopTimer = window.setInterval(catWalk, 60);

  }
}

const catWalk = function() {
  let oldLeft = parseInt(img.style.left);
  let newLeft = oldLeft + 25;
  img.style.left = newLeft + 'px';
  if(newLeft > viewportWidth -100){
    img.style.transform = "scaleX(-1)";
    window.clearInterval(stopTimer);
    let stopTimerTwoGlobal = window.setInterval(reverseWalk, 60);

  }
};
let stopTimer = window.setInterval(catWalk, 60);
