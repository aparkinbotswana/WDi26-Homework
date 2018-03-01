// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'),
// and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed
// And if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.



const wordLetters     = ['P', 'H', 'O', 'N', 'E'];
let guessedLetters  = ['_', '_', '_', '_', '_'];

const guessLetter = function(letter) {
    let goodGuess = false;
    let moreToGuess = false;
    for (let i = 0; i < wordLetters.length; i += 1) {
        if (wordLetters[i] === letter) {
            guessedLetters[i] = letter;
            goodGuess = true;
        }
        if (guessedLetters[i] === '_') {
            moreToGuess = true;
        }
    }
    if (goodGuess) {
        console.log('Excellent! You found a letter!');
        console.log(guessedLetters.join(''));
        if (!moreToGuess) {
            console.log('You won the game!');
        }
    } else {
        console.log('Sorry, try again!');
    }
}

guessLetter('P');
guessLetter('a');
guessLetter('H');
guessLetter('O');
guessLetter('N');
guessLetter('P');
guessLetter('E');
guessLetter('Q');
guessLetter('Z');

// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them.
// Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.


const maxOfTwoNumbers = function (num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}


// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
const maxOfThree = function (i, j, k) {
  if (i > j && i > k) {
    return i;
  } else if (j > i && j > k) {
    return j;
  } else {
    return k;
  }
}

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
const character = function (vowel) {
  if (vowel === ('a' || 'e' || 'i' || 'o' || 'u') {
    return true;
  } else {
    return false;
  }
}


// // Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers.
// For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
// const sumArray = function
