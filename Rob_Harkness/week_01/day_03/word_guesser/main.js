const word = 'test';
const guessed = [];
let reward = 0;
let hangManCount = 0;

for (let i = 0; i < word.length; i++) {
  guessed.push('_');
}

const hangMan = document.getElementsByClassName('body');

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
    hangMan[hangManCount].style.opacity = 1;
    hangManCount++;
    console.log(hangManCount);

    if (hangManCount === 6) {
      console.log('game over');
    }
  }
  console.log(guessed);

  console.log(`$${reward}`);

  if (guessed.join('') === word) {
    console.log('winner!');
    console.log(`you won $${reward}`);
  }
};

document.getElementById('guessInput').addEventListener('input', function() {
  guessLetter(this.value);
  setTimeout(() => {
    this.value = '';
  }, 800);
});
