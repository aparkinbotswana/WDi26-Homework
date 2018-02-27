// Warmup - Raindrops
//
// Write a Javascript program that will take a number (eg 28 or 1755 or 9, etc) and output the following:
//
// If the number contains 3 as a factor, output 'Pling'.
// If the number contains 5 as a factor, output 'Plang'.
// If the number contains 7 as a factor, output 'Plong'.
// If the number does not contain 3, 5, or 7 as a factor, output the number as a string.
// Examples
//
// 28 has 7 as a factor.
// In raindrop-speak, this would be a simple "Plong".
// 1755 has 3 and 5 as factors.
// In raindrop-speak, this would be a "PlingPlang".
// 34 has neither 3, 5 nor 7 as a factor.
// Raindrop-speak doesn't know what to make of that, so it just goes with the straightforward "34".


let number = 1755;
// Each time the 'if' statements evaluated to true, add to the empty string.
let returnStr = '';

// The modulus operator (%) will return the remainder of the two divisible values, if the remainder is zero then we know they are evenly divisible.
if ( number % 3 === 0 ){

  // += takes the variable and adds the value to it.
  // ex: "str" += "ing" is the same as "str" = "str" + "ing"
  returnStr += "Pling ";
}

if ( number % 5 === 0 ){
  returnStr += "Plang ";
}

if ( number % 7 === 0 ){
  returnStr += "Plong ";
}

// If the above statement do not evaluate as true the 'number' variable will be added to the 'returnStr' string.
// Adding a number to a string will force it into a string as well. ex: 1 + "" = "1".

if ( returnStr === '' ){
  returnStr += number;
}

console.log(returnStr);
