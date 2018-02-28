console.log('testing');
// https://gist.github.com/wofockham/61148df9403b3cfc2138
/*

Array and Functions Bonus Material

Define a function sumArray and a function multiplyArray that sums and multiplies
(respectively) all the numbers in an array of numbers. For example,
sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

*/

let no1;
let no2;
let no3;


/*
01 maxOfTwoNumbers

Define a function maxOfTwoNumbers that takes two numbers as arguments and
returns the largest of them. Use the if-then-else construct available in
Javascript. You'll have to remember your pre-work, or do some googling to
figure this out.
*/

maxOfTwoNumbers = function(x, y){
  if(x>y){
    return x;
  }
  if(y>x){
    return y;
  }
  else{
    return "error";
  }
}
no1 = 2;
no2 = 3;

console.log('');
console.log(`maxOfTwoNumbers`);
console.log(`---------------`);
console.log(`The max of ${no1} and ${no2} is ${maxOfTwoNumbers(no1,no2)}`);

/*
02 maxOfThree

Define a function maxOfThree that takes three numbers as arguments and returns
the largest of them.
*/

maxOfThree = function(x,y,z){
  if(x>y){                        // x is larger than y
    if(x>z){                      // x is larger than z
      return x;                   // x largest
    }
    else {                        // z larger than x
        return z;                 // z largest
    }
  }
  else{                           // y is larger than x
    if(y>z){                      // y is larger than z
      return y;                   // y largest
    }
    else{                         // z larger than y
      return z;                   // z largest
    }
  }
}
no1 = 6;
no2 = 5;
no3 = 3;

console.log('');
console.log('');
console.log('maxOfThree');
console.log('----------');
console.log(`The max of ${no1}, ${no2} and ${no3} is ${maxOfThree(no1,no2,no3)}`);

/*
03 checkVowel

Write a function that takes a character (i.e. a string of length 1) and returns
true if it is a vowel, false otherwise.
*/
console.log('');
console.log('');
console.log('checkVowel');
console.log('----------');
checkVowel = function(char){
  char = char.toLowerCase();
  if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
    return true;
  }
  else{
    return false;
  }
}
let vChar = "p";
console.log(`Is the letter ${vChar} a vowel? ${checkVowel(vChar)}`);


 // or we can use:
 // var max = Math.max(num1, num2, num3);
/*

Bonus
-----

Define a function reverseString that computes the reversal of a string.
For example, reverseString("jag testar") should return the string "ratset gaj".

Write a function findLongestWord that takes an array of words and returns the
length of the longest one.

Write a function filterLongWords that takes an array of words and an number i
and returns the array of words that are longer than i.

*/

/*
Homework: The Word Guesser

You'll create a simple word guessing game where the user gets infinite tries to
guess the word (like Hangman without the hangman, or like Wheel of Fortune
without the wheel and fortune).

Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'),
and one to hold the current guessed letters
(e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').

Write a function called guessLetter that will:
- Take one argument, the guessed letter.
- Iterate through the word letters and see if the guessed letter is in there.
- If the guessed letter matches a word letter, changed the guessed letters
  array to reflect that.
- When it's done iterating, it should log the current guessed letters ('F__')
  and congratulate the user if they found a new letter.
- It should also figure out if there are any more letters that need to be
  guessed, and if not, it should congratulate the user for winning the game.
- Pretend you don't know the word, and call guessLetter multiple times with
  various letters to check that your program works.
*/

/*
References:
https://stackoverflow.com/questions/30767875/prompt-user-for-specific-input-loop-and-prompt-until-correct-input-is-entered
https://stackoverflow.com/questions/33089739/javascript-for-loop-console-print-in-one-line

*/
console.log('');
console.log('');
console.log('Word Guesser');
console.log('------------');

// Initialisation
const word = ['a','b','r','a','c','a','d','a','b','r','a']; //word to be guessed
let guessWord=[''];                        //scratch array
for(i=0; i<=word.length-1; i++){
  guessWord[i]=`_`;
}
//for(i=0; i<word.length-1; i++){          //make scratch same as word but all...
//  guessWord[i]=0;                        // ...zeroes
//}
let charsLeft = word.length;             //counter for how many array elements left to guess
let complete=false;                      //has user guessed the word?

// Checks array, fills in correct elements
const checkLetter = function(char){
  char=char.toLowerCase();                        
  //console.log(char);
  for(i=0; i<=word.length-1; i++){
    if((char === word[i])  && (guessWord[i]==='_')){

      console.log(`word[${i}]:      ${word[i]}`);
      console.log(`guessWord[${i}]: ${guessWord[i]}`);

      //console.log(`Element: ${i}`);
      charsLeft--;
      guessWord[i]=char;
    }
  }
  console.log(`${charsLeft} slots to guess`);
  //console.log(charsLeft);

  let s = '';
  for(i=0; i<guessWord.length; i++){
    s += guessWord[i];
    s += ' ';
  }
  console.log(s);


}


while(charsLeft>0){
  var input = prompt("Give me a letter:");
  if(input==='*'){
    break;
  }
  checkLetter(input);


}




/*
Bonus: Make it more like Wheel of Fortune:

Start with a reward amount of $0
Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
When they guess the word, log their final reward amount.
Bonus: Make it like Hangman:

Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.

*/
