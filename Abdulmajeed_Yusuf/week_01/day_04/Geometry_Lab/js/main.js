// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions:
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle


const rectangleA = {
  length: 4,
  width: 4
};
const isSquare = function(r){
if (r.length === r.width) {
  console.log(`The rectangle is a square`);
} else {
  console.log(`Nope`);
}

}
let area = function (r) {
  console.log(r.length * r.width);
}

let perimeter = function (r) {
  console.log(2 * (r.length + r.width));
}

isSquare(rectangleA);
area(rectangleA);
perimeter(rectangleA);


// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not


const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

const isEquilateral = function(t) {
  if (t.sideA === t.sideB === t.sideC) {
    console.log(`The triangle is equilateral`);
  } else {
    console.log(`It is is not an equilateral triangle`);
  }
}

let isIsosceles = function (t) {
  if (t.sideA === t.sideB || t.sideA === t.sideC || t.sideB === t.sideC) {
    console.log(`The triangle is an isosceles triangle`);
  } else {
    console.log(`It is not an isosceles triangle`);
  }
}

let areaOfTriangle = function (t) {
  let p = (t.sideA + t.sideB + t.sideC)/2;
  let a = Math.sqrt(p*(p-t.sideA)*(p-t.sideB)* (p-t.sideC));
  console.log(a);

}

let isObtuse = function (t) {
  if (t.sideA !== t.sideB !== t.sideC) {
    console.log(`The triangle is an obtuse triangle`);
  } else {
    console.log(`The triangle is not an obtuse triangle`);
  }
}


isEquilateral(triangleA);
isIsosceles(triangleA);
areaOfTriangle(triangleA);
isObtuse(triangleA);


// Write a function called cashRegister that takes a shopping cart object.
// The object contains item names and prices (itemName: itemPrice).
// The function should return the total price of the shopping cart. Example

const cartForParty = {
<<<<<<< HEAD
  banana: 1.25,
  handkerchief: .99,
  Tshirt: 25.01,
  apple: 0.60,
  pomerganate: 10.34,
  proteinShake: 22.36
=======
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  pomerganate: "10.34",
  proteinShake: "22.36"
>>>>>>> 4f0d2c2776705dbc085e7b7d2f7e3cde1df244a2
};

let cashRegister = function(c){
  let cartTotal = (c.banana + c.handkerchief + c.Tshirt + c.apple + c.pomerganate + c.proteinShake); {
  console.log(cartTotal);
}
}
cashRegister(cartForParty);

<<<<<<< HEAD
=======
// let total = 0;
//  for (let item in cartForParty) {
//    // total = total + +cartForParty[item]; (or you can use parseFloat)
//  }

>>>>>>> 4f0d2c2776705dbc085e7b7d2f7e3cde1df244a2
//
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16
// The following credit card numbers are valid:
//
// 9999-9999-8888-0000
// 6666-6666-6666-1666
// The following credit card numbers are invalid:
//
// a923-3211-9c01-1112 invalid characters
// 4444-4444-4444-4444 only one type of number
// 1111-1111-1111-1110 sum less than 16
// 6666-6666-6666-6661 odd final number


// Here are the rules for a valid number:
// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16


const validateCreditCard = function (creditCardNum){
  let ccNumberNoDashes = '-';
  for (let i = 0; i < creditCardNum.length; i++) {
    if(creditCardNum[i] !== '-'){
      ccNumberNoDashes += creditCardNum[i];
    }
  }

  if(ccNumberNoDashes.length !== 16){ // The credit card number must be 16 digits in length
    return false;
  }

  // All of the digits must be numbers
  for(let i = 0; i < ccNumberNoDashes.length; i++){
    // store the current digit
let currentNumber = ccNumberNoDashes[i];
    currentNumber = Number.parseInt(currentNumber);
  if(!Number.isInteger(currentNumber)){
    return false;
    }
  }

const obj = {};
  for(let i = 0; i < ccNumberNoDashes.length; i++){
    obj[ccNumberNoDashes[i]] = true;
    }
  if(Object.keys(obj).length < 2){
    return false;
    }


  if(ccNumberNoDashes[ccNumberNoDashes.length - 1] % 2 !== 0){
    return false;
  }

  if(sum <= 16){
    return false;
  } else {
      return true;
  }
};


<<<<<<< HEAD
=======
// Class correction

const validator = function (cardNum) {
  console.log(cardNum);

  cardNum = cardNum.replace(/-/g, "")
  console.log(cardNum);

  if (cardNum.lenth !== 16) {
    return false
  }

  if (isNan(cardNum)) {
    return false
  }

  if cardNum[15] % 2 !== 0) {
    return false
  }

  const arr = cardNum.split('')
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + +arr[i]
  }

  if (sum < 17) {
    return false
  }
  return true
}


const passFail = validator("2222-2222-2222-2222")
console.log(passFail);

>>>>>>> 4f0d2c2776705dbc085e7b7d2f7e3cde1df244a2
// In this homework, you'll create a basic bank in Javascript.
// The bank has many accounts and the following capabilities that you need to write.
//
// Bank
// There is only one bank. This bank has an array of accounts.
// The bank needs a method that will return the total sum of money in the accounts.
// It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts.
// There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// Accounts
// Accounts have a current balance and owner's name.
// You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface.
// Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected:
// add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
