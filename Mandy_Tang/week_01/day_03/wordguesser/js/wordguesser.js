const word = ['F','O','X']; // Word you are trying to guess
let elementsToRemove = 1;
let guessedLetters = ['_', '_', '_']; // Words you've already guessed
let wordString = JSON.stringify(word); // Make the word array into a string so we can compare it
let guessedString = JSON.stringify(guessedLetters); // Make the guessedLetters array into a string so we can compare it

let guessLetter = function (letter) { // Letter is the argument we're passing in - i.e. the letters we guess
  for (let i = 0; i < word.length; i++) { // For loop syntax
  if (letter === word[i]) {  // When the letter you guess appears in the word...
    guessedLetters.splice(i, elementsToRemove, letter); // Replace the _ in the guessedLetters array with the correctly guessed letter
    console.log(`Good guess! Here's your word so far: ${guessedLetters}`); // Display the letters found so far
  }
  // Commented out below attempts to show the 'Congratulations' message when the whole word has been guessed
  // if (wordString === guessedString) {  // Broken logic
  //   result = 'You did it!';
  //   console.log(result);
  //   return result;
  // }
  }
}

// let finished = function (wordString, guessedString) {  // More code that doesn't work
//   if (wordString !== guessedString) {
//   result = 'yes';
// } else {
//   result = 'no';
// }
//   if (result === 'yes') {
//   console.log('You did it!');
//   return result;
// }
//}

//finished(wordString, guessedString);

guessLetter('F');
guessLetter('E');
guessLetter('O');
guessLetter('R');
guessLetter('T');
guessLetter('X');
