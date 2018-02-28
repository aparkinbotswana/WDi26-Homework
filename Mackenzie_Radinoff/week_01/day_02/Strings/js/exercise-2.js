//The MixUp

//Create a function called mixUp. It should take in two strings, and return
//the concatenation of the two strings (separated by a space) slicing
// out and swapping the first 2 characters of each.

var mixUp = function(wordOne, wordTwo){
  var newWordOne =  (`${wordOne.slice(0,2)}${wordTwo.slice(2)}`);
  var newWordTwo = (`${wordTwo.slice(0,2)}${wordOne.slice(2)}`);
  console.log(newWordOne);
  console.log(newWordTwo);
}
mixUp('dance', 'party');
mixUp('twisty', 'shout');
