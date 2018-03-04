// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'


const fixStart = function(string) {
  //console.log(string); //testing

  const fixLetter = string[0];
  //console.log(fixLetter); //testing: this seems to work

  // I find this method hard conceptually - I'm splitting a string at the point of a specific letter and the resulting strings are put into an array? but if it's the first letter it creates an empty string to the left?
  // let newStr = string.split(fixLetter);
  // //console.log(newStr); //testing
  // newStr = newStr.join("*");
  // //console.log(newStr); //testing

  const newStr = string.split(fixLetter).join("*");

  const finalString = string.slice(0, 1) + newStr.slice(1);
  //console.log(finalString); //testing
  return finalString;
}

console.log(fixStart("crackling"));
console.log(fixStart("little"));
console.log(fixStart("tittle"));
