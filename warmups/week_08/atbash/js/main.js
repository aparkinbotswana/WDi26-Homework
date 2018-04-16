// Process:

// The cipher works by substituting a letter from an inverse version of the alphabet (eg: a => z, b => x)

// Given a string:
  // Break it apart, iterate through it
  // For every letter, find its index in the alphabet
  // Use that index to find the corresponding letter in the reversed version
  // Push the reversed letter to output until complete.

console.log("conected");



const atbash = {
  alphabetArray: "abcdefghijklmnopqrstuvwxyz".split(''),

  encode: function (input) {
    let output = ""

    inputArray = input.split('')

    for (var i = 0; i < inputArray.length; i++) {
      let index = this.alphabetArray.indexOf(inputArray[i])
      output = output + this.alphabetArray.reverse()[index]

    }


    return output
  }
}

































// var atbash = {
//
//    alphabet: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y", "z"],
//
//    encode: function( input ){
//     var output = '';
//     var str = input.toLowerCase().split('');
//     for( var i = 0; i < str.length; i++ ){
//       var index = this.alphabet.indexOf( str[i] );
//       // Rather than create a new array, I am just going to rely on .reverse() with teh current alphabet
//       output += ( this.alphabet.reverse()[index] );
//     }
//     return output
//    }
//
// };
//
// console.log( atbash.encode("test") );
// console.log( atbash.encode("gvhg") );
// console.log( atbash.encode("wizard") );
