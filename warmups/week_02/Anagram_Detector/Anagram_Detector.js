// console.log("hola");
//
// Write a program that, given a word and a list of possible anagrams, selects the anagrams of the given word.
//
// In other words, given: "listen" and ["enlists" "google" "inlets" "banana"] the program should return "inlets".
//
// Suggestions
// Start out by getting this working with discrete functions.
// If you feel comfortable with that, try to put all your functions, collections, etc, into an object.


let anagram = {
  anagramList: ['enlist', 'google', 'inlets', 'banana'],
  sorted: function(word){
    return word.toUpperCase().split('').sort().join('') //putting in uppercase , split by letters, alfabetical order and put it together because you con not compare an array.
  },
  findAnagram: function(word) {
    for (var i = 0; i < this.anagramList.length; i++) {
      if (this.sorted(word) === this.sorted(this.anagramList[i])) {
        console.log(this.anagramList[i] + " is an anagram of " + word + ".");
        //return this.anagramList[i];
      } else {
        console.log('no anagram');
        //return null
      }
    }
    console.log('no anagram');
    return null;
  }
};

anagram.findAnagram('banana')
