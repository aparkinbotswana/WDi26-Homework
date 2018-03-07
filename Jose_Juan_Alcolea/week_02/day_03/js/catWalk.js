
const catWalk = document.getElementById('cat')[0];
cat.style.position = 'absolute';
//catWalk.style.paddingLeft = '0px';
cat.style.left = '0px';

const watchKittyMove = function() {
  const oldTop = parseInt(cat.style.left);
  const newTop = oldTop + 1;
  cat.style.left = newTop + 'px';
  if (cat.style.rigth === 1440) {
    window.clearInterval(watchKittyMove);

  }
};
window.setInterval(watchKittyMove, 20);
