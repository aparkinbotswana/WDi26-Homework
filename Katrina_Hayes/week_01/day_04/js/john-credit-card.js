const validator = function (cardNum) {
  console.log(cardNum);
  cardNum = cardNum.replace(/-/g, "");
  console.log(cardNum);

  if (cardNum.length !== 16) {
    return false;
  }

  if (isNaN(cardNum)) {
    return false;
  }

  if (cardNum[15] % 2 !== 0) {
    return false
  }

  const arr = cardNum.split('');
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + +arr[i];
  }

  if (sum < 17) {
    return false;
  }

  return true;
}

const passFail = validator("0000-0000-0000-1112");
console.log(passFail);
