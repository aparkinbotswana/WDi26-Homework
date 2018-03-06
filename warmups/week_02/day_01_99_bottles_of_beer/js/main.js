// 99 bottles of beer
//
// "99 Bottles of Beer" is a traditional reverse counting song.
//
// It is popular to sing on long trips, as it is repetitive and easy to memorise but -- it can take a long time to sing.
//
// Lets try and make it run a little quicker using code:
//
// The song's lyrics are as follows:
//
// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down, pass it around, 98 bottles of beer on the wall...
// The same verse is repeated, each time with one bottle fewer, until there are none left.
//
// Bear in mind, not all verses are the same:
//
// The verse for 1 bottle is as follows:
//
// 1 bottle of beer on the wall, 1 bottle of beer.
// Take it down and pass it around, no more bottles of beer on the wall.
// The verse for 0 bottles is as follows:
//
// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.
// Bonus:
//
// Count through any number of bottles.
// Be able to count between a range of numbers (ie, 20 to 10).

// Basic approach ***********************************

const bottlesOfBeer = function( start ) {
  for (let i = start; i >= 0; i--) {
    if ( i === 0 ){
      console.log(`No more bottles of beer on the wall, no more bottles of beer.`);
      console.log(`Go to the store and buy some more, 99 bottles of beer on the wall.`);
    }else if ( i === 1 ){
      console.log(`1 bottle of beer on the wall, 1 bottle of beer.`);
      console.log(`Take it down and pass it around, no more bottles of beer on the wall.`);
    }else {
      console.log(`${ i } bottles of beer on the wall, ${ i } bottles of beer.`);
      console.log(`Take one down, pass it around, ${ i - 1 } bottles of beer on the wall...`);
    }

  }
};

bottlesOfBeer(10);

//Bonus: Object approach ****************************

const beer = {

  pluralise: function( num ){
    if ( num == 1 ){
      return '1 bottle of beer';
    } else if ( num === 0 ){
      return 'no bottles of beer';
    }else {
      return num + " bottles of beer";
    }
  },

  action: function( num ){
    if ( num === 1 ){
      return "Take one down, pass it around,";
    } else if ( num === 0 ){
      return "Got the the store, buy some more,";
    } else {
      return "Take one down, pass it around,";
    }
  },

  getMoreBeer: function( num ){
    if ( num === 0 ){
      return 99;
    } else {
      return num - 1;
    }
  },

  makeVerse: function( num ){
    // You can call the function like beer.pluralise but becuase we're in an object we use 'this' to target it. This makes the code more dynamic if we ever have to change the name of the beer object we will still refer to the same object.
    let verse1 = `${ this.pluralise( num ) } on the wall, ${ this.pluralise( num ) }.`;


    // Because the 'getMoreBeer' function returns a value we can use that as the argument for 'pluralise'.
    let verse2 = `${ this.action( num ) } ${ this.pluralise( this.getMoreBeer( num ) ) } bottles of beer on the wall.`

    // concatenate the two verses together. '\n' denotes a new line the '\' changes the meaning of the following letter.
    return verse1 + "\n" + verse2;
  },

  song: function( startNum, endNum ){
    // All of the functions return values individually so to get them to display I need to pass makeVerse into a console.log.
    for (let i = startNum; i >= endNum; i--) {
      console.log( this.makeVerse( i ));
    }
  }

};
