console.log("connected");

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

const finalCardValidator  = {
  valid: "",
  number: "",
  error: ""
};

const validateCreditCard = function (number) {
  const newNum = number.split("-").join(''); //remove dash from string
  finalCardValidator.number = number;


  if (newNum.match(/^[0-9]+$/) == null) { //use regex to see if the string includes any character except a number - if it does...
    finalCardValidator.valid = "false"; //
    finalCardValidator.error = "error: contains_invalid_characters";
    console.log(finalCardValidator);
  }

  else if (newNum.length < 16 || newNum.length > 16) { // if length is less than or more than 16
    finalCardValidator.valid = "false";
    finalCardValidator.error = "error: wrong_length";
    console.log(finalCardValidator);
  }

  const arr = newNum.split(' ') {
    let sum = 0;
    for (var i = 0; i < newNum.length; i++) {
     sum = sum + newNum[i]
  }
  else if (sum < 17) { //this doesn't work
    finalCardValidator.valid = "false";
    finalCardValidator.error = "error: all_numbers_match";
    console.log(finalCardValidator);
  }

  else if (newNum[15] % 2 !== 0) { // if last character is even
    finalCardValidator.valid = "false";
    finalCardValidator.error = "error: last_number_must_be_even";
    console.log(finalCardValidator);
  }

  else {
    finalCardValidator.valid = "true"; //else return true
    delete finalCardValidator.error;
    console.log(finalCardValidator);
  }



// create loop to find sum of all numbers - if less than 16  console log error

  // let total = 0
  // for (i = 0; i < newNum.length; i++) {
  //   total = total[i] + Number(newNum[i])
  //   console.log(total)
  // }


  //
  //   console.log("error: sum_less_than_16")


};



validateCreditCard("9999-9999-8888-0008"); //valid
validateCreditCard("9999-9999-8888-00A8"); //contains letter
validateCreditCard("9999-9999-8888-99998"); //extra number
validateCreditCard("2222-2222-2222-2222"); //all characters the same
validateCreditCard("1001-1111-1001-0110"); //sum less than 16
validateCreditCard("9999-9999-9199-9919"); //odd final number






//
// Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is
//
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// Double Bonus: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.
