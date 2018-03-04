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


const validateCreditCard = function(cardNumber) {
  const numbers = /^[0-9]+$/;
  let Message = "";

 if (cardNumber === undefined) {
       Message = "The credit card number is invalid";
       console.log("Message");
     } else if (card.value.match(numbers) !== true) {
        Message = "The credit card number is invalid";
        console.log("Message");
      } else if (cardNumber.length !== 16) {
        Message = "Number must be 16 digits."
        console.log (Message);
      //} else if (){
          //two different digits aren't represented
          //errorMessage = "There must be at least two different digits represented in the card number";
      } else if ((cardNumber.length-1) % 2 !=0) {
          Message = "Credit card invalid - The final digit must be even.";
          console.log (Message);
        //} else if {
          //The sum of all the digits is not greater than 16
          //errorMessage = "There must be at least two different digits represented in the card number";
      } else {
          Message = "The credit card number is valid";
          console.log (Message);
          return true;
      }
  }


validateCreditCard(9999999988880000);
validateCreditCard(6666666666661666);
validateCreditCard(a92332119c011112);
validateCreditCard(4444444444444444);
validateCreditCard(1111111111111110);
validateCreditCard(6666666666666661);


//tips:
//check that more than one digit was used:
//array.slice(0,8)!= array.slice(7,18)

//you could loop through the string and return true/set a `differenceFound` flag to true as soon as you find that `str[i] !== str[i + 1]`
