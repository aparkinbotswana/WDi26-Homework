let catImg = document.querySelector('.kitty');
catImg.style.position = 'absolute';
catImg.style.bottom = '-100px';
catImg.style.left = '-250px';

let watchKittyMove = function() {
  let oldBottom = parseInt(catImg.style.bottom);
  let newBottom = oldBottom + 1;
  let oldLeft = parseInt(catImg.style.left);
  let newLeft = oldLeft + 2;
  catImg.style.bottom = newBottom + 'px';
  catImg.style.left = newLeft + 'px';

let halfBrowserWidth = window.innerWidth/2 - 220 + 'px'; // For some reason, half the browser width wasn't in the middle so manual adjustment was required
let captureMoreWidth = window.innerWidth/2 - 221 + 'px';
if (catImg.style.left === halfBrowserWidth) {
  catImg.src="css/images/surprise.gif";
  catImg.style.bottom = newBottom + 40 + 'px';
     // catImg.style.display = 'none';
  }
  if (catImg.style.left === captureMoreWidth) {  // This is the same as the above if condition but with one additional pixel to make sure the condition is triggered i.e. the animation doesn't skip over the exact pixel value of 'half the browser width'
   catImg.src="css/images/surprise.gif";
   catImg.style.bottom = newBottom + 40 + 'px';
  }

  if (catImg.style.left === (window.innerWidth - 400 + 'px')) { // Once image has reached a certain screen width, change it again
    catImg.src="css/images/ghost.gif";
  }
}

window.clearInterval(1);

  // let browserWidth = window.innerWidth + 'px'; // This code works but I decided I wanted to do something different
  //
  //     if (catImg.style.left === browserWidth) {
  //     window.clearInterval(1);
  //   }

window.setInterval(watchKittyMove, 27);


//////////


let lightningEffect = document.querySelector('.lightning');
lightningEffect.style.opacity = 0;

let lightningFlash = function() {
  lightningEffect.style.opacity = lightningEffect.style.opacity + 1;

};
window.setInterval(lightningFlash, 8000);


///////

let lightningx2 = document.querySelector('.moarLightning');
let moarLightning = function() {
  lightningx2.style.opacity = lightningx2.style.opacity + 1;

};
window.setInterval(moarLightning, 13000);


let lightningx3 = document.querySelector('.moarMoarLightning');
let moarMoarLightning = function() {
  lightningx3.style.opacity = lightningx3.style.opacity + 1;

};

window.setInterval(moarMoarLightning, 15000);
