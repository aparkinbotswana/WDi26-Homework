// Part 1
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

console.log('Testing');

const squareNumber=function(num){
  const square= Math.pow(num,2);
  const result=`The result of squaring the number ${num} is ${square}.`;
  console.log(result);
  return square;
}
let jim = squareNumber(3);

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
const halfNumber=function(num){
  const half= num/2;
  const result=`Half of ${num} is ${half}.`;
  console.log(result);
  return half;
}
let meena = halfNumber(5);
console.log(meena);

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
//solution:how much of second num will make the first number
const percentOf=function(num1,num2){
  //const myNum = num1 % num2;
  const myNum = Math.ceil((num2/num1)*100);
  //console.log(myNum);
  const result=`${num2} is ${myNum}% of ${num1}.`;
  console.log(result);
  return myNum;
}
 const result=percentOf(4,2);
console.log(result);

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

const areaOfCircle=function(radius){
  const area = round((Math.PI * radius *radius),3);
  const result=`The area for a circle with radius ${radius} is ${area}.`;
console.log(result);
//const roundnum=Math.round(result);
//console.log(roundnum);
return(area);
}
meena = areaOfCircle(2);
console.log(meena);


// Bonus: Round the result so there are only two digits after the decimal.
function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}





/*Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

Take half of the number and store the result.
Square the result of #1 and store that result.
Calculate the area of a circle with the result of #2 as the radius.
Calculate what percentage that area is of the squared result (#3).*/

const calcNum = function(num){
//Take half of the number and store the result.
const halfnum=halfNumber(num);
//Square the result of #1 and store that result.
console.log(halfnum);
const squareNum= squareNumber(halfnum);
//Calculate the area of a circle with the result of #2 as the radius.
console.log(squareNum);
const areaCircle=areaOfCircle(squareNum);
//Calculate what percentage that area is of the squared result (#3).

const percentage=percentOf(areaCircle,squareNum);
console.log(percentage);
}
calcNum(4);
