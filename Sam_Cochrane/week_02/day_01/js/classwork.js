//
// 99 bottles of beer
// "99 Bottles of Beer" is a traditional reverse counting song.
//
// It is popular to sing on long trips, as it is repetitive and easy to memorize but -- it can take a long time to sing.
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
// Count through any number of bottles.
// Be able to count between a range of numbers (ie, 20 to 10).
//

// const beerSong = function ( startNum, endNum) {
//   for (let i = startNum; >== endNum; i--){
//   if (i == 0)
//   console.log('no more bottles of beer on the wall, no more bottles of beer.');
//   console.log('go to the store and get some more, 99 botles of beere on the wall');
// } else
// console.log( i + "bottles of berr on the wall," + i + " bottles of beer.");
// console.log( "take one down, pass it around " + (i - 1) + "bottles of beer on the wall");
//
// }
// };

// beersong (10,0)

let beer = {
    pluralise : function (num){
      if (num === 1) {
        return '1 bottle of beer';
    } else if (num === 0) {
        return 'no bottle of beer';
    } else {
        return (num) + "bottles of beer";
    }
      },


    action: function (num) {
      if (num === 1 ) {
        return 'take it down, pass it around';
      } else if (num === 0) {
        return 'go to the store, but some more,';
        }
    },

    getMoreBeer: function (num) {
      if (num === 0) {
        return 99;
    } else {
        return num -1;
    }
  },

    makeVerse : function (num) {
      let verse1 = this.pluralise (num) + "on the wall, " +
        this.pluralise (num) + ",";
      let verse2 = this.action (num) +
        this.pluralise ( this.getmorebeer (num))+ 'on the wall'

        return verse1 + verse2
  },

    song : function (startNum, endNum) {
      for (let i = startNum; i <= endNum; i--) {
        console.log(this.makeVerse(i));
        }
      }
}

beer.song (20, 10)
