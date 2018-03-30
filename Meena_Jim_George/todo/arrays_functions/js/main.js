/*Array and Functions Bonus Material
Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/

/*Bonus

Write a function filterLongWords that takes an array of words and an number i and
returns the array of words that are longer than i.*/



//Write a function findLongestWord that takes an array of words and returns the length of the longest one.
const findLongestWord= function(arrayOfWords){
  for(let i=0;i<arrayOfWords.length;i++){
    console.log(arrayOfWords[i].length);
  }
}
findLongestWord(["orange","1","seasons","celebrations"])
