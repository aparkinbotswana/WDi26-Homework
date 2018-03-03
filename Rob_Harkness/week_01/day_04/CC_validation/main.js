// credit card validation
const validateCC = (ccNum) => {
  if (ccNum) {
    // convert to array and remove '-'
    let num = ccNum.split('').filter((e) => e !== '-');

    // nested loops to test if all numbers the same
    for (let i = 0; i < num.length; i++) {
      for (let c = 1; c < num.length; c++) {
        // if any numbers are different move to tests for is number, correct length and even last number
        if (num[i] !== num[c]) {
          num = num.join('');
          if (!isNaN(num) && num.length === 16 && num.slice(-1) % 2 === 0) {
            return true;
          } else {
            return false;
          }
        }
      }
    }
    return false;
  } else {
    return false;
  }
};

// tests
console.log(validateCC('9999-9999-8888-0000')); // should be true
console.log(validateCC('9999-9999-8888-9999')); // should be false
console.log(validateCC('9999-9999-99a9-9998')); // should be false
console.log(validateCC('9999-9999-8888')); // should be false
console.log(validateCC('')); // should be false
console.log(validateCC()); // should be false
console.log(validateCC('9949-9499-8838-0002')); // should be true
