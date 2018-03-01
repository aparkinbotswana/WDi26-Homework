// // Array and Functions Bonus Material
// // Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
// // Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// // Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// // Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
//


const maxOfTwoNumbers = function(num1, num2) {
  if (num1 > num2){
    result = num1;
  }else {
    result = num2;
  }
    console.log(result);
}
maxOfTwoNumbers(4,5);



const maxOfThree = function(a, b, c){
  if (a>b && a>c){
    big = a;
  } else if (b > a && b > c) {
    big = b;
  } else if (c >a && c > b) {
    big = c;
  }
    console.log(big);
  }
maxOfThree(2,3,4);


const isVowel = function (letter) {
  if (letter === ('a') || letter === ('e') || letter === ('i') || letter === ('o') || letter === ('u')) {
    result = true;
    return true;
  } else {
    result = false;
    return false;
  }
  console.log(result);
}



const sumArray = [1, 2, 3, 4];
const reducer = ((a, b) => a + b);
console.log(sumArray.reduce(reducer));



// Homework: The Word Guesser
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.


const answer = ["f", "o", "x"];
let guess = ["-", "-", "-"];

const guessedLetter = function(letter){

  for (let i = 0; i < answer.length; i++) {
      if (letter === "f") {
      guess.splice(0,1,letter);
      console.log(`correct ${guess}`);
      break;
    }
    if (letter === "o") {
      guess.splice(1,1,letter);
      console.log(`correct ${guess}`);
      break;
    }
    if (letter === "x") {
      guess.splice(2,1,letter);
      console.log(`correct ${guess}`);
      break;
    }
    else {
      console.log(`incorrect, guess again`);
    }
      break;
  }


      if ((letter === ("x")) && (letter === ("f")) && (letter ===("o")) ) {
      console.log(`You are the winner`);
    }
      else {

      }
}
