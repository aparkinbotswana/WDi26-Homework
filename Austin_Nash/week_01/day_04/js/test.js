console.log("coneted");

const validator = function (cardNum) {
  // console.log(cardNum);

  // replace dashes with empty string
  cardNum = cardNum.replace(/-/g, "");
  // console.log(cardNum);

  // check if length is 16. if not - reject
  if (cardNum.length !== 16) {
    return false;
  }

  // if the card number is NOT a number - reject
  if ( isNaN(cardNum)) {
    return false;
  }

  // if the last digit is not even - reject
  if (cardNum[15] %2 !== 0) {
    return false;
  }

  // calculate the sum of the digits
  const arr = cardNum.split('');
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + +arr[i];
  }

  // if the sum of the figits is not grester than 16 - reject
  if (sum < 17) {
    return false;
  }

  // if all chars are the same - reject
  let areTheyAllTheSame = true
  for (var i = 0; i < cardNum.length; i++) {
    if ( cardNum[i] !== cardNum[0] ) {
      areTheyAllTheSame = false
    }
  }
  if (areTheyAllTheSame === true) {
    return false
  }

  // if we have got here, then all the above tests have failed
  // and therefore the card number must be OK.
  return true;

};
