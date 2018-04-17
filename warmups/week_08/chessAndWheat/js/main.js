document.addEventListener('DOMContentLoaded', function(){

    // # The wheat and chessboard problem
  // ---------------------------------------------------------------------------------------

  // There is a legend about the invention of chess in which a man presents his game to an Indian prince.
  // Impressed by the game, the prince offers the wise man a reward of his choosing.

  // The man states:

  // "I wish for a grain of wheat and a chess board. On the first square of the board, give me one grain of wheat -- for every square on the chessboard, give me the double the number of grains as the square before. Do this for all 64 squares on the board."

  // On first hearing this sum, the prince considered it trivial sum and agreed, thinking the man a fool -- until his advisors actually calculated the total he would actually owe.

  // He later has the man executed for trying to bankrupt the kingdom. I love a happy ending.
  // ---------------------------------------------------------------------------------------

  // #### Task

  // Write a program that can calculate the total number of wheat grains that would be owed to the man by the end of the board.

  // ____

  // #### Tips:

  // `Math.pow()`, try use underscore (especially range and reduce).

  // #### Bonus trivia:
  // This is a *really* old story, first mentioned in 1256, however chess was invented somewhere around 600 AD (still in India).

  // ---------------------------------------------------------------------------------------

  let grains = {

    // Process:
    // Generate a board to represent our imaginary chessboard.

    // Underscore's '.range' makes this pretty easy for us => http://underscorejs.org/#range
    // 1 is our starting index, 65 is actually the value where the range stops (we want 64)
    board: function(){
      // console.log(_.range(1,65););
      return _.range(1,65);
    },


    // Create a function that can get me an exponent of 2 for any given number by the index before it on the board.

      // Math.pow takes a base as the first argument, and an exponent as the second. => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
      // We want exponents of 2, and we want it to reference the *previous* index on the board, so we always knock 1 off the given number.
    square: function( num ){
      return Math.pow( 2, num - 1 );
    },

  // Create a function to transfer this information into an array for each index

    // _.each expects a list as a first argument, and a function as a second to work with that list. => http://underscorejs.org/#each

    // In this case, I rely on the `board` function to immediately create an array from [1, ..., 64], then begin iterating it.
    // Within the _.each `this` is no longer bound to the grains object. Fortunately, we can just reference the object directly, hence 'grains.square'
    boardSums: function(){
      var output = [];
      _.each( this.board(), function( boardIndex ){
        output.push( grains.square( boardIndex ) );
      });
      // console.log(output);
      return output;
    },


    // Reduce the provided array to a base sum
    // _.reduce expects a list, a function to process that list, and an optional parameter called a 'memo' => http://underscorejs.org/#reduce
    // Sum refers to that starting memo (beginning at 0), num refers to the value of the current index.
    // For all of the numbers, we add them to the total sum
    totalSum: function(){
      return _.reduce( this.boardSums(), function( sum, num ){
        // console.log('this is sum at this iteration ' + sum);
        // console.log('this is sum + sum at this iteration ' + (sum + sum));
        return sum + num;
      }, 0);
    }
  };
}, false);
