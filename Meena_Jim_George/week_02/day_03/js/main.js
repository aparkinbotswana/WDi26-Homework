// The Cat Walk
// Who needs Milan when you have JavaScript?
//
// Start with this webpage, which has a single img tag of an animated GIF of a cat walking.
//
// <!DOCTYPE html>
// <html>
//  <head>
//   <meta charset="utf-8" />
//   <title>Cat Walk</title>
//  </head>
//  <body>
//
//   <img style="position:absolute;" src="http://www.anniemation.com/clip_art/images/cat-walk.gif">
//
//  </body>
// </html>
// Create a new Javascript file and link to it with a script tag at the bottom.
//
// Create a variable to store a reference to the img.
//
// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
//
// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
//
// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
//
// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.
//
// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.
//
// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.
//
// Bonus #4: Pretty much go nuts or whatever.

//change image to this one: https://orig00.deviantart.net/9b93/f/2012/245/5/7/zeit___cat_dance_by_thefaileddream-d5daxhp.gif
console.log("connected");



var timer1;
var timer;

var img = document.querySelector('img');
var oldimg = img.src;
img.style.position = 'absolute';
img.style.left = '0px';
var watchCatWalk = function() {

// subtract client Width.

  var oldLeft = parseInt(img.style.left);
  var newLeft = oldLeft + 3;
  img.style.left = newLeft + 'px';

  if (newLeft > +window.outerWidth) {
    window.clearInterval(timer);
    img.className = 'flip';
   timer1 = window.setInterval(watchCatWalkFlip, 10);
  }
};
timer = window.setInterval(watchCatWalk, 10);

///////////

var watchCatWalkFlip = function() {

  var oldleft = parseInt(img.style.left);
  var newleft = oldleft - 3;
  img.style.left = newleft + 'px';
  if (newleft === 0) {
    window.clearInterval(timer1);
    img.className = '';
    timer = window.setInterval(watchCatWalk, 10);
  }
  if((window.outerWidth)/2 === newleft)
  {
    // window.outerWidth)/2 === newleft
    ////catDance();
    // window.clearInterval(timer1);
    // var timer2 = window.setInterval(catDance, 100);
    // window.clearInterval(timer2)
    //  img.src = oldimg;

  }

};


// cat event click



const catDance = function() {
  if (img.src === oldimg) {
    img.src= "https://media.giphy.com/media/tkjfU5IIjbqbm/giphy.gif";
  }
  else {
    img.src = oldimg;
  }

};



img.addEventListener('click', catDance);
