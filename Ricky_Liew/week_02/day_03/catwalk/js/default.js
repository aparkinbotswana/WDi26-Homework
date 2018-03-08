console.log(`test`);
/*
Weekxx Dayxx Homework | Classwork
URL:

*/

/*
Task:

*/
let cat = document.getElementsByTagName('img')[0];
cat.style.position = 'absolute';
cat.style.left = '0px';

var makeCatWalk = function(){
  let oldPosition = parseInt(cat.style.left);
  let newPosition = oldPosition + 10;
  cat.style.left = newPosition + 'px';
};

window.setInterval(makeCatWalk, 1000);
