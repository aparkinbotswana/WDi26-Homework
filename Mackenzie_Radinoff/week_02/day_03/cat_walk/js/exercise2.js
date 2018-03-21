const img = document.getElementsByTagName('img')[0];
img.style.position = 'absolute';
img.style.left = '0px';
let viewportWidth = document.documentElement.clientWidth;
let globalPlace;


const catWalk = function() {
  let oldLeft = parseInt(img.style.left);
  if(oldLeft < document.documentElement.clientWidth -100){
    let newLeft = oldLeft + 25;
    img.style.left = newLeft + 'px';
    if(img.style.left ===document.documentElement.clientWidth -100){
      window.clearInterval(stopTimer);
      catWalk();
    }
  }
  else {
    let newLeft = oldLeft - 25;
    img.style.left = newLeft + 'px';
    if(img.style.left === 10){
      window.clearInterval(stopTimer);
      catWalk();
    }
  }
}
let stopTimer = window.setInterval(catWalk, 60);
