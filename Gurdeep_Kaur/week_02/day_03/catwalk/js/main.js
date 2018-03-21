console.log('helloerferf');
//
// // first find the width of the screen to know
// // how far the cat needs to walk
//
// // set the width at browser width
// const width = window.innerWidth;
//
// // find the image we want to move
// const img = document.querySelector('img');
//
// // set the current direction of the cat to go right
// let currentDirection = 'goingRight';
//
// // start the cat at position 0 (as far left on the screen)
// img.style.left = '0px';
//
// // initialise nextPosition to use in the function later
// let nextPosition;
//
// const moveCat = function() {
//
//  // set the current position of the cat as a number, not a string
//  const currentPosition = parseInt(img.style.left);
//
//  // whatever the direction is, set the next position to be one more or one less than that current position
//  if (currentDirection === 'goingRight') {
//    // this sets the next position to be 1 more than the current position
//    nextPosition = currentPosition + 1;
//  } else {
//    // this sets the next position to be 1 less than the current position
//    nextPosition = currentPosition - 1;
//  }
//
//  // tell the cat which position to be at (either one more or one less than the previous position)
//  img.style.left = nextPosition + 'px';
//
//  // if we hit the edge of the screen, change the direction of the cat
//  if (nextPosition === (window.innerWidth - img.clientWidth)){
//    currentDirection = 'goingLeft';
//    img.style.transform = 'scaleX(-1)';
//  } if (nextPosition === 0) {
//    currentDirection = 'goingRight';
//    img.style.transform = 'scaleX(1)';
//  }
// }

// do the moveCat function heaps
//setInterval(moveCat, 10);

const one = document.querySelector('img');
one.style.position = 'relative';
one.style.left = '0px';

const width = window.innerWidth;
let stoptimer2 ;
let stoptimer3;

const move = function(){

  let oldLeft = parseInt(one.style.left);
  let newLeft = oldLeft + 10;
  one.style.left = newLeft + 'px';
  one.className = " ";
  //one.style.left = one.style.left - 1;
  if(newLeft > window.innerWidth){
    console.log("inside");
    window.clearInterval(stoptimer);
    stoptimer2 = window.setInterval(moveRight,100);
  }
};

let stoptimer = window.setInterval(move,100);

const moveRight = function(){

  let oldLeft = parseInt(one.style.left);
  let newLeft = oldLeft - 10;
  one.style.left = newLeft + 'px';
  one.className = "reversecat";


  if(newLeft <= 100){
    window.clearInterval(stoptimer2);
  }
};


// let img = document.getElementById("img1");
//  img1.addEventListner("click",function(event){
//  event.target.img = url('https://slack-imgs.com/?c=1&url=https%3A%2F%2Fmedia3.giphy.com%2Fmedia%2FtkjfU5IIjbqbm%2Fgiphy-downsized.gif');
// });


//counterButton.addEventListner('click', counterButton);
// const againMove = function(){
//
//     one.style.left = newLeft + 'px';
//     one.className1 = "move";
//     let newLeft = oldLeft + 10;
// if(newLeft <= 100){
//   window.clearInterval(stoptimer3);
// }
//   stoptimer3 = window.setInterval(againMove,100);
// };




  // const middle = function(){
  //   const mid = parseInt(window.innerWidth - one.clientWidth);
  //   if(newLeft < mid){
  //     window.clearInterval(stoptimer3);
  //     console.log("dancing");
  //     one.className1 = "dancingcat";
  //   }
  //
  //
  // }
