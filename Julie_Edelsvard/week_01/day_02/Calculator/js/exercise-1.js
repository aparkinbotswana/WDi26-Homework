// // Write a function called squareNumber that will take one argument (a number),
// square that number, and return the result. It should also log a string like
// "The result of squaring the number 3 is 9."


const squareNumber = function (x) {
  const square = x * x;
  console.log(`The result of squaring the number ${ x } is ${ square }`);
  return square;
};

squareNumber(3);



// Write a function called halfNumber that will take one argument (a number),
// divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

const halfNumber = function (x) {
  const divide = x / 2;
  console.log(`Half of ${ x } is ${ divide }`);
  return divide;
};

halfNumber(5);


// Write a function called percentOf that will take two numbers,
// figure out what percent the first number represents of the second number,
// and return the result. It should also log a string like "2 is 50% of 4."

const percentOf = function (x, y) {
  const percent = x / y * 100;
  console.log(`${ x } is ${ percent} % of ${ y }`);
  return percent;
};

percentOf(2,4);


// Write a function called areaOfCircle that will take one argument (the radius),
// calculate the area based on that, and return the result. It should also log a
// string like "The area for a circle with radius 2 is 12.566370614359172."

const areaOfCircle = function (radius) {
  const circle = Math.PI * 2 * radius;
  console.log(`The area for a circle with radius ${ radius } is ${ circle }`);
  return circle;
};

areaOfCircle(2);
