// Anagram Detector
//
// Write a program that, given a word and a list of possible anagrams, selects the anagrams of the given word.
//
// In other words, given: "listen" and ["enlists" "google" "inlets" "banana"] the program should return "inlets".
//
// Suggestions
//
// Start out by getting this working with discrete functions.
// If you feel comfortable with that, try to put all your functions, collections, etc, into an object.

const anagrams = ["enlists", "google", "inlets", "banana"];

const anagram = function( word ){
  // console.log(word);
  for (let i = 0; i < anagrams.length; i++) {
    // console.log(anagrams[i]);

    // We can chain methods together. Below we are converting the string to uppercase, splitting it into individual letters, sorting the letters alphabetically, and join it back together again.

    // Rather than a complicated approach, we can ask:
    // does 'listen' have the same letters as 'inlets'? Yes, they both sort to "EILNST"
    if ( word.toUpperCase().split('').sort().join('') ===  anagrams[i].toUpperCase().split('').sort().join('') ){
      return anagrams[i];
    }
  }
  return "No match";

};

console.log(anagram('listen'));


//BONUS

//To get the below functions to work you will need to call the function through the the object giving the anagramsList as an argument (eg. anagrammer.anagram(anagrammer.anagramsList); )

const anagrammer = {

  anagramsList: ["enlists", "google", "inlets", "banana"],

  // making the sorting into it's own function.
  sorted: function( word ){
    return word.toUpperCase().split('').sort().join('');
  },

  anagram: function( word ){
    for (let i = 0; i < this.anagramsList.length; i++) {
      if ( this.sorted( word ) === this.sorted( this.anagramsList[ i ] ) ){
        console.log( `${ this.anagramsList[ i ] } is an anagram of ${ word }.` );
        return this.anagramsList[ i ];
      }
    }
    console.log( "No match." );
  },

};
