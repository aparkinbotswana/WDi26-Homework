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


// console.log("connected")

const theWord = ["F", "O", "X"]
let guessedWord = ["-", "-", "-"]
let lettersLeft;

const guessLetter = function(letter) {

    for (let i = 0; i < theWord.length; i++) { //loop through theWord array
        if (theWord[i] === letter) { //if theWord letter matches the guessed letter
              guessedWord[i]=letter; //store the guessed letter in the guessedWord array
        }
      };

      if (guessedWord.toString() === theWord.toString()) { //convert guessedWord to a string and theWord to a string and see if they match
        lettersLeft = "no more"; //if they match store no more in lettersLeft
      } else {
        lettersLeft =  "more"; // else store more in lettersLeft
      };

  console.log(`Congratulations you found the letters... ${ guessedWord }. You have ${lettersLeft} letters to guess!`);

};

guessLetter("F");
guessLetter("M");
guessLetter("O");
guessLetter("X");




//   for (var i = 0; i < theWord.length; i++) {
//     if letter === theWord[i] {
//
//
//
//       // push the letter into array guessWord
//   //     // letterFound = true
//   //   }
//   //   //if letterFound {
//   //   // console.log(congratulations, guessWord);
//   // // }
//   // }
// }

// guessLetter();
