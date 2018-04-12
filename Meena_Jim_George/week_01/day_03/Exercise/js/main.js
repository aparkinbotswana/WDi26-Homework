/*
Part 1, Rectangle
Given the following a rectangle object like the one below, write the following functions:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle
const rectangleA = {
  length: 4,
  width: 4
};
*/
const rectangle = {
  length: 4,
  width: 4
};
 const isSquare = function(length,width){
   if(rectangle.length === rectangle.width)
   {
    console.log(`Square`);
   }
   else {
     console.log(`Not a Square`);
   }
 }
isSquare();

const area = function(length,width){
  const area1 = (rectangle.length*rectangle.width);
  console.log(area1);
}
area();

const perimeter = function(){
  const perimeter1 = 2 *(rectangle.length + rectangle.width);
  console.log(perimeter1);
}
perimeter();

/*Part 2, Triangle
Given the following a triangle object like the one below, write the following functions:

isEquilateral - Returns whether the triangle is equilateral or not
isIsosceles - Returns whether the triangle is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not
const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};
*/

const triangle = {
  sideA: 4,
  sideB: 4,
  sideC: 4
};

const isEquilateral = function(sideA,sideB,sideC){
  if(triangle.sideA === triangle.sideB && triangle.sideA === triangle.sideC)
  {
    console.log(`Equilateral triangle`);
  }
  else {
    {
      console.log(` Not an Equilateral triangle`);
    }
  }
}
isEquilateral();

const isIsosceles = function(){
if(triangle.sideA === triangle.sideB || triangle.sideA === triangle.sideC ||triangle.sideB === triangle.sideC)
{
  console.log(`Isosceles triangle`);
}

}

isIsosceles();

const areat=function(){
const areat1 = .5 * (triangle.sideA * triangle.sideB);
console.log(areat1);
}
areat();

const isObtuse = function(){
//const Obtuse1 = (triangle.sideB*triangle.sideB  > triangle.sideA*triangle.sideA + triangle.sideC* triangle.sideC);
//bsquare > asquare + csquare
if(triangle.sideB*triangle.sideB  > triangle.sideA*triangle.sideA + triangle.sideC* triangle.sideC)
{
  console.log(`Obtuse angle`);
}
else {
  console.log(`Not an Obtuse`);
}
};
isObtuse();

/*
The Cash Register
Write a function called cashRegister that takes a shopping cart object.
The object contains item names and prices (itemName: itemPrice).
The function should return the total price of the shopping cart. Example

// Input
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

// Output
cashRegister(cartForParty)); // 60.55

*/

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
}
const cashRegister = function(cartForParty){
  // var string1 = "";
  // var object1 = {a: 1, b: 2, c: 3};
  //
  // for (var property1 in object1) {
  //   string1 = string1 + object1[property1];
  // }
  //
  // console.log(string1);
  // expected output: "123"
let items= 0;//initialize a variable
for(let itemPrice in cartForParty)//for loop to read through an object.for every value in the object,display the object
{
  // items=items + parseFloat(cartForParty[itemPrice]);
  items=items + +cartForParty[itemPrice];

  console.log(cartForParty[itemPrice]);
}
console.log(`total price: ${items}`);
}
cashRegister(cartForParty);

/*Credit Card Validation
You're starting your own credit card business.
You've come up with a new way to validate credit cards with a
simple function called validateCreditCard that returns true or false.

Here are the rules for a valid number:

Number must be 16 digits, all of them must be numbers
You must have at least two different digits represented (all of the digits cannot be the same)
The final digit must be even
The sum of all the digits must be greater than 16
The following credit card numbers are valid:

9999-9999-8888-0000
6666-6666-6666-1666
The following credit card numbers are invalid:

a923-3211-9c01-1112 invalid characters
4444-4444-4444-4444 only one type of number
1111-1111-1111-1110 sum less than 16
6666-6666-6666-6661 odd final number
Example
validateCreditCard('9999-9999-8888-0000'); // Returns: true
Hint: Remove the dashed from the input string before checking if the input credit card number is valid.

Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is

{ valid: true, number: 'a923-3211-9c01-1112' }
{ valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
Double Bonus: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.

*/
const validateCreditCard=function(creditCard){
  //insert string into array and removing -
let cardArray = creditCard.split('-');
console.log(cardArray);
//join the array into a string and split
let newString = cardArray.join('');
console.log(newString);
//split the string
let cardNumArray = newString.split('');
console.log(cardNumArray);
//Number must be 16 digits, all of them must be numbers
if(cardNumArray.length !== 16)
{
  console.log(`Card number does not have 16 characters`);
  return false;
}
for(let i=0;i<cardNumArray.length;i++)
{
  if(isNaN(cardNumArray[i]))
  {
  console.log(`${cardNumArray[i]} is not a number`);
  return false;
  }
}

//You must have at least two different digits represented (all of the digits cannot be the same)
let checker=1;
for(let i=1;i<cardNumArray.length;i++)
{
  if(cardNumArray[0] === cardNumArray[i]){
    checker = checker +1;
  }
}
//console.log(`${checker} same numbers`);
if(checker === 16)
{
  console.log(`All numbers are same`);
  return false;
}
//The final digit must be even
if(cardNumArray[15] %2 !== 0)
{
  console.log(`${cardNumArray[15]} is not even`);
  return false;
}

//The sum of all the digits must be greater than 16
let total = 0;
for(let i=0;i<cardNumArray.length;i++)
{
  total=total + parseInt(cardNumArray[i]);
}
//console.log(`The sum of all the digits is ${total}`);
if(total<=16)
{
  console.log(`${total} is less than 16`);
  return false;
}
console.log(`This credit card number is valid`);
return true;
}
validateCreditCard('0000-0000-0000-9992');
