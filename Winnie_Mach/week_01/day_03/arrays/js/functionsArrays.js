console.log('testing');
// Array and Functions Bonus Material


// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
const maxOfTwoNumbers = function(num1, num2) {
  if(num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};
console.log(maxOfTwoNumbers(5, 6));
console.log(maxOfTwoNumbers(2000, 3544));

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
const maxOfThree = function(x, y, z) {
  if(x > y && x > z) {
    return x;
  }
  if(y > x && y > z) {
    return y;
  }
  if(z > x && z > y) {
    return z;
  }
};

console.log(maxOfThree(1, 2, 3));
console.log(maxOfThree(69, 2122, 5));
console.log(maxOfThree(85, 45, 17));

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
const vowel = function(character) {
  if(character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u' ) {
    return true;
  } else if (character === 'A' || character === 'E' || character === 'I' || character === 'O' || character === 'U' ) {
    return true;
  } else {
    return false;
  }
};
console.log(vowel('a'));
console.log(vowel('p'));
console.log(vowel('o'));
console.log(vowel('K'));
console.log(vowel('I'));

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
const myArray = [5, 1, 5, 0]
const sumArray = function(myArray) {
  const sum = (myArray[0] + myArray[1] + myArray[2] + myArray[3]);
  return sum;
}
console.log(sumArray(myArray));

const multiplyArray = function(myArray) {
  const multiply = (myArray[0] * myArray[1] * myArray[2] * myArray[3]);
  return multiply;
}
console.log(multiplyArray(myArray));


// Bonus
// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
let phrase; //the Array
const reverseString = function(string) {
  phrase = string.split(""); //splits string into separate indices: "H" "e" "l" "l" "o" "W" "o" "r" "l" "d"
  phrase.reverse(); //reverse the array: "d" "l" "r" "o" "W" "o" "l" "l" "e" "H"
  string = phrase.join(''); //combines the arrays into a string again: dlroW olleh
  return string;
}
console.log(reverseString("Hello World"));
// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
let word;
const findLongestWord = function(array) {

}
// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.
