console.log('Homework Day03')
//Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function(num1,num2){
  if (num1 > num2){
  return num1;
} else {
  return num2;
}
}
console.log(maxOfTwoNumbers(2,1));
console.log(maxOfTwoNumbers(5,8));
console.log(maxOfTwoNumbers(1,10));


//Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
const maxOfThree = function (num1,num2,num3){
  if (num1 > num2 && num2 > num3){
    return num1;
  } else if (num2 > num3){
    return num2;
  } else {
    return num3;
  }
}

console.log(maxOfThree(1,2,3));
console.log(maxOfThree(1,10,3));
console.log(maxOfThree(1,10,10));
console.log(maxOfThree(12,25,35));

//Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const vowel = function(letter){
if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u"){
  return "true";
} else {
  return "false"
}
};

console.log(vowel("a"));
console.log(vowel("e"));
console.log(vowel("g"));
console.log(vowel("h"));


//Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

let sumArray = function(array){
x = 0
for (let i = 0; i < array.length; i++){
  x = array[i] + x
} return x
}

console.log(sumArray(1,2,3,4));
