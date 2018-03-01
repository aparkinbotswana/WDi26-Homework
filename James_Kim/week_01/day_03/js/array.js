console.log('hello');

/*Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.*/

const maxOfTwoNumbers = function (num1, num2) {
  if (num1 > num2) {
    const result = `'The larger number is ${num1}'`
    console.log(result);
    return result;
  } else {
    const result = `'The large number is ${num2}'`
    console.log(result);
    return result;
  }
}

maxOfTwoNumbers(1, 2);
maxOfTwoNumbers(67, 42);
maxOfTwoNumbers(58, 45);

/*Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.*/

const maxOfThreeNumbers = function (num1, num2, num3) {
  if (num1 > num2 && num2 > num3) {
    const result = `'The largest number is ${num1}'`
    console.log(result);
    return result;
  } else if (num2 > num3 && num3 > num1) {
    const result = `'The largest number is ${num2}'`
    console.log(result);
    return result;
  } else if (num3 > num2 && num2 > num1) {
    const result = `'The largest number is ${num3}'`
    console.log(result);
    return result;
  }
}

maxOfThreeNumbers(1, 2, 3);
maxOfThreeNumbers(15, 56, 4);
maxOfThreeNumbers(24, 2, 5);


/*Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.*/

const character = function (vowel) {
  if (vowel === 'A' || 'E' || 'I' || 'O' || 'U' ) {
    return true;
  } else {
    return false;
  }
}

console.log(character('A'));
console.log(character('B'));
console.log(character('C'));
