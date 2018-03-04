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

console.log("coneted");

const validator = function (cardNum) {
  // console.log(cardNum);

  // replace dashes with empty string
  cardNum = cardNum.replace(/-/g, "");
  // console.log(cardNum);

  // check if length is 16. if not - reject
  if (cardNum.length !== 16) {
    return false;
  }

  // if the card number is NOT a number - reject
  if ( isNaN(cardNum)) {
    return false;
  }

  // if the last digit is not even - reject
  if (cardNum[15] %2 !== 0) {
    return false;
  }

  // calculate the sum of the digits
  const arr = cardNum.split('');
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + +arr[i];
  }

  // if the sum of the figits is not grester than 16 - reject
  if (sum < 17) {
    return false;
  }

  // if all chars are the same - reject
  let areTheyAllTheSame = true
  for (var i = 0; i < cardNum.length; i++) {
    if ( cardNum[i] !== cardNum[0] ) {
      areTheyAllTheSame = false
    }
  }
  if (areTheyAllTheSame === true) {
    return false
  }

  // if we have got here, then all the above tests have failed
  // and therefore the card number must be OK.
  return true;

};



// run test cases ...

let testCases = [
  "9999-9999-8888-0000",
  "6666-6666-6666-1666",
  "a923-3211-9c01-1112",
  "4444-4444-4444-4444",
  "1111-1111-1111-1110",
  "6666-6666-6666-6661"
]

for (var i = 0; i < testCases.length; i++) {
  console.log(testCases[i], validator(testCases[i]))
}
