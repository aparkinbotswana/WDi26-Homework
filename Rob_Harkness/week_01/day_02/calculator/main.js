// Square a number
const squareNumber = (num) => {
  const result = num * num;
  console.log(`The result of squaring ${num} is ${result}`);
  return result;
};

// Halve a number
const halfNumber = (num) => {
  const result = num / 2;
  console.log(`Half of ${num} is ${result}`);
  return result;
};

// find percentage of
const percentOf = (numOne, numTwo) => {
  const result = Math.round(numOne / numTwo * 100);
  console.log(`${numOne} is ${result}% of ${numTwo}`);
  return result;
};

// find area of a circle
const areaOfCircle = (r) => {
  const result = Math.round(Math.PI * r * r);
  console.log(`The area of a circle with radius ${r} is ${result}`);
   return result;
};

// part 2
const resultOne = halfNumber(5);
const resultTwo = squareNumber(resultOne);
const resultThree = areaOfCircle(resultTwo);
percentOf(resultThree, resultTwo);
