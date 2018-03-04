// Credit Card Validation
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
// Number must be 16 digits, all of them must be numbers

// Assuming num = credit card number

// To check for duplicate values, can turn into string, then use slice to compare first x numbers to the last x numbers  --> but since 0001-0001 are the same, you could use rotate to move last digit into first place, then compare the first 4 digits to the last 4 
// Note that arrays are never equal, even if the content of the arrays is the same
//

let valid;
let differenceFound;
let validateCreditCard = function (num) {
 let numString = num.toString();      // To check how many are digits there are, must turn into string and find length
 //console.log(numString.length);  // Logging number of chars to make sure it's working
 if (numString.length !== 16) { // If number of chars is not 16
   console.log('Invalid: Your number must be 16 digits.');
   valid = false;
   console.log(valid);
 }
  let lastChar = (numString.charAt(numString.length-1)); // Getting the last character .charAt using the version we've turned into a string
  if (lastChar % 2 !== 0) { // The final character must be even
   console.log('Invalid: The last digit is not even.');
   valid = false;
   console.log(valid);
 }
  let numArray = numString.split(""); // To add up all the digits, turn the CC number into an array (converting from the converted string we did above

  function sum(numArray) { // Now we are finding the sum of each element in the numArray using a function that loops through adding up all the digits
    let total = 0;  // Creating a variable called a total to store the 'total' after each iteration
    for (let i = 0; i < numArray.length; i++) {
    total += Number(numArray[i]); // Number() will make whatever's inside it into a number (returns the numerical value)
    // x += y is short for x = x + y, so total = total from the laste iteration + the 'next/relevant' number in the array
          }
          return total; // The return is here because if you include it inside the for loop, it will stop prematurely
        }
      //  console.log(sum(numArray)); // Calling the function to sum the array, then logging it to console

        if (sum(numArray) <= 16) { // We've found the sum of the numbers - now need to make sure it's > 16
          valid = false;
          console.log(valid);
          console.log('Invalid: Your digits must add up to more than 15.')
        }

   if (isNaN(num)) { // Condition to check if everything entered is a number
     valid = false;
     console.log('Invalid: You have entered invalid characters.');
   } // Check that everything entered is a number
// Checking if my numbers as an array contain duplicate values:

// FAILED ATTEMPTS FOLLOW
// for (let i = 0; i < numString.length; i++) {  // Looping through the string of your numbers
//   if (numString[i] !== numString[i + 1]) {// To check if your first number is the same as the second number
//     differenceFound = true; // If the first number is not the same as the second number, there is a difference
//     // As soon as you've found a difference, the function can stop running since it means your whole string can't be the same
//   } return differenceFound;
//
//  if (differenceFound !== true) {
//   valid = false;
//   console.log('Invalid: All your digits are the same.');
//
//    // To prevent above console message from being logged for every duplicate
//   }
//}
}

validateCreditCard('0000002');
validateCreditCard('i');
