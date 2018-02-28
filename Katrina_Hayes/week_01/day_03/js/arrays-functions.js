// Array and Functions Bonus Material
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

console.log("EXERCISE 1");
const maxOfTwoNumbers = function(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
// test this out:
console.log(maxOfTwoNumbers(4,5));
console.log(maxOfTwoNumbers(7,3));
console.log(maxOfTwoNumbers(1,1));

console.log("EXERCISE 2");
const maxOfThree = function(num1, num2, num3) {
  if ((num1 > num3) && (num1 > num3)) {
    return num1;
  } else if ((num2 > num1) && (num2 > num3)) {
    return num2;
  } else {
    return num3;
  }
}
//test this out:
console.log(maxOfThree(10,2,3));
console.log(maxOfThree(1,7,5));
console.log(maxOfThree(1,1,4));
console.log(maxOfThree(1,1,1));

console.log("EXERCISE 3");
const vowelList = ["a","e","i","o","u"];
const vowelCheck = function(character) {
  for (let i = 0; i < vowelList.length; i++) {
    if (character === vowelList[i]) {
      return true;
    } else {
      return false;
    }
  }
}
//test this out:
console.log(vowelCheck("s"));
console.log(vowelCheck("a"));

console.log("EXERCISE 3 - REGEX");
const vowelChecker = function(character) {
    if (/[aeeiou]/gi.test(character)) {
      return true;
    } else {
      return false;
    }
  }
//test this out:
console.log(vowelChecker("s"));
console.log(vowelChecker("a"));

console.log("EXERCISE 4");
const numbers = [1,2,3,4,5];
const sumArray = function() {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i]
  } return sum;
}
//test this out:
console.log(sumArray());

const multiplyArray = function() {
  let multiplication = 1;
  for (let i = 0; i < numbers.length; i++) {
    multiplication = multiplication * numbers[i];
  } return multiplication;
}
//test this out:
console.log(multiplyArray());
