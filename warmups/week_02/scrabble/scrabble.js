// Scrabble
// Write a program that will replicate the scoring system in Scrabble.
 // The function should take a single argument (the word, comprised of letters/tiles) and return a score.
//
// Letter Values
// You'll need these:
//
// Letter                           Value
// A, E, I, O, U, L, N, R, S, T       1
// D, G                               2
// B, C, M, P                         3
// F, H, V, W, Y                      4
// K                                  5
// J, X                               8
// Q, Z                               10
// So now that you've got those letter values, consider what data structure is good for mapping keys to values?
//
// // Examples
// // "cabbage" should be scored as worth 14 points:
// //
// // 3 points for C
// // 1 point for A, twice
// // 3 points for B, twice
// // 2 points for G
// // 1 point for E
// // And to total:
// //
// // 3 + 2 * 1 + 2 * 3 + 2 + 1
// // = 3 + 2 + 6 + 3
// // = 5 + 9
// // = 14
// // Bonus:
// // Have your program be able to proces a sentence. "Hello world!" is worth 17 points.
//
// let values = {
//   A: 1, E:1, I:1, O:1, U:1, L:1, N:1, R:1, S:1, T:1,
//   D:2, G:2,
//   B:3, C:3, M:3, P:3,
//   F:4, H:4, V:4, W:4, Y:4,
//   K:5,
//   J:8, X:8,
//   Q:10, Z:10
// };
//
//
// console.log(sum("A","B"))
//
// // const play = function (theWord) {
// //
// // }
// //
// //
// //
// //
// }


let score = {
  letterScores = {
  'A': 1, 'E':1, 'I':1, 'O':1, 'U':1, 'L':1, 'N':1, 'R':1, 'S':1, 'T':1,
  'D':2, 'G':2,
  'B':3, 'C':3, 'M':3, 'P':3,
  'F':4, 'H':4, 'V':4, 'W':4, 'Y':4,
  'K':5,
  'J':8, 'X':8,
  'Q':10, 'Z':10
  },

  word: function (playedWord) {
    let return = 0;
    playedWord = playedWord.toUppercase();
    for (var i = 0; i < playedWord.length; i++) {

      if ( this.letterScores[ playedWord[i] ] ) {
        returnScore = returnScore + this.letterScores[ playedWord[i] ]
      }
    }
    return returnScore
  }
}

  result = score.word("cabbage")
  console.log(result);
