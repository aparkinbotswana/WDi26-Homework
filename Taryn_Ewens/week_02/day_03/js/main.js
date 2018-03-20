const cat = document.querySelector('#walkingcat');
cat.style.left = '0px';
cat.style.bottom = "0px";

const repeatCat = function() {

  const catWalk = function() {
    let oldLeft = parseInt(cat.style.left);
    let newLeft = oldLeft + 5;
    cat.style.left = `${newLeft}px`;
    cat.className = " ";

    if (newLeft > window.innerWidth - 296){
      clearInterval(timerID);
    timerID = setInterval(walkBack, 10);
  }
};


const walkBack = function() {
  let oldLeft = parseInt(cat.style.left);
  let newLeft = oldLeft - 5;
  cat.style.left = `${newLeft}px`;
  cat.className = "reversecat";

  if (newLeft < 0) {
    clearInterval(timerID);

    timerID = setInterval(catWalk, 10);
  }
};

let timerID = window.setInterval(catWalk, 10);
};

repeatCat();


// const dance = document.querySelector('#dancing');
// dance.style.left = '0px';
// dance.style.top = '250px';
//
// const catDance = function() {
//   let oldLeft = parseInt(dance.style.left);
//   let newLeft = oldLeft + 5;
//   dance.style.left = `${newLeft}px`;
//
//   if (newLeft > window.innerWidth){
//     clearInterval(timerID);
//     timerID = setInterval(danceBack, 10);
//   }
// };
//
// const danceBack = function() {
//   let oldLeft = parseInt(dance.style.left);
//   let newLeft = oldLeft - 5;
//   dance.style.left = `${newLeft}px`;
//
//   if (newLeft > window.innerWidth) {
//     clearInterval(timerID);
//     timerID = setInterval(catDance, 10);
//   }
// };

// const reverseCat = document.querySelector('#reversecat');
// reverseCat.style.position = "absolute";
// reverseCat.style.right = '0px';
//
// const reverseCatWalk = function() {
//   let oldRight = parseInt(reverseCat.style.right);
//   let newRight = oldRight + 5;
//   reverseCat.style.right = `${newRight}px`;
//   if (reverseCat.style.right > "980px") {
//     window.clearInterval(stopReverseWalk);
//     console.log("stop walk");
//   }
// };


// const timerID = window.setInterval(walkBack, 10);
