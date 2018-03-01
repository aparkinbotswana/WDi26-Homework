// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million.

let DrEvil = function (amount) {
  if (amount === 1000000) {
      console.log(`${amount} dollars (pinky)`);

} else {
    console.log(`${amount} dollars`);
  };
}

DrEvil(1000000);

// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

let mixUp = function (string1, string2) {
  newString1 = string1.replace(string1[0], string2[0]).replace(string1[1], string2[1]); // Make a new string which swaps the first letter of the first string with the first letter of the second string etc.
  newString2 = string2.replace(string2[0], string1[0]).replace(string2[1],string1[1]);
    console.log(newString1, newString2);
};

mixUp('mix', 'pod');
mixUp('dog', 'dinner');

// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:


let fixStart = function (str) {
  withoutFirst = str.substring(1); // Make a string which does not contain first letter of original string
  replacedStr = withoutFirst.split(str[0]).join("*"); // Had to use .split(thingBeingReplaced).join(replaceWithThis) instead of .replace(this,withThis) because it wouldn't replace for every instance even when trying with global modifier
  console.log(str[0] + replacedStr);
};

fixStart('babble');



// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:

let verbing = function (words) {
  if (words.length >= 3 && words.slice(-3) !== 'ing') {
  console.log(words + 'ing');
} else if (words.slice(-3) === 'ing') { // If the last 3 words are 'ing'
  console.log(words + 'ly');
} else if (words.length < 3) {
  console.log(words);
};
};

verbing('swimming');

// Create a function called notBad that takes a single argument, a string.
//
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.

let notBad = function (sentence) {
  let n = sentence.indexOf("not"); // Find the first instance of "not" (i.e. give me the index)
  let b = sentence.indexOf("bad"); // Find the first instance of "bad" (i.e. give me the index)
  if (b > n && sentence.indexOf("not") !== -1) { // If the first instance of "bad" is after the first instance of "not" and the word "not" appears...
var sub = sentence.replace(/not.*bad/, 'good'); // Make a substring that replaces everything between 'not' and 'bad' (including 'not' and 'bad') with 'good'.
console.log(sub); // Print your new substring
} else {
  console.log(sentence);
};
};

notBad('This movie is not so bad!');
notBad('This dinner is not that bad!');
notBad('This dinner is bad!');
