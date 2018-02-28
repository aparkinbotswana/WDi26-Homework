// HOmework Day02
// https://gist.github.com/wofockham/8f953ac7f33125898071

//console.log("Test");

// Part 1: Calculator
/*
-Write a function called squareNumber that will take one argument (a number),
 square that number, and return the result. It should also log a string like
 "The result of squaring the number 3 is 9."

-Write a function called halfNumber that will take one argument (a number),
 divide it by 2, and return the result. It should also log a string like
 "Half of 5 is 2.5.".

-Write a function called percentOf that will take two numbers, figure out what
 percent the first number represents of the second number, and return the
 result. It should also log a string like "2 is 50% of 4."

-Write a function called areaOfCircle that will take one argument (the radius),
 calculate the area based on that, and return the result. It should also log a
 string like "The area for a circle with radius 2 is 12.566370614359172."

-Bonus: Round the result so there are only two digits after the decimal.
*/
const squareNumber = function(number){
  const numSquared = Math.pow(number, 2).toFixed(2);
  return numSquared;
}

const halfNumber = function(number){
  const numHalved = (number/2).toFixed(2);
  return numHalved;
}

const percentOf = function(num1, num2){
  const numPercent = ((num1/num2)*100).toFixed(2);
  return numPercent;
}


const areaOfCircle = function(rad){
  const circArea = (Math.PI * Math.pow(rad, 2)).toFixed(2);
  return circArea;
}

// PART 1
console.log('PART 1');
console.log('======')

// squareNumber
console.log('Squared Number:');
console.log('--------------')
const numberToSquare = 55.5;
const sqNumberResult = squareNumber(numberToSquare);
console.log(`${numberToSquare} squared is ${sqNumberResult}`);
console.log('');
console.log('');


// halfNumber
console.log('Half Number:');
console.log('-----------');
const numberToHalve = 42.935;
const halfNumberResult = halfNumber(numberToHalve);
console.log(`${numberToHalve} halved is ${halfNumberResult}`);
console.log('');
console.log('');


// percentOf
console.log('Percentage:');
console.log('----------');
const percentNumber1 = 22;
const percentNumber2 = 93;
var percentageResult = percentOf(percentNumber1, percentNumber2);
console.log(`${percentNumber1} is ${percentageResult}% of ${percentNumber2}`)



// areaOfCircle
console.log('Area of Circle:');
console.log('--------------');
const radius = 73;
const circleAreaResult = areaOfCircle(radius);
console.log(`A circle with radius ${radius} has an area of ${circleAreaResult}`);
console.log('');
console.log('');




// PART 2
/*
Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

Take half of the number and store the result.
Square the result of #1 and store that result.
Calculate the area of a circle with the result of #2 as the radius.
Calculate what percentage that area is of the squared result (#3).
*/

console.log('PART 2');
console.log('======')

const startNumber = 5;
const number2 = halfNumber(startNumber);
const number3 = squareNumber(number2);
const number4 = areaOfCircle(number3);
const number5 = percentOf(number4, number3);

console.log(`Starting number: ${startNumber}`);
console.log(`Squared: ${number3}`);
console.log(`Circle Area: ${number4}`);
console.log(`${number4} is ${number5}% of ${number3}`);
