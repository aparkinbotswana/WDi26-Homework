
// A happy number is defined by the following process:

// Starting with any positive integer,
// replace the number by the sum of the squares of its digits, and

// repeat the process until
// the number equals 1 (where it will stay),
// or it loops endlessly in a repeating cycle which does not include 1.
let happyNums = {

  list: [],

  // Turn num into a string
  // Split it
  // square each component
  // save it in a sum

  squareSum: function( num ){
    // Reduce the number to basic components
    // get access to each integer
    let strNum = num.toString().split('');

    let sum = 0;

    // forEach iterates each element in a collection, the variable passed to the function refers to whatever collection index the loop is currently on.
    strNum.forEach( function( index ){
      // JS lets me get away with multiplying strings, "1" * "1" = 1
      // Plus is the only operation I need to be really careful about:
      // "1" + "1" = "11"
      sum += index * index;
    });

    return sum;
  },

  // Logic - is the number squareable down to 1?
    // => starting with a num, square it

    // if that square is 1, save the original number -- it is a happy number

    // If it hasn't squared down to 1, square it again, repeat the process until:
      // => hit a 1
      // hit a repeating number (we are in a loop at that point)

      logic: function( num ){

        // Steps stores my collection of numbers - it does 2 things:
        // Allows me to check for duplicate values.
        // Allows me to count steps to escape my while loop
        let steps = [ num ];
        // console.log(steps);

        // While loops always need an escape -- this one has 2:
          // If the steps reach 10 (an arbitrary limit, it can be changed)
          // The return statements
        while( steps.length < 10 ){
          // Temporarily store the last item in the steps array
          let lastIndex = steps[ steps.length - 1 ];
          // If the sqNum isn't one yet -- repeat
          if( lastIndex !== 1 ){
            steps.push( this.squareSum( lastIndex ) );
          } else {
            // We've got a 1 -- Save the original number in the object's list array.
            this.list.push( num );

            // This also needs a return, or the program hits an infinite loop -- The 'steps' array is no longer modified, so the while condition never ends up true.

            // I could also modify the steps.length, but it doesn't make sense. A direct return is cleaner.
            return;
          }
        }
      },

      answer: function( num ){

        // Rather than counting to num, I want a certain number of results -- so I'm comparing the length of my list array, to n, not i to num.
        for( let i = 1; this.list.length < num; i++ ){
          this.logic( i );
        }

        console.log( this.list );
        return this.list;
      }

};

happyNums.answer( 30 );