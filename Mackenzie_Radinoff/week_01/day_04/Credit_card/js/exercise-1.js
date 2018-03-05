// Credit Card Validation
//You're starting your own credit card business.
//You've come up with a new way to validate credit cards with a simple
//function called validateCreditCard that returns true or false.

//Here are the rules for a valid number:

//Number must be 16 digits, all of them must be numbers
//You must have at least two different digits represented (all of the digits cannot be the same)
//The final digit must be even
//The sum of all the digits must be greater than 16

const ccNumber = function(digits){
  if (typeof(digits)==='number') {
    let stringDigits=JSON.stringify(digits); ///turns input into string
    if (stringDigits.length ===16){
      let n=0;
      let collector =[];
      while (n<16){
      collector.push(stringDigits[n]); ///pushes 16 stringdigit arrays into collector
      n++;
        }
        let firstFourString=JSON.stringify(collector.slice(0,4));
        let secondFourString=JSON.stringify(collector.slice(4,8));
        let thirdFourString=JSON.stringify(collector.slice(8,12));
        let lastFourString=JSON.stringify(collector.slice(12,16));
        let firstThreeString=JSON.stringify(collector.slice(0,3)); //for 2002 2002 problem
        let firstThreeOfLastString=JSON.stringify(collector.slice(12,15));
        if(firstFourString===secondFourString && secondFourString===thirdFourString && thirdFourString ===lastFourString && firstThreeString === firstThreeOfLastString){
          console.log(`TransactionError`)
        }
        else if(digits % 2 === 0){ //fix slice 0001 != 0001 problem
            console.log(`$$$$$`) //if two types of digits exist, and the last digit = even
        }
        else {
          console.log(`Transaction Error :(`) //if all same digit, or last number is odd
        }
    }
    else {
      console.log(`Transaction Error :(`) //if string length not equal to 16
    }
  }
  else{
    console.log('Transaction Error :(') //if digit is not a number
  }
}
