// Array and Functions Bonus Material

// Define a function maxOfTwoNumbers that takes two numbers as arguments
// and returns the largest of them.
// Use the if-then-else construct available in Javascript.
// You'll have to remember your pre-work, or do some googling to figure this out.
//
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// Write a function that takes a character (i.e. a string of length 1)
// and returns true if it is a vowel, false otherwise.
//  Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers.
// For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
//
// // Bonus
// // Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// // Write a function findLongestWord that takes an array of words and returns the length of the longest one.
// // Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.
//console.log('hello');

const maxOfTwoNumbers = function (numberOne, numberTwo){
  //console.log('hellotop');

  if (numberOne > numberTwo){
    //console.log('hello1');
    return numberOne;
  }else if (numberOne < numberTwo){
    //console.log('hello2');
    return numberTwo;
  }
};
  console.log(`The greater number is ${maxOfTwoNumbers(5, 10)}`);


const maxOfThree = function (a,b,c){
if (a>b) {
  if (a>c) {
    console.log(a);
  }
}
else {
  if (b>c){
    console.log(b);
  }
else { console.log( c );
}
}
}
maxOfThree (1,20,3);
