// Part 1, Rectangle
// Given the following a rectangle object like the one below,
//write the following functions:
// area - Returns the area of the rectangle
// isSquare - Returns whether the rectangle is a square or not
// perimeter - Returns the perimeter of the rectagle

const rectangleA = {
  length: 4,
  width: 5
};

const isSquare = function( rec ) {
  // console.log(rec)
  if (rec.length === rec.width){
    console.log('Is a sqaure');
  } else {
    console.log('Is a rectangle');
  }
}
isSquare(rectangleA)

const area = function (rec ){
  console.log(rec.area = rec.width * rec.length);
};
area(rectangleA)

const perimeter = function ( rec ) {
  console.log( 2 * (rec.width + rec.length));
};
perimeter(rectangleA)


//
// Part 2, Triangle
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

const isEquilateral = function (tri){
  if (tri.sideA === tri.sideB === tri.sideC){
    console.log('Yes it is an equilateral');
  } else {
    console.log('No its not an equilateral');
  }
}

isEquilateral (triangleA);


const isIsosceles = function ( tri ) {
  if (tri.sideA === tri.sideB || tri.sideA === tri.sideC || tri.sideB === tri.sideC){
    console.log('It is iscosceles');
  } else {
    console.log('It is not iscosceles');
  }
}
isIsosceles (triangleA);

const isObtuse = function ( tri ){
  if (tri.sideA !== tri.sideB && tri.sideA !== tri.sideC && tri.sideB !== tri.sideC){
    console.log('It is obtuse');
  } else {
    console.log("It is not obtuse");
  }
}

isObtuse (triangleA);

// The Cash Register
// Write a function called cashRegister that takes a shopping cart object.
// The object contains item names and prices (itemName: itemPrice).
// The function should return the total price of the shopping cart. Example

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

//Output
//cashRegister(cartForParty)); //60.55

const cashRegister  = function ( cart ) {

  let total = 0;

  for (let key in cart) {
    const value = cart[key];
  const numberValue = Number (value);
    total= total + numberValue;
    console.log(value);
  }
console.log(total);
}

cashRegister (cartForParty);

//
// Credit Card Validation
// You're starting your own credit card business. You've come up with a new way to
// validate credit cards with a simple function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
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
// Example
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// Hint: Remove the dashed from the input string before checking if the input credit card number is valid.
//
// Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is
//
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// Double Bonus: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.

const vaildCreditCard = function ( cardNumber ) {
  //console.log( CardNumber );
  // Number must be 16 digits, all of them must be numbers

  cardNumber = cardNumber.replace (/-/g, '')
  console.log(cardNumber);
  if (cardNumber.length !== 16){
    //console.log('false');
    return false
  }
  if (isNaN (cardNumber) ){
    return false
  }

  return true 
}


console.log(vaildCreditCard ('1111-1111-1111-1111'))

// You must have at least two different digits represented (all of the digits cannot be the same)













































//
//

//I didn't complete this i got help with this

// const myCard = {
//   number: '9999-9999-8888-00a0',
//   expiryMonth: 02,
//   expiryYear: 20
// }
//
// function validateCreditCard(card) {
//   const actualCardNumber = card.number.replace(/-/g, "");
//
//   // make sure it only has numbers
//   function check(arr) {
//    for(var i=0; i<arr.length; i++){
//      if(typeof arr[i] != "string") {
//         return false;
//       }
//    }
//
//    return true;
//   }
//
//
//   const hasOnlyNumbers = /^\d+$/.test(actualCardNumber);
//
//   if (!hasOnlyNumbers) {
//     const error = {
//       valid: false,
//       number: card.number,
//       error: 'invalid characters'
//     }
//     return error;
//   }
//
//   // final number is odd
//   const lastNumberIsOdd = actualCardNumber[actualCardNumber.length-1] % 2 === 0 ? false : true;
//   console.log('lastNumberIsOdd', lastNumberIsOdd)
//   if (lastNumberIsOdd) {
//     const error = {
//       valid: false,
//       number: card.number,
//       error: 'last number is odd'
//     }
//     return error;
//   }
//
//   // check card length
//   if (actualCardNumber.length !== 16) {
//
//     const error = {
//       valid: false,
//       number: card.number,
//       error: 'wrong_length'
//     }
//
//     return error;
//     a}
//
//   const validCard = {
//     valid: true,
//     number: card.number,
//     error: 'Card is valid'
//   }
//
//   return validCard
// }
//
// const myValidCard = validateCreditCard(myCard);
//
// console.log('my valid card is: ', myValidCard)
