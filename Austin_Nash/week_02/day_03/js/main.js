console.log("working");



  let cat = document.getElementsByTagName("img")[0];
  cat.style.position = 'absolute';
  cat.style.left = '0px';

let move = function() {
    let oldCat = parseInt(cat.style.left);
    let newCat = oldCat + 10
    cat.style.left = newCat + 'px';

    if (newCat > 700) {
//stop timer
      window.clearInterval(walkTimer);
//flip cat
      cat.style.transform = "scaleX(-1)"
    }
};

let walkTimer = window.setInterval(move, 50);

// not walking back ward -- still working
      let moveBack = function() {
          let oldCat = parseInt(cat.style.left);
          let newCat = oldCat - 10
          cat.style.left = newCat + 'px';

          if (newCat < 700) {
            window.clearInterval(walkTimerBack);
            cat.style.transform = "scaleX(1)"
          }
      };

      let walkTimerBack = window.setInterval(moveBack, 50);
