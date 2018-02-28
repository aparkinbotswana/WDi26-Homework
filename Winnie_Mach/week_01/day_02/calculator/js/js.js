console.log("Is this working?");
//
// The Calculator
// Part 1
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
const squareNumber = function(number) {
  const numberSquared = Math.pow(number, 2); // <-- formula for squaring, can also write: number * number
  console.log(`The result of squaring ${number} is ${numberSquared}.`);
  return numberSquared;
};
squareNumber(7);
squareNumber(9);
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
const halfNumber = function(number) {
  const halfofNumber = number / 2;
  console.log(`Half of ${number} is ${halfofNumber}.`);
  return halfofNumber;
};
halfNumber(16);
halfNumber(2002);
halfNumber(84304);
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
const percentOf = function(num1, num2) {
  const percent = Math.round((num1/num2) * 100);
  console.log(`${num1} is ${percent}% of ${num2}. `);
  return percent;
};
percentOf(2, 4);
percentOf(5, 7);
percentOf(233, 9442);
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
const areaOfCircle = function(radius) {
  let areaFormula = Math.PI * Math.pow(radius, 2); //Pi * r^2
  // Bonus: Round the result so there are only two digits after the decimal.
  areaFormula = areaFormula.toFixed(2); //rounding to 2 decimal places (kind of)
  console.log(`The area of a circle with a radius of ${radius} is ${areaFormula}.`);
  return areaFormula;
}
areaOfCircle(16);
areaOfCircle(100);

// Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//

const functionsInsideFunctionWhoo = function(number) {
  // Step1: Take half of the number and store the result.
  const step1 = halfNumber(number);
  // Step2: Square the result of #1 and store that result.
  const step2 = squareNumber(step1);
  // Step3: Calculate the area of a circle with the result of #2 as the radius.
  const step3 = areaOfCircle (step2);
  // Step4: Calculate what percentage that area is of the squared result (#3).
  const step4 = percentOf (step3, step2);
  console.log(`My answer is ${step4}%.`);
  return step4;
};
functionsInsideFunctionWhoo(4);
