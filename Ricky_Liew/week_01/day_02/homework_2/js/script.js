// WDi Day 2 Homework #2
// https://gist.github.com/wofockham/8f953ac7f33125898071

/*

Strings
-------
These exercises will test your knowledge of string functions, conditionals,
and arrays. For many of them, you will want to consult the JavaScript strings
reference to find useful string methods to call.


1 DrEvil
------
Create a function called DrEvil. It should take a single argument, an amount,
and return ' dollars', except it will add '(pinky)' at the end if the amount
is 1 million. For example:

  DrEvil(10): 10 dollars
  DrEvil(1000000): 1000000 dollars (pinky)


2 MixUp
-------
Create a function called mixUp. It should take in two strings, and return the
concatenation of the two strings (separated by a space) slicing out and swapping
the first 2 characters of each. You can assume that the strings are at least 2
characters long. For example:

  mixUp('mix', 'pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'

Look up the JavaScript string reference to find methods which may be useful!



3 FixStart
--------
Create a function called fixStart. It should take a single argument, a string,
and return a version where all occurences of its first character have been
replaced with '*', except for the first character itself. You can assume that
the string is at least one character long. For example:

  fixStart('babble'): 'ba**le'


4 Verbing
-------
Create a function called verbing. It should take a single argument, a string.

If its length is at least 3, it should add 'ing' to its end, unless it already
ends in 'ing', in which case it should add 'ly' instead. If the string length is
less than 3, it should leave it unchanged. For example:

  verbing('swim'): 'swimming'
  verbing('swimming'): 'swimmingly'
  verbing('go'): 'go'


5 Not Bad
-------
Create a function called notBad that takes a single argument, a string.

It should find the first appearance of the substring 'not' and 'bad'.

If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad'
substring with 'good' and return the result.

If it doesn't find 'not' and 'bad' in the right sequence (or at all), just
return the original sentence.
For example:

  notBad('This dinner is not that bad!'): 'This dinner is good!'
  notBad('This movie is not so bad!'): 'This movie is good!'
  notBad('This dinner is bad!'): 'This dinner is bad!'

*/


// 01 DrEvil
const DrEvil = function(dollars){
  var result;
  if(dollars===1000000){
    result = (`${dollars} dollars (pinky)`);
  }
  else{
    result = (`${dollars} dollars`);
  }
  return result;
}

const evilDollars = DrEvil(100000);
console.log(evilDollars);


// 02 MixUp

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

const MixUp = function(txt1, txt2){
  const iterations = Math.min(txt1.length, txt2.length);
  //console.log(`Iterations: ${iterations}`);
  var txt1a=txt1;
  var txt2a=txt2;

  //for(i=0; i<txt1.length; i++){
  for(i=0; i<iterations; i++){
    if(i%2===0){
      //console.log(txt1[i]);
      //console.log(txt2[i]);
      txt1a=txt1a.replaceAt(i, txt2[i]);
      txt2a=txt2a.replaceAt(i, txt1[i]);
      //console.log(txt2a);
      //txt1a=txt1.replaceAt(i, txt2[i]);
    }
  }
  //console.log(`txt2a: ${txt2a}`);
  //console.log(`txt1a: ${txt1a}`);
  return[txt1a, txt2a];
}

let text1="abcdef";
let text2="stuvwxyz";
//MixUp(text1, text2);
const mixedStrings = MixUp(text1, text2);
//console.log(`Text1: ${mixedStrings[0]}`);
//console.log(`Text2: ${mixedStrings[1]}`);

console.log(`Start: ${text1} and ${text2}`);
console.log(`End:   ${mixedStrings[0]} and ${mixedStrings[1]}`);



// 3 FixStart

const FixStart = function(txt){
  for(i=1; i<=txt.length-1; i++){
    if(txt[i]===txt[0]){
      txt=txt.replaceAt(i,'*');
    }
  }
  return txt;
}

const fixStartBegin = "abracadabra";
const fixStartEnd = FixStart(fixStartBegin);
console.log(`Begin: ${fixStartBegin}`);
console.log(`End:   ${fixStartEnd}`);



// 4 Verbing

const Verbing = function(text){
  let last3 = text.slice(-3).toLowerCase();
  const len = text.length;
  //console.log(`last3: ${last3}`);
  if(len>=3){
    if(last3!=="ing"){
      text=text.concat("ing");
    }
    else{
      text=text.concat("ly");
    }
  }
  return text;
}

const ver1 = "no";
const ver1a = Verbing(ver1);
console.log(`${ver1} Verbed to: ${ver1a}`);

const ver2 = "glamping";
const ver2a = Verbing(ver2);
console.log(`${ver2} Verbed to: ${ver2a}`);


const ver3 = "ing";
const ver3a = Verbing(ver3);
console.log(`${ver3} Verbed to: ${ver3a}`);

const ver4 = "speed";
const ver4a = Verbing(ver4);
console.log(`${ver4} Verbed to: ${ver4a}`);




// 5 Not Bad
const NotBad = function(text){
  let text1 = text.toLowerCase();
  //console.log(text1);
  let index1;
  let index2;
  let text2;
  let length;
  const subString1 = "not";
  const subString2 = "bad";
  if(text1.includes(subString1)){
    index1 = text1.search(subString1);
    console.log(`Found \"${subString1}\" at position ${index1}`);
    if(text1.includes(subString2)){
      index2 = text1.search(subString2);
      console.log(`Found \"${subString2}\" at position ${index2}`)
      //index2 = index2 + 3;
      length = (index2 - index1)+3;
      console.log(`Length is ${length}`);
      //text2 = text1.substr(index1, ((index2 - index1)+3));
      console.log(`Substring is: ${text2}`);
    }
  }
  else{
    console.log('Not Found.');
  }
}

NotBad("This is not a bad drill");
