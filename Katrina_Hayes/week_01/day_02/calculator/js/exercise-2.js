// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

const operationBonanza = function(number) {
  const numberHalved = number/2;
  const squared = numberHalved * numberHalved; // squaring result of numberHalved
  const areaCalc = (Math.PI * squared * squared); // calculating area of circle using squared variable as radius
  const percentageCalc = areaCalc/squared * 100; // calculating what percentage the area is of the squared result
  return percentageCalc;
}

var banana = operationBonanza(4);
