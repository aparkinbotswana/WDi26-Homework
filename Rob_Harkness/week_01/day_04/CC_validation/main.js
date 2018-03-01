// credit card validation
const validateCC = (ccNum) => {
  let num = ccNum.split('-').filter((e) => e !== '-');

  for (let i = 0; i < num.length; i++) {
    let testNum = num[i];
    for (let c = 0; c < num.length - 1; c++) {

      if (num[i] !== testNum) {

        num = num.join('');
        if (!isNaN(num) && num.length === 16 && num.slice(-1) % 2 === 0) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
};

console.log(validateCC('9999-9999-8888-0000'));
