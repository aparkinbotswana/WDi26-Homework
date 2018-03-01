//Not Bad
//Create a function called notBad that takes a single argument, a string.

//It should find the first appearance of the substring 'not' and 'bad'.
//If the 'bad' follows the 'not', then it should replace the whole
//'not'...'bad' substring with 'good' and return the result.
//If it doesn't find 'not' and 'bad' in the right sequence (or at all),
// just return the original sentence.

var notBad = function(sentence) {

  var notLocation = sentence.indexOf('not');
  var badLocation = sentence.indexOf('bad');
  var withoutNotBad = sentence.slice(0, notLocation - 1);
  if (notLocation > 0 && badLocation >0) {
    console.log(`${withoutNotBad} good!`)
  }
  else {
    console.log(sentence)
  }
}
notBad('This dinner is not that bad!');
notBad('This movie is not so bad!');
notBad('This dinner is bad!')
