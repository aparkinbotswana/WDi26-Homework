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
  const indexNot = string1.indexOf("not") //how to make not case sensitive?
  //console.log(indexNot);
  const indexBad = string1.indexOf("bad"); //how to make not case sensitive?
  //console.log(indexBad);
  if (indexBad === -1) { //trying to first deal with if one/both don't exist, in which case they'd get -1 as a value
    return string1;
  } else if (indexNot < indexBad) {
    const newString = string1.replace(/not.*bad/, "good"); //don't think this is quite right yet.
    console.log(newString);
    return newString;
  } else {
    console.log(string1);
    return string1
  }
}

notBad("Oh come on it's not that bad.");
notBad("That pudding was bad....not.");
notBad("This situation is very very bad.");
notBad("Not bad, seriously not bad."); //this one not working - maybe an issue with regex?
notBad("not that bad, seriously not that bad."); //also not working properly, even after fixing capital N to n.
