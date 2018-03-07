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

let halfBrowserWidth = window.innerWidth/2 - 200 + 'px';
if (catImg.style.left === halfBrowserWidth) {
  catImg.src="css/images/surprise.gif";
      window.clearInterval(1);
     // catImg.style.display = 'none';
   }

  // let browserWidth = window.innerWidth + 'px'; // This code works but I decided I wanted to do something different
  //
  //     if (catImg.style.left === browserWidth) {
  //     window.clearInterval(1);
  //   }

}
window.setInterval(watchKittyMove, 27);

//////////


let lightningEffect = document.querySelector('.lightning');
console.log(lightningEffect);
lightningEffect.style.opacity = 0;

let lightningFlash = function() {
  lightningEffect.style.opacity = lightningEffect.style.opacity + 1;

};
window.setInterval(lightningFlash, 9000);
