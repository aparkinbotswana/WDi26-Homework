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

  finalValidation.number = c;

  let updated = c.replace(/-/g, ''); // could also use c.split("-").join('')
  //console.log(updated); //to check the above line works

  if (updated.length !== 16) {
    finalValidation.valid = "false";
    finalValidation.error = "wrong_length"
    return finalValidation;
  } else {
    finalValidation.valid = "true";
  }
  if (/[^0-9]/gi.test(updated)) { //don't quite understand how this works but it does
    finalValidation.valid = "false";
    finalValidation.error = "invalid_characters"
    return finalValidation;
  } else {
    finalValidation.valid = "true";
  }

//below is john's way of checking if all numbers are the same
  let areTheyAllTheSame = true;
  for (var i = 0; i < updated.length; i++) {
    if (updated[i] !== updated[0]) {
      areTheyAllTheSame = false;
    }
  }
  if (areTheyAllTheSame === true) {
    finalValidation.valid = "false";
    finalValidation.error = "all_numbers_can't_be_the_same"
    return finalValidation;
  } else {
    finalValidation.valid = "true";
  }

//I can't get the below to work as a way to check if all numbers are the same, even though it makes more sense to me...
  // let differenceFound;
  // for (let i = 0; i < updated.length; i++) {
  //   if (updated[i] !== updated[i+1]) {
  //     differenceFound = "yes";
  //   }
  // }
  // if (differenceFound === "yes") {
  //   finalValidation.valid = "true";
  // } else {
  //   finalValidation.valid = "false";
  //   finalValidation.error = "all_numbers_can't_be_the_same"
  //   return finalValidation;
  // }

  if (updated[updated.length-1] % 2 === 0) {
    finalValidation.valid = "true";
  } else {
    finalValidation.valid = "false";
    finalValidation.error = "final_number_must_be_even"
    return finalValidation;
  }

  let total = 0
  for (let i = 0; i < updated.length; i++) {
    total = total + Number(updated[i]);
  }
  if (total > 16) {
    finalValidation.valid = "true";
  } else {
    finalValidation.valid = "false";
    finalValidation.error = "number_sum_too_small";
    return finalValidation;
  }

  if (finalValidation.valid = "true") {
    delete finalValidation.error; //check this delete method out - don't quite understand it
  }
  console.log(finalValidation);
}

//test this out:
console.log(validateCreditCard('a923-3211-9c01-111'));
console.log(validateCreditCard('a923-3211-9c01-1112'));
console.log(validateCreditCard('4444-4444-4444-4444'));
console.log(validateCreditCard('1111-1111-1111-1110'));
console.log(validateCreditCard('6666-6666-6666-6661'));
console.log(validateCreditCard('6666-6666-6666-6662'));
//for some reason when i run these in the console, they work and get the right error messages, but when i open the object, the number has changed and they all have the number as 6666-6666-6666-6662. I can't figure out why. 
