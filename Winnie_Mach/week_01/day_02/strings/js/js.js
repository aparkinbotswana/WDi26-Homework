console.log("testing 123");
// These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.

/* DrEvil
Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
DrEvil(10): 10 dollars
DrEvil(1000000): 1000000 dollars (pinky) */

const DrEvil = function(amount) {
  let cost;
  if(amount === 1000000) {
  cost = `${amount} dollars (pinky)`;
  } else if(amount === 1) {
    cost = `${amount} dollar`;
  } else {cost = `${amount} dollars`;
  }
    console.log(cost);
    return cost;
  };

DrEvil(1000000);
DrEvil(50);
DrEvil(1);

/* MixUp
Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

  mixUp('mix', 'pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'*/

const mixUp = function(string1, string2) {
  const stringStart1 = string1.slice(0,2); //Extracts first 2 characters of string1
  const stringStart2 = string2.slice(0,2);//Extracts first 2 characters of string2 (can use split function instead?)
  const stringEnd1 = //How to get the remainder of the string?
  const stringEnd2 =
  const swapStrings = stringStart1 + stringEnd2 + stringStart2 + stringEnd1
  console.log(swapStrings);

};
mixUp('because', 'toothpaste');


/*FixStart
Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:

fixStart('babble'): 'ba**le'*/
const fixStart = function(string1) {  //String.prototype.match() & string.prototype.replace()


/*Verbing
Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:

  verbing('swim'): 'swimming'
  verbing('swimming'): 'swimmingly'
  verbing('go'): 'go'*/

  const verbing = function(string1) {
    let ending;
    let ing = 'ing';
    if(string1.length >= 3) {
      let ending = `${string1}ing`;
    } else if(string1.endsWith(ing)) { //either indexOf or .endsWith
      let ending = `${string1}ly`;
    } else if(string1.length < 3) {
      let ending = string1;
    }
    console.log(ending);
  };

  verbing('swim');
  verbing('swimming');
  verbing('go');


// Not Bad
// Create a function called notBad that takes a single argument, a string.
//
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:
//
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'
