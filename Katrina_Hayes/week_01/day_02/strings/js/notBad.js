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

const notBad = function(string1) {
  //string1 = string1.toLowerCase(); //could try something like this to fix the capital letter issue but would need more code to deal with the output at the end being still with a capital.
  console.log(string1);
  const indexNot = string1.indexOf("not") //how to make 'not' case insensitive?
  const indexBad = string1.indexOf("bad"); //how to make not case sensitive?
  if (indexBad === -1 || indexNot === -1) { //trying to first deal with if one/both don't exist, in which case they'd get -1 as a value
    return string1;
  }
  if (indexNot > indexBad) {
    return string1;
  } else  {
    const subStr = string1.substring(indexNot, indexBad + 3);
    const newString = string1.split(subStr).join("good");
    return newString;
  }
}
console.log(notBad("Oh come on, it's great!"));
console.log(notBad("Oh come on it's not that bad."));
console.log(notBad("That pudding was bad....not."));
console.log(notBad("This situation is very very bad."));
console.log(notBad("Oh look it's not all that bad, really."));
console.log(notBad("Not bad, seriously not bad.")); //this one not working - issue is with the capital N - how to deal with that using the indexOf() method?
console.log(notBad("not that bad, seriously not that bad.")); //this one has a problem with the repeated 'not that bad' - it replaces them both with good.
