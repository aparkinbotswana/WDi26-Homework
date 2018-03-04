// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function (num1,num2) {
  if (num1>num2) {
    return num2
  }
  else {
    return num1
  }
};

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.\


const maxOfThreeNumbers = function (num1,num2,num3) {
        return Math.max(num1,num2,num3);
};


console.log(maxOfThreeNumbers(20,40,100));



// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.


const vowels = ['a','e','i','o','u',];

const vowelFinder = function (letter) {

    if (vowels.indexOf(letter) === -1) { // The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
      return false;
    }
    else {
      return true;
    }
  }


vowelFinder('k');

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
