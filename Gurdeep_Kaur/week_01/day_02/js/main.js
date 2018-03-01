/*Define a function maxOfTwoNumbers that takes two numbers as arguments and
returns the largest of them. Use the if-then-else construct available in Javascript.
You'll have to remember your pre-work, or do some googling to figure this out.
Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel,
false otherwise.
Define a function sumArray and a function multiplyArray that sums and multiplies (respectively)
all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10,
 and multiplyArray([1,2,3,4]) should return 24.*/

 const maxOfTwoNumbers = function(a,b){

if( a<b ){
  return "largest";
}
else{
  return "nothing";
}
 };
 console.log( maxOfTwoNumbers(283,53));




 const maxOfThree = function(x,y,z){
   if( x>y ){
     return "this is the one largest  number";
   }
   else if( y>z ){
     return "this is the two largest number";
   }
   else if( z>x ){
     return "this is the three largest number";
   }
   else{
     return "nothing";
   }

 };
 console.log( maxOfThree(2888,78,459));


  const character = function (vowel) {
  if (vowel === "a","e","i","o","u") {
    return true;
  }
    else {
    return false;
    }
  };
character()



const sumArray = function(array){
  for (var i = 0; i < array.length ; i++) {
    return sum;
  }
  console.log(`${ sum }`);
};



const multipleArray = function(){

};





/*Create two global arrays: one to hold the letters
 of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters
 (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
Write a function called guessLetter that will:
Take one argument, the guessed letter.
Iterate through the word letters and see if the guessed letter is in there.
If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
When it's done iterating, it should log the current guessed letters ('F__')
and congratulate the user if they found a new letter.
It should also figure out if there are any more letters that need to be guessed, and if not,
it should congratulate the user for winning the game.
Pretend you don't know the word, and call guessLetter multiple times with various letters to check
that your program works.*/

const theWord = ["F","O","X"]
const theLetter = ["-","-","-"]

let guessLetter = function(letter){
  for (var i = 0; i < theWord.length; i++ ) {
      if( letter === theWord[i]){
        theWord[i] = letter;
        letterFound = true;
    }
console.log(`the current letter ${ i }`);
    }
    console.log(`congratulations you found the ${ theLetter }`);
    if( letter >= theWord[i]){
      console.log('need to guess');
    }
    else{
      console.log('hurrah! you win the game');
    }

  };
guessLetter()
