// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.ter multiple times with various letters to check that your program works.

const word = ['F','O','X']
const guessWord = []
let reward = 0;

const guessLetter = function (letter) {
const indexNo = word.indexOf(letter);


    if (word.indexOf(letter) === -1) {
    console.log(`Wrong Guess!`);
    reward = reward - Math.floor(Math.random() * (150 - 20)) + 20;
    }
    else  {
      guessWord.splice(indexNo,0,letter);
      console.log(`Letter Found!`);
      reward = reward + Math.floor(Math.random() * (150 - 20)) + 20;
    }

    if (word.toString() === guessWord.toString()) {
    console.log(`Congratulations You Won! Total Reward $${reward}`)
    }

};
