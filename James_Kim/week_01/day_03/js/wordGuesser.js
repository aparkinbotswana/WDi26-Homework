console.log('yo jo');

const theWord = ["F", "O", "X"];
let guessWord = ["_","_","_"];

const guessLetter = function(letter) {
    for (let i = 0; i < theWord.length; i++) {
      if (letter === theWord[i]) {
        guessWord[i] = theWord;
      console.log(`Congratulations, ${guessWord}`);
    }
    if theWord === (guessWord[0]=theWord[0] && guessWord[1]=theWord[1] && guessWord[2]=theWord[2]) {
      console.log(You win!);
    }
  }
}

console.log(guessLetter("F"));
console.log(guessLetter("O"));
console.log(guessLetter("G"));
