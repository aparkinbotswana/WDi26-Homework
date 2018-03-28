let newPosition=0;

let image = document.getElementsByTagName("img")[0];
// image.style.position = 'absolute';
image.style.left = '0px';
//image.style.right = '0px';
let catForward = function() {

  let oldPosition = parseInt(image.style.left);
  newPosition = oldPosition + 5;
  image.style.left = newPosition + "px";
catBackward();
  //Make the cat repeat the walk
  //if(newPosition > 1450)
  // if(newPosition > window.innerWidth)
  // { //var b_newPosition = window.innerWidth;
  //   //window.clearInterval(stopwalk);
  // //Make the cat start over
  //   image.style.transform = 'scaleX(-1)';
  //   //let b_oldPosition = parseInt(image.style.left);
  //   newPosition = newPosition - 5;
  //   image.style.left = newPosition + "px";

    // img.style.right = '0px';
    // let b_oldPosition = parseInt(img.style.left);
    // let b_newPosition = b_oldPosition - 5;
    //Flip the cat
    // image.style.transform = 'scaleX(-1)';
    //let newPosition = oldPosition - 10;
    // console.log('old pos '+oldPosition);
    // console.log('new pos ' +newPosition);
    //image.style.left= b_newPosition + "px";
//   }
 }
let catBackward = function(){
  if(newPosition > window.innerWidth)
  {
    image.style.transform = 'scaleX(-1)';
    newPosition = newPosition - 5;
    image.style.left = newPosition + "px";
catForward();
}
}

// let stopwalk = window.setInterval(catForward,50);
window.setInterval(catForward,50);
