// Leap Year Warmup Exercise
// Do this in HTML and JS!
//
// Write a function that will take any given year and return whether it is a leap year or not. Remember that a leap year is:
//
// Every year that is evenly divisible by 4
// Except if it is evenly divisible by 100...
// Unless it is also divisible by 400
// Test Data... Make sure it is working!
//
// 1997 is not a leap year, it should return false
// 1996 is a leap year, it should return true
// 1900 is not a leap year, it should return false
// 2000 is a leap year, it should return true
// How to structure it...
//
// We want a custom function called isLeapYear

console.log("connected");


const isLeap = function() {

  let num = parseInt( prompt("Give me a year.") );


  if ( num %400 === 0 ) {
    return true
  }


  if ( num %100 === 0 ) {
    return false
  }

  if ( num %4 === 0 ) {
    return true
  } else {
    return false
  }



}
