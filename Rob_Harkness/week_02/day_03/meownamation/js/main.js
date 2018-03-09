const animate = () => {
  //get client width
  const cWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth,
    // get cat
    cat = document.getElementById('meow'),
    // get cat styles
    catStyle = window.getComputedStyle(cat);
  // get current cat scale and increment it
  let catScale =
      parseFloat(catStyle.getPropertyValue('transform').slice(7, 12)) + 0.001,
    // get cat left tand top
    catLeft = catStyle.getPropertyValue('left'),
    catTop = catStyle.getPropertyValue('top'),
    // set cat speed multiplier depending on cat scale for more realistic speed
    mult = catScale > 0.35 ? 3.5 : 1.5;
  // update cat left and top
  catLeft = parseFloat(catLeft) + mult;
  catTop = parseFloat(catTop) + 0.5;
  // if cat goes off screen wrap and reset cat by reseting position and scale
  if (catLeft > cWidth -50) {
    catLeft = -150;
    catScale = 0.1;
    catTop = 400;
  }
  // set cat styles (positions)
  cat.style.left = `${parseFloat(catLeft)}px`;
  cat.style.top = `${parseFloat(catTop)}px`;
  cat.style.transform = `scale(${parseFloat(catScale)}`;
};

setInterval(animate, 50);
