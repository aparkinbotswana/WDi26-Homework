// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

const squareNumber = function (x) {
  const square = x * x;
console.log(`The result of squaring the number ${ x } is ${ square }`);
return square;
};

squareNumber(10);

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

const halfNumber = function (x) {
  const halfTheNumber = x / 2;

console.log(`Half of ${ x } is ${ halfTheNumber }`);
return halfTheNumber;
};

halfNumber(10);
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

const percentOf = function (x, y) {
const percent = x / y * 100;

console.log(`${ x } is ${ percent } % ${ y }`);
return percentOf;
};

percentOf(10, 20);

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.
const areaOfCircle = function (x) {
  const area = (Math.PI * x * x).toFixed(2); //use .toFixed('0') with a number in brackets to choose how many decimal places to round to.
    console.log(`The area for a circle with radius ${ x } is ${ area }.`);
      return areaOfCircle;

};

areaOfCircle(10);

// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

const superFun = function (x) {

  let result = halfNumber(x);
  result = squareNumber(result);
  result = areaOfCircle(result);
  result = percentOf(result);

}

superFun(100);
