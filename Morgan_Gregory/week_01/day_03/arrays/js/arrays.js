console.log('hello console');

// Array and Functions Bonus Material
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
const maxOfTwoNumbers = function (a, b) {
   return ( a > b ? a : b);
};
console.log( maxOfTwoNumbers(8, 7) );

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
const maxOfThree = function (a, b, c) {
  if (a > b && a > c) {
     return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
};
console.log( maxOfThree(89, 71, 10) );

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
const vowelFinder = function (char) {
  const vowel = ['a', 'e', 'i', 'o', 'u'];

  for ( let i = 0; i < char.length; i++) {
    if (char === vowel[i]) {
      return `${ char }`;
    } else {
      return `Not a vowel`;
    }
  }
};
console.log( vowelFinder('f') );

// Define a function sumArray and a function multiplyArray
// that sums and multiplies (respectively)
// all the numbers in an array of numbers.
// For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
const sumArray = function () {
  for (i = 0;  i < sums.length; i++)
  const sums = [1, 2, 3, 4];
};

const multiplyArray = function () {

};
