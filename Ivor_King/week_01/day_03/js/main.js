// const raindrops = function(num) {
//   let result = "";
//   if (num %3 === 0) {result = result + "pling"}
//   if (num %5 === 0) {result = result + "plang"}
//   if (num %7 === 0) {result = result + "plong"}
//
//   if ( (num %3 !== 0) && (num %5 !== 0) && ( num %7 !== 0) ) {
//     result = num.toString();
//   }
//
//   console.log(result);
// }
//
// raindrops(23);

const theWord = ["F", "O", "X"];
let guessWord = [];

const guessLetter = function(guessedLetter) {
  console.log("is this on?");
  for (var i = 0; i < theWord.length; i++) {
    guessWord[i] = letter;
    letterFound = true;
  }
}

if letterFound {
  console.log("Congrats", guessWord);
}

if theWord === guessWord {
  console.log("you win");
}
