// Part 1
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "c"
// Bonus: Round the result so there are only two digits after the decimal.

const squareNumber = function(number){
  const square = number * number;
  const squareResult = `The result of squaring the number ${number} is ${square}.`;
  console.log(squareResult);
  return(square);
};
squareNumber(2);

const halfNumber = function(number1){
  const half = number1 * .5;
  const halfResult = `Half of ${number1} is ${half}.`;
  console.log(halfResult);
  return(half);
};
halfNumber(2);

const percentOf = function(number2, number3){
  const percent = (number3 - number2)/number3 * 100;
  const percentResult = `${number2} is ${percent}% of ${number3}.`;
  console.log(percentResult);
  return(percent);
};
percentOf(2,4);

const areaOfCircle = function(radius){
  const area = (Math.PI*(radius*radius)).toFixed(2);
  // console.log(area);
  const areaResult = `The area for a circle with radius ${radius} is ${area}.`;
  console.log(areaResult);
  // console.log(area);
  return(area);
};
areaOfCircle(2);


// Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).


const part2 = function(number5){

  const halfPart2 = halfNumber(number5);
  const squarePart2 = squareNumber(halfPart2);
  const areaPart2 = areaOfCircle(squarePart2);
  const percentPart2 = percentOf(areaPart2, squarePart2);=

};

part2(10);
