
var timer1;
var timer;

var img = document.querySelector('img');
var oldimg = img.src;
img.style.position = 'absolute';
img.style.left = '0px';
img.style.top = '15em';
var watchCatWalk = function() {

// subtract client Width.

  var oldLeft = parseInt(img.style.left);
  var newLeft = oldLeft + 1;
  img.style.left = newLeft + 'px';

  if (newLeft > +window.innerWidth) {
    window.clearInterval(timer);
    img.className = 'flip';
   timer1 = window.setInterval(watchCatWalkFlip, 10);
  }
};
timer = window.setInterval(watchCatWalk, 10);

///////////

var watchCatWalkFlip = function() {

  var oldleft = parseInt(img.style.left);
  var newleft = oldleft - 1;
  img.style.left = newleft + 'px';
  if (newleft === 0) {
    window.clearInterval(timer1);
    img.className = '';
    timer = window.setInterval(watchCatWalk, 10);
  }

  if((window.innerWidth)/2 === newleft)
    {
    //   window.clearInterval(timer1);
    //   var timer2 = window.setTimeout(catDance, 60);
    //
    //   //var timer1 =  window.setTimeout(catDance, 100);
    //   // window.clearInterval(timer2);
    //
    //
    //   //window.clearTimeout(timer2,100);
    //
    //   console.log("A")
    //   img.src = oldimg;
    //   newleft = newleft-1;
    //   window.clearInterval(timer2);
    //   timer = window.setInterval(watchCatWalkFlip, 10);
    //
    //
    }

};


// cat event click

//

const catDance = function() {
  if (img.src === oldimg) {
    img.src= "https://media.giphy.com/media/nVTxfg1Kb9MhW/giphy.gif";
    //document.querySelector('body').className = '.backChange';
    //document.body.style.backgroundImage = "url('https://media.giphy.com/media/3GEnhbaxCJdks/giphy.gif')";
  }
  else {

    img.src = oldimg;
    //document.body.style.backgroundImage = "url('https://media.giphy.com/media/l2Je4nuc11cMXpzt6/giphy.gif')";
    //document.body.style.backgroundImage = "url('https://media.giphy.com/media/3o6Mbmx4k4D0xwSRDa/giphy.gif')";
  }

};



img.addEventListener('click', catDance);
