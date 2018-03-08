
// first find the width of the screen to know
// how far the cat needs to walk

// set the width at browser width
const width = window.innerWidth;

// find the image we want to move
const img = document.querySelector('img');

// set the current direction of the cat to go right
let currentDirection = 'goingRight';

// start the cat at position 0 (as far left on the screen)
img.style.left = '0px';

// initialise nextPosition to use in the function later
let nextPosition;

const moveCat = function() {

  // set the current position of the cat as a number, not a string
  const currentPosition = parseInt(img.style.left);

  // whatever the direction is, set the next position to be one more or one less than that current position
  if (currentDirection == 'goingRight') {
    // this sets the next position to be 1 more than the current position
    nextPosition = currentPosition + 1;
  } else {
    // this sets the next position to be 1 less than the current position
    nextPosition = currentPosition - 1;
  }

  // tell the cat which position to be at (either one more or one less than the previous position)
  img.style.left = nextPosition + 'px';

  // if we hit the edge of the screen, change the direction of the cat
  if (nextPosition === (window.innerWidth - img.clientWidth)){
    currentDirection = 'goingLeft';
    img.style.transform = 'scaleX(-1)';
  } if (nextPosition === 0) {
    currentDirection = 'goingRight';
    img.style.transform = 'scaleX(1)';
  }
}

// do the moveCat function heaps
setInterval(moveCat, 10);
