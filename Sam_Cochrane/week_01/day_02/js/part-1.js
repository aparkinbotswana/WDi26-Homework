// The Calculator
// Part 1
// Write a function called squareNumber that will take one argument (a number),
//square that number,
//and return the result.
// It should also log a string like "The result of squaring the number 3 is 9."

const squareNumber = function(number) {
    const theSquareNumber = number * number;
    return theSquareNumber;
};

const initialNumber = 3;
  const myNumber = squareNumber(initialNumber);
console.log(`The result of squaring the number ${initialNumber} is ${myNumber}`);


// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

const halfNumber = function(number) {
  const theHalfNumber = number / 2;
  return theHalfNumber;
};

const initialHalfNumber = 5;
  const myHaldNumber = halfNumber(initialHalfNumber);
  console.log(`Half of ${initialHalfNumber} is ${myHaldNumber}`);

// Write a function called percentOf that will take two numbers,
//figure out what percent the first number represents of the second number,
// and return the result. It should also log a string like "2 is 50% of 4."
 const percentOf = function (numberOne, numberTwo) {
   const thePercentageOf = numberOne / numberTwo;
   return thePercentageOf;
 };

const onePercentage = 2;
const twoPercentage = 4;
  const myPercentage = percentOf (onePercentage, twoPercentage) *100;
  console.log(`${ onePercentage} is ${myPercentage}% of ${twoPercentage}.`);

// Write a function called areaOfCircle that will take one argument (the radius),
// calculate the area based on that, and return the result.
//It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

const areaOfCircle = function (radius) {
  const area = Math.PI * Math.pow(radius, 2);
  return area;
  };

const myRadius = 2;
const calcArea= areaOfCircle (myRadius).toFixed(2);
console.log(`The area for a circle with radius ${myRadius} is ${calcArea}`);

// Bonus: Round the result so there are only two digits after the decimal.
