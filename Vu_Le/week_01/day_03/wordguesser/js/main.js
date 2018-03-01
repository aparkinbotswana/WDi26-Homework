console.log('Homework Day03')


//Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
//Write a function called guessLetter that will:
//Take one argument, the guessed letter.
//Iterate through the word letters and see if the guessed letter is in there.
//If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
//When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
//It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
//Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
//You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

let theWord = ["F", "0", "X"]
let guessWord = ["_","_","_"]

  let guessLetter = function(letter){
  let correct = false;
  let incorrect = false;

  for (var i = 0; i < theWord.length; i++){
     if (letter == theWord[i]) {
      letter = guessWord[i];
      correct = true;
  }
  if (guessWord[i] == "_"){
    incorrect = true;
  }
  }
  if (correct){
    console.log("Congratulations");
    console.log(guessLetter(''));
   if (!incorrect) {
    console.log("win");
  }
} else {
  console.log ("try again");
}
}

guessLetter("F");
guessLetter("O");
guessLetter("D");
guessLetter("X");
