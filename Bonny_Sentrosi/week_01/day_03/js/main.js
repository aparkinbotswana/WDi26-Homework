
console.log("Able I was ere I saw Elba");

const letterRespond = function() {
  console.log("You found a letter buddy!")
};
const wordRespond = function() {
  console.log("You got it, you're so cool!")
};


const declaredWord = ["C", "A", "T"]
let guessWord = ["_", "_", "_",]

const guessLetter = function(letter) {
// var arrayLength = word.length;
// for (var i = 0; i < word.length; i++) {   // iterate thru word
//     if (letter === word[i]) {
//     guessWord[i] = letter;
//     foundLetter = true;
//   };

    if(letter === declaredWord[0]) {
      guessWord[0] = declaredWord[0];
      letterRespond();
      // console.log("You found a letter! Keep going");
    } if(letter === declaredWord[1]) {
      guessWord[1] = declaredWord[1];
      letterRespond();
    } if(letter === declaredWord[2]) {
      guessWord[2] = declaredWord[2];
      letterRespond();
    } if (declaredWord === guessWord) {
      wordRespond;
    };
  };
//   };
// };
/*
let firstLetter = word.slice(0); // not DRY
let secondLetter = word.slice(1);
let thirdLetter = word.slice(2);
*/
/*
removedLetter = guessWord.splice (0, "C")//not DRY
removedLetter = guessWord.splice (1, "A")// not sure if this works
removedLetter = guessWord.splice (2, "T")
*/
 // this could be how to replace one string to another






  // congratulate on finding a Letter
  // if (foundLetter === true) {
  //   console.log("You found a letter! Keep going");
  // }; /*else {
  //   console.log("No luck this time, keep trying buddy");
  // }; */
  //
  // // if you found the whole word - congratulate
  // if (word === guessWord) {
  //   console.log("You got it! You're so cool");
  // };
