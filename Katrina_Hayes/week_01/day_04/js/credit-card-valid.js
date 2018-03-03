// Credit Card Validation
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
// Example
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// Hint: Remove the dashed from the input string before checking if the input credit card number is valid.
//
// Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is
//
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// Double Bonus: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.

const finalValidation = {
  valid: "",
  number: "",
  error: ""
}

const validateCreditCard = function(c) {

  let updated = c.replace(/-/g, ''); // could also use c.split("-").join('')
  //console.log(updated); //to check the above line works

  finalValidation.number = c;

  if (updated.length === 16) {
    goodLength = true;
  } else {
    goodLength = false;
  }
  if (/[^0-9]/gi.test(updated)) { //don't quite understand how this works but it does
    goodNumber = false;
  } else {
    goodNumber = true;
  }
  if (updated.slice(0,7) != updated.slice(8,15)) { //got this from Mac. Could also try the looping and seeing setting a difference found flag when updated[i] !== updated[i+1] FIX THIS TO THE LOOP
    goodDigits = true;
  } else {
    goodDigits = false;
  }
  if (updated[updated.length-1] % 2 === 0) {
    goodEven = true;
  } else {
    goodEven = false;
  }
  let total = 0
  for (let i = 0; i < updated.length; i++) {
    total = total + Number(updated[i]);
  }
  if (total > 16) {
    goodSum = true;
  } else {
    goodSum = false;
  }
  if (goodLength === true && goodNumber === true && goodDigits === true && goodEven === true && goodSum === true) {
    console.log(`Valid: true`);
    output = {
      valid: "true",
      number: c
    }
  if (goodLength === false || goodNumber === false || goodDigits === false || goodEven === false || goodSum === false) { //used to just have an else statement here and the code worked, but now I'm trying to add in the object part of the question, and the code no longer works, can't figure out why
    console.log(`Valid: false`);
    output = {
      valid: false,
      number: c,
      error: []
    };
  } console.log(output);
}

//test this out:
console.log(validateCreditCard('9999-9999-8888-0000'));
console.log(validateCreditCard('0000-1111-0000-0000'));
