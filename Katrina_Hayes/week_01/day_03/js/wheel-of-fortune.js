// Bonus: Make it more like Wheel of Fortune:
// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.



let rewardAmount = 500;
console.log(`You're starting with an amount of $${rewardAmount} to play with. Guess your letters.`);
const theWord = ['S', 'E', 'A'];
const guessedLetters = ['_', '_', '_'];

const guessLetter = function(guess) {
  let blanksFilled = 0
  for (let i = 0; i < theWord.length; i++) {
    if (guess === theWord[i]){
      guessedLetters[i] = theWord[i]; //push into guessedLetters array into that same position
      blanksFilled = blanksFilled + 1;
    }
  }
  if (blanksFilled > 0) {
    console.log("Congratulations, you found a new letter.");
  } else {
    console.log("Bown bown. Not a letter.");
  }
  console.log(`Here's where you're now at: ${guessedLetters[0]}${guessedLetters[1]}${guessedLetters[2]}`);
  if (blanksFilled > 0) {
    rewardAmount = rewardAmount + (100 * blanksFilled);
  }
  if (blanksFilled === 0) {
    rewardAmount = rewardAmount - 100;
  }
  if (theWord.toString() === guessedLetters.toString()) {
    console.log("Congratulations, you've won the game.");
  }
  console.log(`You now have ${rewardAmount} bucks.`);
}

guessLetter('E');
guessLetter('S');
guessLetter('X');
guessLetter('A');
