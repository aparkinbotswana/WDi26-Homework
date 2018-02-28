// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

let maxOfTwoNumbers = function (num1, num2) {
  if (num1 > num2) {
  console.log(`${num1}`);
  return num1;
}
else {
  console.log(`${num2}`)
  return num2;
};
};

maxOfTwoNumbers(2,3);

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

let maxOfThree = function (n1, n2, n3) {
  if (n1 > n2 && n1 > n3) {
    console.log(n1);
  }
  else if (n2 > n3 && n2 > n1) {
    console.log(n2);
  }
  else if (n3 > n2 && n3 > n1) {
    console.log(n3);
  }
}

maxOfThree(5,2,7)
maxOfThree(0,15,11)

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

let vowel = ['a','e','i','o','u'];
let vowelOrNot = function (letter) {
  if (letter === vowel[0] || letter === vowel[1] || letter === vowel[2] || letter === vowel[3] || letter === vowel[4]) { // Will need to think of a better way to do this for a very long word
  console.log('true');
} else {
  console.log('false');
}
}

vowelOrNot('e');
vowelOrNot('b');

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

let numbers = [1,2,3,4];
let sumArray = function (numbers) {
  result = numbers[0] + numbers[1] + numbers[2] + numbers[3];
  console.log(`${result}`);
}
sumArray(numbers);

let multiplyArray = function (numbers) {
  result = numbers[0] * numbers[1] * numbers[2] * numbers[3];
  console.log(`${result}`);
}
multiplyArray(numbers);
