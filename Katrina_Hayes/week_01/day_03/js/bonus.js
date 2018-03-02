// Bonus
// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.

console.log("EXERCISE 1"); //for ease of viewing in console

const reverseString = function(string) {
  let stringReversed = ""; //trying to create empty string, but I think it needs to know the length it should be somehow
  let newPosition = string.length - 1; //trying to give each character it's new position from the end of the string
  console.log(newPosition); //this is a test log
  for (let i = 0; i < string.length; i++) {
    console.log(i); //this is logging the position number but I want the character itself...argh!
    stringReversed[newPosition] = i; //not sure how to do this - I want to put whatever is in string[i] into the last position of the new string, but that new string doesn't have a set number of positions yet...
  }
  newPosition = newPosition - 1;
  return stringReversed;
}
//test this out:
console.log(reverseString("wake"));

console.log("EXERCISE 2"); //for ease of viewing in console

const findLongestWord = function(arrayOfWords) {
  let bigLengthSoFar = 0;
  let longestWordSoFar = "";
  for (let i = 0; i < arrayOfWords.length; i++) {
    if (arrayOfWords[i].length > bigLengthSoFar) {
      bigLengthSoFar = arrayOfWords[i].length;
      longestWordSoFar = arrayOfWords[i];
    }
  } return longestWordSoFar;
}
//test this out:
const wordList = ["wait", "stop", "go", "sprint"]
console.log(findLongestWord(wordList));

console.log("EXERCISE 3"); //for ease of viewing in console

const filterLongWords = function(words, maxLength) {
  let newWords = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length <= maxLength) {
      newWords.push(words[i]);
    }
  } return newWords;
}
//test this out:
const words = ["witch", "wizard", "witchcraft", "wizardry"];
console.log(filterLongWords(words, 8));
