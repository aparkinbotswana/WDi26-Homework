// Write a function that will take one argument (a number) and perform the following operations,
// using the functions you wrote earlier1:
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

const calculator = function (number) {

  const calHalfNumber = number / 2;
  console.log(`Half of ${ number } is ${ calHalfNumber }.`);

  const calSquareNumber = calHalfNumber * number;
  console.log(`The result of squaring the number ${ number } is ${ calSquareNumber }.`);

  const calculateArea = Math.PI * calSquareNumber * calSquareNumber;
  console.log(`The area for a circle with radius ${ calculateArea } is ${ calculateArea.toFixed(2) }`);

  const calPercentOf = (calculateArea / calSquareNumber) * 100;
  console.log(`${ calculateArea } is ${ calPercentOf }% of ${ calSquareNumber } .`);
};
calculator(2);

    // const halfNumber = function (number) {
    // const calHalfNumber = number / 2;
    // console.log(`Half of ${ number } is ${ calHalfNumber }.`);
    //
    // const squareNumber = function (number) {
    // const calSquareNumber = number * number;
    // console.log(`The result of squaring the number ${ number } is ${ calSquareNumber }.`);
    //
    // const areaOfCircle = function (radius) {
    // const calculateArea = Math.PI * radius * radius;
    // console.log(`The area for a circle with radius ${ radius } is ${ calculateArea.toFixed(2) }`);
    //
    // const percentOf = function (number1, number2) {
    // const calPercentOf = (number1 / number2) * 100;
    // console.log(`${ number1 } is ${ calPercentOf }% of ${ number2 } .`);
