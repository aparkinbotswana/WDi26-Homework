
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
    // //catDance();
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
