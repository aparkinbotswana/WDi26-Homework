/*Take half of the number and store the result.
Square the result of #1 and store that result.
Calculate the area of a circle with the result of #2 as the radius.
Calculate what percentage that area is of the squared result (#3).*/


const oneNum = function(num4){
const hashOne = num4/2;
console.log(`half of 8 is ${ hashOne }`);

const halfNum2 = Math.pow(hashOne,2);
console.log(`square the number ${ hashOne } is ${ halfNum2 }`);

const radius = 16;
const halfNum3 = (Math.PI * radius * radius);
console.log(`The area for a circle with radius 16 is ${ halfNum3 }`);

const num1 = halfNum3;
const num2 = halfNum2;
const halfNum4 = num1 % num2;
console.log(` ${ num1 } is 50% of ${ num2 }`);

};
oneNum(8)
