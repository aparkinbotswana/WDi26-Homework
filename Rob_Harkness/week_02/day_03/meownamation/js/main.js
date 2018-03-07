const animate = () => {
  //get client height and width
  const cWidth =
      window.innerWidth - 15 ||
      document.documentElement.clientWidth - 15 ||
      document.body.clientWidth - 15,
    cHeight =
      window.innerHeight - 165 ||
      document.documentElement.clientHeight - 165 ||
      document.body.clientHeight - 165,
    cat = document.getElementById('meow'),
    catStyle = window.getComputedStyle(cat);
  let catScale =
      parseFloat(catStyle.getPropertyValue('transform').slice(7, 12)) + 0.001,
    catLeft = catStyle.getPropertyValue('left');
  catLeft = parseFloat(catLeft) + 1.574;
  if (catLeft > cWidth+80) {
    catLeft = -150;
    catScale = 0.1;
    cat.style.top = `${Math.floor(Math.random() * cHeight + 50)}px`;
  }

  cat.style.left = `${parseFloat(catLeft)}px`;
  cat.style.transform = `scale(${parseFloat(catScale)}`;
};

setInterval(animate, 10gi0);
