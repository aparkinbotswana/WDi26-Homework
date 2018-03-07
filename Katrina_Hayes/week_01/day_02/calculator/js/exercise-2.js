// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

const squareNumber = function(number) {
  const numberSquared = number * number;
  //console.log(`The result of squaring the number ${number} is ${numberSquared}.`);
  return numberSquared;
}

const halfNumber = function(number) {
  const numberHalved = number/2;
  //console.log(`Half of ${number} is ${numberHalved}.`);
  return numberHalved;
}

const percentOf = function(num1, num2) {
  const percentageCalc = num1/num2 * 100;
  //console.log(`${num1} is ${percentageCalc}% of ${num2}.`);
  return percentageCalc;
}

const areaOfCircle = function(radius) {
  const areaCalc = (Math.PI * radius * radius);
  const roundedCalc = areaCalc.toFixed(2);
  //console.log(`The area for a circle with radius ${radius} is ${roundedCalc}.`);
  return areaCalc;
}

const operationBonanza = function(number) {
  const numberHalved = halfNumber(number);
  const halvedSquared = squareNumber(numberHalved); // squaring result of numberHalved
  const newArea = areaOfCircle(halvedSquared); // calculating area of circle using squared variable as radius
  const percentageCalc = percentOf(newArea, halvedSquared); // calculating what percentage the area is of the squared result
  return percentageCalc;
}

const banana = operationBonanza(2);
console.log(banana);
