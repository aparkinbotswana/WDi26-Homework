console.log('hello');
//The Calculator
// ******************** Part 1 ***************************
// function squareNumber
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
const squareNumber = function (x) {
  const square = x * x;
  console.log(`The result of squaring the number ${ x } is ${ square }`);
  return square;
};

squareNumber(20);

// function halfNumber
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
const halfNumber = function (x) {
  const halfTheNumber = x / 2;
  console.log(`Half of ${ x } is ${ halfTheNumber }`);
  return halfTheNumber;
};
halfNumber(10);

// function percentOf
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
const percentOf  = function (a, b) {
  const percent = a / b * 100;
  console.log(`${ a } is ${ percent }% of ${ b }`);
  return percentOf;
};
percentOf(2, 8);

// function areaOfCircle
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
const areaOfCircle = function (x) {
  // const area = Math.round(Math.PI  * x * x);
  const area = (Math.PI  * x * x).toFixed(2); //Bonus: Round the result so there are only two digits after the decimal.
  console.log(`The area for a circle with the radius ${ x } is ${ area }`);
  return areaOfCircle;
};
areaOfCircle(2);

// ******************** Part 2 ***************************
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

// Take half of the number and store the result.

// Square the result of #1 and store that result.

// Calculate the area of a circle with the result of #2 as the radius.

// Calculate what percentage that area is of the squared result (#3).

const calculator = function (x) {
  let result = halfNumber(x);
  let squaredResult = squareNumber(result);

  const area = (Math.PI  * squaredResult * squaredResult); // Calculate the area of a circle with the result of #2 as the radius.
  console.log(area);

  const percent = result / squaredResult * 100; // Calculate what percentage that area is of the squared result (#3).
  console.log(percent);
};
calculator(20);
