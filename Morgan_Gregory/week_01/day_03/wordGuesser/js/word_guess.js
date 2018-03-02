// console.log('testing tesing one two three');

// Homework: The Word Guesser
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

const secretWord = ["F", "O", "X"];
let guessedLetters = ["", "", ""];

const wordGuesser = function(letter) {

  // const letter = letter.toUpperCase(); // trying to turn user ingput (letter) into uppercase so any correct letter works - but method not working ********* ???? ************

  for (let i = 0; i < secretWord.length; i ++) { // Iterate through the secretWord array
    if (letter === secretWord[i]) { // see what has been passed into the wordGuesser function matches the charachters in the secretWord array
      guessedLetters[i] = letter; // assign what is passed into the wordGuesser function (letter) to the empty array guessedLetters
      console.log(`${ guessedLetters.join('') } is correct`); // let the player know when they have passed in a correct (matching letter)
      }
  }
  // LOGIC BELOW: can be used instead of trying to match two strings using ===
  const result = guessedLetters.join(''); // turn guessedLetters into a string without commas and store in variable result
  if (result.includes('FOX')) { // .includes() method checks to see if it is true that the variable result contains the word FOX
    console.log(`Congratulations you have guessed the secret word: ${ result }`); // if true the player has guessed the secret word
  } else { // otherwise is false so player should keep playing
    console.log('keep playing');
  }
};
wordGuesser();
