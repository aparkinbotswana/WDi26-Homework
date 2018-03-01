console.log ('is this on');

const drEvil = function (amount) {
  if(amount === 1000000){
    const result = `${amount} dollars (pinky)`;
    console.log(result);
    return result;
  } else {
    const result = `${amount} dollars`;
    console.log(result);
    return result;
  }
}

drEvil(10000);
drEvil(100000);
drEvil(1000000);
