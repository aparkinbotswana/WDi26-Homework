const img = document.getElementsByTagName("img")[0];
img.style.position = "absolute";
img.style.left = "0px";

const runningKitty = function() {
  img.style.transform = "scaleX(1)";
  const oldLeft = parseInt(img.style.left);

  const newLeft = oldLeft + 5;
  img.style.left = newLeft + "px";

  //window.screen.width

  if (newLeft > 1280) {
    img.style.transform = "scaleX(-1)";
    window.clearInterval(runningTimer);
    runningTimer = window.setInterval(runningKittyRtoL, 50);
  }
};

const runningKittyRtoL = function() {
  const oldLeft = parseInt(img.style.left);

  const newLeft = oldLeft - 5;
  img.style.left = newLeft + "px";

  if (newLeft === 0) {
    window.clearInterval(runningTimer);
    runningTimer = window.setInterval(runningKitty, 50);
  }
};

let runningTimer = window.setInterval(runningKitty, 50);

