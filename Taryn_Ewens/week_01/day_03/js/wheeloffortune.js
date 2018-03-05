// Bonus: Make it more like Wheel of Fortune:
// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.



const theWord = ["F", "O", "X"]
let guessedWord = ["-", "-", "-"]
let lettersLeft;
// let rewardAmount = [];
// let sum;


const guessLetter = function(letter) {

    for (let i = 0; i < theWord.length; i++) { //loop through theWord array
        if (theWord[i] === letter) { //if theWord letter matches the guessed letter
              guessedWord[i]=letter; //store the guessed letter in the guessedWord array
              randomNumber = Math.round((Math.random() * 100)); //generate random number & round to 0 decimals
              // rewardAmount.push = randomNumber;

              // for (let m = 0; m < rewardAmount.length; i++) { //loop through the rewardAmount array
              //   sum = (rewardAmount.reduce(function(prev, cur) { //sum of rewardAmount array
              //   return prev + cur;
              //   }));
              // }
        }
      };



// console.log(sum);

      if (guessedWord.toString() === theWord.toString()) { //convert guessedWord to a string and theWord to a string and see if they match
        lettersLeft = "no more"; //if they match store no more in lettersLeft
      } else {
        lettersLeft =  "more"; // else store more in lettersLeft
      };
      console.log(`Congratulations you found the letters... ${ guessedWord } and have now won $${ randomNumber }. You have ${lettersLeft} letters to guess!`);
};

guessLetter("F");
guessLetter("O");
guessLetter("X");
