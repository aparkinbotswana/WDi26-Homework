
const catWalk = document.getElementsByTagName('img')[0];
catWalk.style.position = 'absolute';
//catWalk.style.paddingLeft = '0px';
catWalk.style.left = '0px';

const watchKittyMove = function() {
  const oldTop = parseInt(catWalk.style.left);
  const newTop = oldTop + 1;
  catWalk.style.left = newTop + 'px';


  if (newTop > 1440) {
    window.clearInterval(catStop);
    console.log('helo');
  }
};
const catStop = window.setInterval(watchKittyMove, 20);
