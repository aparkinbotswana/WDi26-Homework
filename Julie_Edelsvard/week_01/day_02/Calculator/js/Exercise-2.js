// Take half of the number and store the result.

const halfNumber = function (x) {
  const divide = x / 2;
  console.log(`Half of ${ x } is ${ divide }`);
  return divide;
};

let y = halfNumber(5);
console.log(y);


// Square the result of #1 and store that result.

const squareNumber = function (x) {
  const square = x * x;
  console.log(`The result of squaring the number ${ x } is ${ square }`);
  console.log(square);
  return square;
};

let x = squareNumber(1);
console.log(x);


// Calculate the area of a circle with the result of #2 as the radius.

const areaOfCircle = function (radius) {
  const circle = Math.PI * 2 * radius;
  console.log(`The area for a circle with radius ${ radius } is ${ circle }`);
  return circle;
};

areaOfCircle(x);
