console.log('START: console seeing catwalk.js');

// Create a variable to store a reference to the img.

// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.

// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.

// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!

// Pamela Fox & Joel codepen & my code working:
const img = document.querySelector('img');
img.style.position = 'absolute';
img.style.right = '0px';
img.style.left = '0px';
var watchKittyWalk = function() {
  // walking cat
  const oldX = parseInt(img.style.right); // x axis take the string '0px' set as interger
  const newX = oldX + 10; // x axis cat walk along x axis by adding interger to 0px
  img.style.right = newX + 'px'; // x axis

  // reverse the cat
  console.log(document.documentElement.clientWidth);
  if ( img.style.right >= document.documentElement.clientWidth ) {
    console.log("I am here, are you");
    console.log(document.documentElement.clientWidth, img.style.right);
    const oldX = parseInt(img.style.right); // x axis
    const newX = oldX - 10;
    img.style.right = newX + 'px';
  }
};
setInterval(watchKittyWalk, 40);

// w3schools adapted code working:
// const catWalk = function () {
//   const catAnimation = document.getElementById('myAnimation');
//   let position = 0;
//   let movement = setInterval(frame, 21);
//   function frame () {
//     if (position == 10000) {
//       clearInterval(movement);
//     } else {
//       position++;
//       catAnimation.style.top = position + 'px';
//       catAnimation.style.right = position + 'px';
//       console.log(position);
//     }
//   }
// };
// catWalk();
