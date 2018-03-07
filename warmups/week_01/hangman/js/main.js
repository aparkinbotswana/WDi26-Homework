const answer = ["F", "O", "X"]
const guess = ["-", "-", "-"]

const guessedLetter = function (letter) {

  // console.log(letter);

  for (var i = 0; i < answer.length; i++) {
    if (letter === answer[i] ) {
      guess[i] = letter
    } else {

    }
  }
}
