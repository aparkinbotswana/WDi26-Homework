var nucleotides = {

  // default to saying there are no nucleotides
  nucleotidesPresent: false,

  singleCount: function( inputString, nucleotide ){

    var instanceOfNucleotide = 0;

    for ( var i = inputString.length - 1; i >= 0; i-- ) {
      if( inputString[ i ] === nucleotide ){

        // for every character that matches our current input, increment the score by 1
        instanceOfNucleotide += 1;
        // Tell our program it has found a nucleotide
        this.nucleotidesPresent = true;
      }
    }
    return instanceOfNucleotide;
  },

  count: function( inputString ){
    // We are able to use functions to assign values to keys in an object.
    // For each key, we run our single count check, then store the returned value.

    var totalCount = {
      A: this.singleCount( inputString, "A" ),
      C: this.singleCount( inputString, "C" ),
      G: this.singleCount( inputString, "G" ),
      T: this.singleCount( inputString, "T" ),
      U: this.singleCount( inputString, "U" )
    };

    // If our singleCount found a nucleotide
    if( this.nucleotidesPresent ){

    // Reset our presence for the next run with the function,
    // otherwise it starts true regardless of input.
      this.nucleotidesPresent = false;

      // Return the object with scores.
      return totalCount;
    }

    // Because return statements exit the function, I don't need an else.
    // If the first condition is met, we never get this far.
    return "No DNA.";
  }
};
