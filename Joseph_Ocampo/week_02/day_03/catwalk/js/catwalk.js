console.log('are you working?');

const img = document.querySelector('img');

img.style.position = 'absolute';
img.style.left = '0px';

// const watchKittyWalkBackwards = function() {
//   if (newTop === innerWidth-296) {
//   const oldTop = parseInt(img.style.left);
//   let newTop = oldTop -1;
//
//   img.style.left = newTop + 'px';
//
//   if (newTop === 0 ) {
//     window.clearInterval(timer2);
//     console.log('hello');
//
//
//  }  // window.clearInterval(timer);
// }



const watchKittyWalk = function() {
  const oldTop = parseInt(img.style.left);
  const newTop = oldTop + 1;
  const walkLeft = oldTop + 1;

  img.style.left = newTop + 'px';

  if (newTop === innerWidth-296) {
    window.clearInterval(timer);


      // window.clearInterval(timer);
    }
};

  var timer = setInterval(watchKittyWalk, 10);
