// Part 2
// Write a function that will take one argument (a number) and
//perform the following operations, using the functions you wrote earlier1:



// Take half of the number and store the result.

const numberOne = function(number) {
  const theHalfNumber = number / 2;
  return theHalfNumber;
};

const initialHalfNumber = 10;                                       //this is the first number value
  const answerOne = numberOne (initialHalfNumber);
  console.log(`Half of ${initialHalfNumber} is ${answerOne}`);

// Square the result of #1 and store that result.

const squareNumber = function(answerOne) {
    const theSquareNumber = answerOne * answerOne;
    return theSquareNumber;
};

const initialNumber = answerOne;
  const answerTwo = squareNumber(initialNumber);
console.log(`The result of squaring the number ${initialNumber} is ${answerTwo}`);

// Calculate the area of a circle with the result of #2 as the radius.

const areaOfCircle = function (answerTwo) {
  const area = Math.PI * Math.pow(answerTwo, 2);
  return area;
  };

const myRadius = answerTwo;
const answerThree= areaOfCircle (myRadius);
console.log(`The area for a circle with radius ${myRadius} is ${answerThree}`);


// Calculate what percentage that area **answerThree** is  of the squared result **answerTwo** (#3).

const percentOf = function (answerThree, answerTwo) {
  const thePercentageOf = answerThree / answerTwo;
  return thePercentageOf;
};

const onePercentage = answerThree;
const twoPercentage = answerTwo;
 const myPercentage = percentOf (onePercentage, twoPercentage) *100;
 console.log(`${ onePercentage} is ${myPercentage}% of ${twoPercentage}.`);
