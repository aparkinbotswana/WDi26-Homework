console.log ('Is this thing on?');

const squareNumber = function(number) {
  const square = number*number;
  console.log (`The result of square the number ${number} is ${square}`)
  return square;
};

squareNumber(3);
squareNumber(5);

const halfNumber = function(number) {
const half = number/2
console.log (`Half of ${number} is ${half}`);
return half;
}

halfNumber(5);
halfNumber(10);

const percentOf = function(num1, num2){
  const percent = 100*(num1/num2);
  console.log(`${num1} is ${percent}% of ${num2}`);
  return percent;
}

percentOf(2,4);
percentOf(3,10);

const areaOfCircle = function(radius){
const area = (Math.PI*radius*radius).toFixed(2);
console.log(`The area for a circle with radius ${radius}is ${area}`)
return area;
}

areaOfCircle(4);
areaOfCircle(5);

//part 2

const superFunction = function(number) {
  const result1 = halfNumber (number);
  const result2 = squareNumber(result1);
  const result3 = areaOfCircle(result2);
  const result4 = (percentOf(result2,result3)).toFixed(2);
  console.log(`The % is ${result4}%`);
  return result4;
}

superFunction(2);
superFunction(5);
