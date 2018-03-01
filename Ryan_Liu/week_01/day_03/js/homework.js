// ## Array and Functions Bonus Material

// 1. Define a function maxOfTwoNumbers that takes two numbers as arguments and
// returns the largest of them. Use the if-then-else construct available in Javascript.
// You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};

// 2. Define a function maxOfThree that takes three numbers as arguments and returns
// the largest of them.

const maxOfThree = function(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
};

// 3. Write a function that takes a character (i.e. a string of length 1) and returns
// true if it is a vowel, false otherwise.

const checkVowel = function(aString) {
  while (aString.length === 1) {
    if (aString === "a") {
      return true;
    } else if (aString === "e") {
      return true;
    } else if (aString === "i") {
      return true;
    } else if (aString === "o") {
      return true;
    } else if (aString === "u") {
      return true;
    } else {
      return false;
    }
  }

  return "Please enter string with one letter only";
};

// 4. Define a function sumArray and a function multiplyArray that sums and multiplies
// (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4])
//should return 10, and multiplyArray([1,2,3,4]) should return 24.

const sumArray = function(nums) {
  return nums.reduce(function(a, b) {
    return a + b;
  });
};

const multiplyArray = function(nums) {
  return nums.reduce(function(a, b) {
    return a * b;
  });
};

//## Bonus
// 5. Define a function reverseString that computes the reversal of a string.
// For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = function(aString) {
  let reversedString = "";

  for (let i = aString.length - 1; i >= 0; i--) {
    reversedString += aString[i];
  }
  return reversedString;
};

// 6. Write a function findLongestWord that takes an array of words and returns
// the length of the longest one.

const findLongestWord = function(words) {
  let wordsLength = [];
  for (let i = 0; i < words.length; i++) {
    wordsLength.push(words[i].length);
  }

  const max = wordsLength.reduce((a, b) => {
    return Math.max(a, b);
  });

  return max;
};

// 7. Write a function filterLongWords that takes an array of words and an
// number i and returns the array of words that are longer than i.

const filterLongWords = function(words, num) {
  let filteredWords = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > num) {
      filteredWords.push(words[i]);
    }
  }
  return filteredWords;
};

// ## The Word Guesser //


// Globals
const theWord = ["F", "O", "X"];
let guessedWord = ["", "", ""];
let reward = 0;
let accumPoint = 0;
let answerString = "";
let guessedString = "";

// Rest function to reset the game
const reset = function() {
  answerString = "";
  guessedString = "";
  guessedWord = ["", "", ""];
  reward = 0;
  accumPoint = 0;
};

// Get the theWord array and turn it into a string
const getAnswerString = function() {
  answerString = "";

  for (let i = 0; i < theWord.length; i++) {
    answerString += theWord[i];
  }
  return answerString;
}

// Get the guessedWord array and turn it into a string
const getGuessedString = function() {
  guessedString = "";

  for (let i = 0; i < guessedWord.length; i++) {
    guessedString += guessedWord[i];
  };
  return guessedString;
}

// Guess letter function
// ** Issue - Not picking up the guessed letter and update the guessedString first time running the function.
const guessLetter = function(letter) {

// Start by getting the current status
  getAnswerString();
  getGuessedString();

  console.log(answerString);
  console.log(guessedString);

// If the answerString and the guessedString are identical, reset the game and output the winning message, and exit the game
  if (answerString === guessedString) {
    reset();
    console.log(`You are the winner!`);
    return;
  };

// Otherwise, the game begins(continues)
  //iterating thru the theWord array
  for (let i = 0; i < theWord.length; i++) {

    // check if the guessed word has been answered before, and if not, check if the guessed word matches any word in the answer
    if (guessedWord[i] === "" && letter === theWord[i] ) {

      //if above condition meets, modify the "i" slot in the array with the guessed word
      guessedWord[i] = letter;

      //Update the reward point
      reward = reward + Math.floor(Math.random() * 10);

      //Update the accumulated reward
      accumPoint += reward;

      //console.log the status
      console.log(
        `You got the #${i +
          1} letter correct! You got ${reward} points, and total ${accumPoint} point so far`
      );
    } else if ( //check if the guessed word is in the answer and check the guessedWord array to see if it has ben guessed before
      guessedWord[i] === letter &&
      letter === theWord[i]
    ) {
      console.log("Nope, already got that one!");
    }
  }
  return guessedWord;
};
