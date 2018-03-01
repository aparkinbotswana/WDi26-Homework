console.log ('is this on');

const squareNumber = function (num1) {
  const square = num1 * num1.toFixed(2);
  const result = `"The result of squaring the number ${num1} is ${square}."`;
  console.log(result);
  return result;
}

squareNumber(2);
squareNumber(4);
squareNumber(10);

const halfNumber = function (num1) {
  const half = num1/2;
  const result = `"Half of ${num1} is ${half}.".`;
  console.log(result);
  return result;
}

halfNumber(5);
halfNumber(8);
halfNumber(20);

const percentOfNumber = function (num1, num2) {
  const percentage = ((num1*100)/num2).toFixed(2);
  const result = `"${num1} is ${percentage}% of ${num2}."`;
  console.log(result);
  return result;
}

percentOfNumber(5, 10);
percentOfNumber(4, 12);
percentOfNumber(5, 20);

const areaOfCircle = function (num1) {
  const area = (Math.PI * num1 * num1).toFixed(2);
  const result = `"The area for a circle with radius ${num1} is ${area}."`;
  console.log(result);
  return result;
}

areaOfCircle(5);
areaOfCircle(10);
areaOfCircle(20);

const answer = function (num1) {
  const subAnswer1 = num1/2;
  const subAnswer2 = subAnswer1 * subAnswer1;
  const subAnswer3 = Math.PI * subAnswer2 * subAnswer2;
  const subAnswer4 = ((subAnswer2/subAnswer3)*100).toFixed(2);
  const result = `"The answer is ${subAnswer4}"`;
  console.log(result);
  return result;
}

answer(2);
answer(4);
