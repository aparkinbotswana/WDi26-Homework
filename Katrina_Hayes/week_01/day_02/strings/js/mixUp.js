// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

const mixUp = function(string1, string2) {
  mix1 = string2.substr(0, 2) + string1.slice(2); //couldn't get slice to work for a range of characters eventhough mdn seemed to suggest it would work.
  mix2 = string1.substr(0,2) + string2.slice(2);
  console.log(mix1 + " " + mix2);
  return mix1 + mix2
}

mixUp("doggy", "goat");
mixUp("juror", "sunrise");
mixUp("pedantic", "lullaby");
