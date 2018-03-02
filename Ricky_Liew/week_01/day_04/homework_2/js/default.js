//console.log(`test`);
/*
Week01 Day04 Homework
URL:
https://gist.github.com/wofockham/dacf2da17c743afb2b17
*/

/*
Task:
01 The Cash Register

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

/*
References:
https://stackoverflow.com/questions/34913675/how-to-iterate-keys-values-in-javascript
*/

const shoppingCart = {
  jerrycan: 25,
  pomegranate: 2600,
  invisible_Cloak: 5,
  jarOfSeawater: 42,
  wookie: 372,
  teleport_Machine: 9999
};
let checkout=0;
//let items = Object.keys(shoppingCart);

const total = function(cart){
  let tot=0;
  console.log(`Shopping Cart Items:`);
  for(const[key, value] of Object.entries(cart)){
    console.log(`${key}: ${value}`);
    //console.log(`Price: ${value}`);
    tot += value;
  }
  return tot;
}

console.log('01 The Cash Register');
console.log('--------------------');
console.log(``);
checkout = total(shoppingCart);
console.log(`------------------------`)
console.log(`Grand total: $${checkout}`);
console.log('');
console.log('');
console.log('');
/*
Task:
Credit Card Validation

You're starting your own credit card business. You've come up with a new way to
validate credit cards with a simple function called validateCreditCard that
returns true or false.

Here are the rules for a valid number:

* Number must be 16 digits, all of them must be numbers
* You must have at least two different digits represented (all of the digits
  cannot be the same)
* The final digit must be even
* The sum of all the digits must be greater than 16


* The following credit card numbers are valid:

    9999-9999-8888-0000
    6666-6666-6666-1666

* The following credit card numbers are invalid:

    a923-3211-9c01-1112 - invalid characters
    4444-4444-4444-4444 - only one type of number
    1111-1111-1111-1110 - sum less than 16
    6666-6666-6666-6661 - odd final number

Example:
validateCreditCard('9999-9999-8888-0000'); // Returns: true
Hint: Remove the dashed from the input string before checking if the input
credit card number is valid.

Bonus: Return an object indicating whether the credit card is valid, and if not,
what the error is

{ valid: true, number: 'a923-3211-9c01-1112' }
{ valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }

Double Bonus: Make your credit card scheme even more advanced!
What are the rules, and what are some numbers that pass or fail?
Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.
*/

/*
references:
https://appendto.com/2016/02/replace-spaces-underscores-javascript/

regex references:
https://codeburst.io/javascript-learn-regular-expressions-for-beginners-bb6107015d91
https://eloquentjavascript.net/09_regexp.html
https://www.w3schools.com/jsref/jsref_obj_regexp.asp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions


regex utils:
https://stackoverflow.com/questions/27985084/javascript-check-if-string-contains-only-certain-character
https://www.regular-expressions.info/javascriptexample.html


parseInt:
https://stackoverflow.com/questions/1133770/how-do-i-convert-a-string-into-an-integer-in-javascript

*/


let CreditCard = {
  number:'',
  validity:false
};

// Checks # of digits







console.log('');
console.log('Credit Card Validation');
console.log('----------------------');


const validateCard = function(no){
  let passMuster = false;
  console.log(`start: ${no}`);

  // Operations
  // ----------
  // remove '-' character
  for (var i = 0; i < no.length; i++) {
    no = no.replace('-','');
  }
  console.log(`After removal: ${no}`);

  // get last char
  let lastChar = no[no.length-1];
  console.log(`Last char: ${lastChar}`);
  let lastDigit = parseInt(lastChar);
  console.log(`Last digit: ${lastDigit} of type: ${typeof(lastDigit)}`);


  // Checks
  // ------
  // check if all numbers are same
  let charRepeat = new RegExp('[0-9]{16}').test(no);
  console.log(`Repeating test result: ${charRepeat}`);

  // check length of string
  let len = no.length;
  let stringLength = false;
  console.log(`string length: ${len}`);
  if(len === 16){
    stringLength = true;
  }
  else{
    stringLength = false;
  }

  // check if last number is even
  let oddNo = lastDigit%2;
  let isEven;
  console.log(`oddNo; ${oddNo}`);
  if(oddNo){                     // is odd
    isEven = false;
  }
  else{
    isEven = true;
  }

  // check if total is > 16
  let bigEnough = false;
  let counter=0;
  let scratch;
  for (var i = 0; i < no.length; i++) {
    //console.log(`${no[i]} type: ${typeof(no[i])}`);
    scratch = parseInt(no[i]);
    //console.log(`${scratch} type: ${typeof(scratch)}`);
    //console.log(`parseInt: ${scratch}, type: ${typeof(scratch)}`);
    counter = scratch + counter;
    //console.log(`Total: ${counter}`);
  }
  //console.log(`Total: ${counter}`);
  if(counter > 16){                  // bigEnough
    bigEnough = true;
  }
  else{                              // not bigEnough
    bigEnough = false;
  }

  console.log(`Final tally:`);
  console.log(`Is string long enough?            ${stringLength}`);
  console.log(`Is the last number even?          ${isEven}`);
  console.log(`Is the total large enough?        ${bigEnough}`);
  console.log(`Is the last digit an even number? ${isEven}`);

  if(stringLength && isEven && bigEnough && isEven){
    passMuster = true;
  }
  else{
    passMuster = false;
  }
  return passMuster;
}

//let isCardValid = validateCard('1234-5678-9876-5433');
let isCardValid = validateCard('1111-1111-1111-1111');
//let isCardValid = validateCard('5555-5555-5555-5555');
//let isCardValid = validateCard('0000-0000-0000-0000');
//let isCardValid = validateCard('5555-5555-5555-5558');

console.log(`Is card valid? ${isCardValid}`);

console.log('');
console.log('');
console.log('');




/*
Task:
JavaScript Bank

In this homework, you'll create a basic bank in Javascript. The bank has many
accounts and the following capabilities that you need to write.

Bank:
There is only one bank. This bank has an array of accounts. The bank needs a
method that will return the total sum of money in the accounts. It also needs
an addAccount method that will enroll a new account at the bank and add it to
the array of accounts. There is no need to create additional functions of the
bank to delete accounts, etc.

The bank has many accounts. Accounts should be objects that all share a set of
common functionality.


Accounts:
Accounts have a current balance and owner's name. You should be able to deposit
or withdraw from an account to change the balance.

There is no need to write a user interface. Make sure functions return values
-- you may also have your functions console.log() values to help you see your
code working.

You should write a basic story through a series of JavaScript commands that
shows that the methods do indeed work as expected: add some accounts, show the
total balance, make some deposits and withdrawals, show the new total balance.


Tips:
Don't overthink this. Shorter code is probably the answer.


Bonus:
Ensure that the accounts cannot have negative values.
Write a 'transfer' on the bank that allows you to transfer amounts between
two accounts.


Additional:
Begin exploring the JavaScript Koans. Fork, clone and start trying them.
*/


let accounts = {
  owner:'',
  balance: 0,
  //transfer: function(){/* xfer $$ to someone's account */}
};

const createAccount = function(){
  this.owner = owner;
  this.balance = balance;
}
