//Verbing

//Create a function called verbing. It should take a
//single argument, a string. If its length is at least 3,
//it should add 'ing' to its end, unless it already ends in 'ing',
//in which case it should add 'ly' instead. If the string length is less
//than 3, it should leave it unchanged. For example:

var verbing = function (theVerb){
  var ing = theVerb.indexOf('ing');
  var lastLetter = theVerb.slice(-1);
  if (theVerb.length < 4){
    console.log(theVerb);
  }
  if(theVerb.length >= 4 && ing <0) {
    console.log(`${theVerb}${lastLetter}ing`);
  }
  if(theVerb.length >=4 && ing >0){
    console.log(`${theVerb}ly`)
  }

}

verbing('jog');
verbing('swim');
verbing('swimming');
