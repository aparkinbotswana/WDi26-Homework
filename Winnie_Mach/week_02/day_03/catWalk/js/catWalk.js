// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.
//
// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.
//
// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.
//
// Bonus #4: Pretty much go nuts or whatever.


// Create a new Javascript file and link to it with a script tag at the bottom.
//
// Create a variable to store a reference to the img.
//
const catImg = document.querySelector('img');

// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
//
catImg.style.left = '0px';


// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
const catWalk = function() {
  const positionStart = parseInt(catImg.style.left);
  const positionMove = positionStart + 3;
  catImg.style.left = positionMove + 'px';
  if (positionStart > window.innerWidth - catImg.width) { // once the catimg reaches the window width.
    window.clearInterval(stop); //stopping the function from being called i.e. down below.
    console.log('hello'); //testing to see if the function executes at 960px.
    const back = window.setInterval(catWalkBackwards, 10);

  }
};

//catImg.style.right = '0px'
const catWalkBackwards = function() {
  const positionStart = parseInt(catImg.style.left); //no style.right or bottom.
  const positionMove = positionStart - 3;
  catImg.style.left = positionMove + 'px';
  if (positionStart  < 0) { // once the catimg reaches the window width.
    window.clearInterval(back); //stopping the function from being called i.e. down below.
    console.log('hello'); //testing to see if the function executes at 960px.
    stop = window.setInterval(catWalk, 10);
  }
};


// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
const stop = window.setInterval(catWalk, 10); //calling the catWalk function. The catWalk function will only execute when it is being called here. It's like catWalk(); but this is calling it at a certain interval multiple times instead of just running it once.
