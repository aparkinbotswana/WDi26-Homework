const word = 'test';
const guessed = [];
let reward = 0;

for (let i = 0; i < word.length; i++) {
  guessed.push('_');
}

const guessLetter = (letter) => {
  let correctGuess = false;
  word.split('').forEach((char, i) => {
    if (char === letter) {
      guessed[i] = letter;
      reward += Math.floor(Math.random() * 10 + 1);
      correctGuess = true;
    }
  });
  if (correctGuess) {
    console.log('good guess!');
  } else {
    console.log('wrong guess');
    reward -= Math.floor(Math.random() * 10 + 1);
  }
  console.log(guessed);

  console.log(`$${reward}`);

  if (guessed.join('') === word) {
    console.log('winner!');
    console.log(`you won $${reward}`);
  }
};

guessLetter('e');
guessLetter('t');
guessLetter('n');
guessLetter('s');
