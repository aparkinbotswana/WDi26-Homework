//Fix Start
//Create a function called fixStart. It should take a single
//argument, a string, and return a version where all occurences
//of its first character have been replaced with '*', except for
//the first character itself. You can assume that the string is at least one
//character long. For example:

var fixStart = function(word){
  var firstLetter = word.slice(0,1);
  var wordWithoutFirstLetter = word.slice(1);
  var test = wordWithoutFirstLetter.split("firstLetter");
  console.log(test);
}
fixStart('Lollypop')

//Work in Progress
