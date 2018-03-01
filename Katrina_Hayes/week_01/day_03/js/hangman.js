// Bonus: Make it like Hangman:
// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.

const guessTracker = [];
const theWord = ['S', 'E', 'A'];
const yourAttempt = ['_', '_', '_'];
let hangman = 0;

const guessLetter = function(guess) {
  for (let i = 0; i < guessTracker.length; i++) {
    if (guess === guessTracker[i]) {
      alreadyGuessed = true;
    } else {
      guessTracker.push(guess);
    }
  }
  let blanksFilled = 0
  for (let i = 0; i < theWord.length; i++) {
    if (guess === theWord[i]){
      yourAttempt[i] = theWord[i]; //push into guessedLetters array into that same position
      blanksFilled = blanksFilled + 1;
    }
  }
  if (blanksFilled > 0) {
    console.log("Congratulations, you found a new letter.");
  } else {
    hangman = hangman + 1;
    console.log(`Nope, that's not a correct letter. Hangman status: ${hangman} out of max 6.`);
  }
  console.log(`Here's where you're now at: ${yourAttempt[0]}${yourAttempt[1]}${yourAttempt[2]}`);
  if (theWord.toString() === yourAttempt.toString()) {
    console.log("Congratulations, you've won the game.");
  }
  if (hangman === 6) {
    console.log("Sorry, you've been hanged.");
  }
}

guessLetter('E');
guessLetter('S');
guessLetter('X');
guessLetter('A');
