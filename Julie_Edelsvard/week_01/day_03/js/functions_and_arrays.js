// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns
// the largest of them. Use the if-then-else construct available in Javascript.
// You'll have to remember your pre-work, or do some googling to figure this out.
//
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
//
// Write a function that takes a character (i.e. a string of length 1) and returns
// true if it is a vowel, false otherwise.
// Define a function sumArray and a function multiplyArray that sums and multiplies
// (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4])
// should return 10, and multiplyArray([1,2,3,4]) should return 24.


const maxOfTwoNumbers = function(x, y) {
  if (x > y) {
    console.log(`The largest number is ${ x }`);
    return x
    }

    else {
      console.log(`The largest number is ${ y }`)
      return y
    }
  };

  maxOfTwoNumbers(20, 40);
let c = maxOfTwoNumbers(20,40)



// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function(x, y, z) {
  let a = maxOfTwoNumbers(x, y);
  let b = maxOfTwoNumbers(a, z);
  return b
}

let c = maxOfThree(20, 50, 60);
console.log(c);



// Write a function that takes a character (i.e. a string of length 1) and returns
// // true if it is a vowel, false otherwise.

const vowel = function (char) {
  if (char === ('e') || ('a') || ('o') || ('i') || ('u')) {
    console.log(`${true}`);
    return true

  } else {
    console.log(`${false}`);
    return false
  }

};

vowel('a');



// Define a function sumArray and a function multiplyArray that sums and multiplies
// (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4])
// should return 10, and multiplyArray([1,2,3,4]) should return 24.


const sumArray = function (array) {
 var array = [1, 2, 3, 4];
 var total = 1;
  for (var i = 0; i < array.length; i++) {
    sum = sum + array[i];
    return sum
  }
  console.log(sumArray(array));
}

sumArray(sum);


const multiplyArray = function (array) {
 var array [1, 2, 3, 4];
 var total = 1;
  for (var i = 0; i < array.length; i++) {
    sum = sum * array[i];
    return sum
  }
}

sumArray(array);
