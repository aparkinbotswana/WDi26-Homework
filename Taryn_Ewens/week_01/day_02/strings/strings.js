// DrEvil
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)
// console.log("Javascript is working!")

console.log("-------");
console.log("DrEvil RESULTS");

const DrEvil = function(amount) {
  if (amount < 1000000) {
    return `${ amount } dollars`
  } else {
    return `${ amount } dollars (pinky)`
  }
};

console.log(DrEvil(5));
console.log(DrEvil(5000000));
console.log(DrEvil(5000));
console.log(DrEvil(50000000));


// MixUp
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!
//

console.log("-------");
console.log("MixUp RESULTS");

const mixUp = function(string1, string2) {
  const string1v2 = string2.slice(0, 2) + string1.slice(2, );
  const string2v2 = string1.slice(0, 2) + string2.slice(2, );
  const total = string1v2 + " " + string2v2;
  return total;
}

console.log(mixUp("mix", "pod"));
console.log(mixUp("dog", "dinner"));

//
// FixStart
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'
//
//

console.log("-------");
console.log("FixStart RESULTS");

const fixStart = function(string) {
  const firstLetter = string[0]; // will return B
  // console.log(firstLetter); // checking it works

  const newStr = string.split(firstLetter).join('*');

  const finalString = string.slice(0, 1) + newStr.slice(1, );
  console.log(finalString);

};

fixStart("babble");
fixStart("dadda");
fixStart("tattle");

//
// Verbing
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
//
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

console.log("-------");
console.log("Verbing RESULTS");

const verbing = function(string) {
  var checkForIng = function () {
    return string.endsWith('ing');
  };

  if (string.length < 3) {
    console.log(string);
  }
  else if ((string.length > 3) && (checkForIng() === false)) {
    console.log(`${ string }ing`);
  }
  else if ((string.length > 3) && (checkForIng() === true)) {
    console.log(`${ string }ly`);
  }
};

verbing("swimm");
verbing("swimming");


//
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
console.log("-------");
console.log("Not Bad RESULTS");

const notBad = function(string) {

const noOfNot = (string.indexOf("not"));
// console.log(noOfNot);
const noOfBad = (string.indexOf("bad"));
// console.log(noOfBad);

var str2 = string.replace(/(([^\s]+\s\s*){3})(.*)/,"$1good!");
// document.write(str2); // writes on page

if ((noOfNot < noOfBad) && (noOfNot > 0) && (noOfBad > 0)) {
  console.log(str2);
}
 else if (noOfNot > noOfBad) {
    console.log(string);
} else {
  console.log(string);
}
};

notBad('This dinner is not that bad!');
notBad('This movie is not so bad!');
notBad('This dinner is bad!');
notBad('This apartment is bad!');
notBad('This television is not that bad!');
notBad('This cat is not that bad!');
