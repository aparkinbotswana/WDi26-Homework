/*Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:

  DrEvil(10): 10 dollars
  DrEvil(1000000): 1000000 dollars (pinky)*/

  const DrEvil = function(amount){
    if(amount === 1000000)
    {
      console.log(amount + 'pinky')
    }
  };
  DrEvil(10)
