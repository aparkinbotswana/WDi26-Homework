// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

var DrEvil = function(amount) {
  if (amount === 1000000) {
    result = "1000000 dollars (pinky)";
  } else {
    result = amount + " dollars";
  }
  console.log(result);
};

DrEvil(33);
DrEvil(1000000);
