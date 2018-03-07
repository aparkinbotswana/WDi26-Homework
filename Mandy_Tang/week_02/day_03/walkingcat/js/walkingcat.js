let catImg = document.querySelector('img');
catImg.style.position = 'absolute';
catImg.style.top = '0px';
catImg.style.left = '0px';
let watchKittyFall = function() {
  let oldTop = parseInt(catImg.style.top);
  let newTop = oldTop + 1;
  let oldLeft = parseInt(catImg.style.left);
  let newLeft = oldLeft + 2;
  catImg.style.top = newTop + 'px';
  catImg.style.left = newLeft + 'px';
};
window.setInterval(watchKittyFall, 70);
