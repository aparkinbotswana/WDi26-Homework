console.log('testing tesing one two three');
// Credit Card Validation
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

// Here are the rules for a valid number:

// Number must be 16 digits, all of them must be numbers

// You must have at least two different digits represented (all of the digits cannot be the same)

// The final digit must be even

// The sum of all the digits must be greater than 16

// The following credit card numbers are valid:
// 9999-9999-8888-0000
// 6666-6666-6666-1666

// The following credit card numbers are invalid:
// a923-3211-9c01-1112 invalid characters
// 4444-4444-4444-4444 only one type of number
// 1111-1111-1111-1110 sum less than 16
// 6666-6666-6666-6661 odd final number

const validateCreditCard = function (input) {

  if (input !== 16) { // Number must be 16 digits, all of them must be numbers
    return false;
  } else if (x) { // You must have at least two different digits represented (all of the digits cannot be the same)
    return false;
  } else if ((input.length - 1) % 2 === 1) { // The final digit must be even
    return false;
  }  else if (x) { // The sum of all the digits must be greater than 16
    return false;
  } else {
    return true;
  };
};

console.log( validateCreditCard(4444444444444444) );
