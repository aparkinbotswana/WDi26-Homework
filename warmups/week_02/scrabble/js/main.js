console.log("I am alive");

// let score = {
//   letterScores: {
//       "A": 1,
//       "E": 1,
//       "I": 1,
//       "O": 1,
//       "U": 1,
//       "L": 1,
//       "N": 1,
//       "R": 1,
//       "S": 1,
//       "T": 1,
//       "D": 2,
//       "G": 2,
//       "B": 3,
//       "C": 3,
//       "M": 3,
//       "P": 3,
//       "F": 4,
//       "H": 4,
//       "V": 4,
//       "W": 4,
//       "Y": 4,
//       "K": 5,
//       "J": 8,
//       "X": 8,
//       "Q": 10,
//       "Z": 10
//   },
//   word: function (playedWord) {
//     let returnScore = 0;
//     playedWord = playedWord.toUpperCase()
//     for (var i = 0; i < playedWord.length; i++) {
//       if ( this.letterScores[ playedWord[i] ] ){
//         returnScore = returnScore + this.letterScores[ playedWord [i] ]
//       }
//     }
//
//     return returnScore
//   }
// }
//
// result = score.word("cabbage")
// console.log(result);


let word = {
  values: {
    1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
    2: ["D", "G"],
    3: ["B", "C", "M", "P"],
    4: ["F", "H", "V", "W", "Y"],
    5: ["K"],
    8: ["J", "X"],
    10: ["Q", "Z"]
  },
  score: function (playedWord) {
    playedWord = playedWord.toUpperCase()
    returnScore = 0

    for (var i = 0; i < playedWord.length; i++) {



      for (key in this.values) {

        if (this.values[key].indexOf( playedWord[i] )  > -1 ) {
        /////////////////////////////////////////////////////
        // This is where my mistake was. Can you spot it?? //
        // if (this.values[key].indexOf( playedWord[i] > -1 )) {
        /////////////////////////////////////////////////////
          returnScore = returnScore + +key
          break
        }
      }
    }
    return returnScore
  }
}




result = word.score("cabbage")
console.log(result);
