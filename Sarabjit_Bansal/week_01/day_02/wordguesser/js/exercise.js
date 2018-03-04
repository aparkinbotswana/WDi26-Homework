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
const arr1 =['F', 'O', 'X', 'O','F','O','X'];
const arr2 = [];
let rewardAmt =0;

//let ctr =0;
const guessLetter = function(guessedLetter) {
let letterFound = 0;
let ctr =0;
let randomRes =1;
let randomno= Math.floor(Math.random()+10);

for (let i = 0; i < arr1.length; i ++)
{
    if (arr1[i] === guessedLetter)
    {
      arr2[i] = arr1[i];
      letterFound = 1;
      randomRes = randomRes * randomno
    }
    if (arr1[i] === arr2[i]) // if both the arrays are same , update counter ctr
      { ctr ++ ;
      }
  }

  if (letterFound === 1 ) {
    console.log(`Congrats, ${guessedLetter} is correct!`);
    rewardAmt = rewardAmt+randomRes;
  }
  else {
    console.log(`Incorrect Letter: ${guessedLetter}, please try again.`);
    rewardAmt = rewardAmt-randomno;
  }

  if (arr1.length === ctr) // if length o counter and teh array is same - arrays matched
  {
    if (rewardAmt >0)
     { console.log(`Congratulations!! for winning this game. Your final reward amount is ${rewardAmt}`); }
     else{ console.log(`Congratulations!! for winning this game.`); }

    //ctr = 0; // it stucks incase page is not refreshed
  }
  else {
    console.log(`There are more letters to be guessed.`);
  }
};
guessLetter('O');
guessLetter('X');
guessLetter('A');
guessLetter('F');
