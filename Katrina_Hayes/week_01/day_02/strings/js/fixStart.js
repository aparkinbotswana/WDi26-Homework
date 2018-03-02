// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'


// note: I completely don't have this working. I am struggling.
const fixStart = function(string) {
  const fixLetter = string[0];
  console.log(fixLetter); //this seems to work
  const letters = string.replace(fixLetter, "*"); //need to fix this to say except at beginning
    }
  }
  //const fixedWord = string.replace(string[0], "*");
  //console.log(fixedWord);
  //return fixedWord;
}

fixStart("crackling");


// try const newsStr = string.split(fixLetter).join('*');
// try const finalString = string.slice(0,1) + newStr.slice(1, );
