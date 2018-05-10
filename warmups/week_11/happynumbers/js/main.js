let happyNums = {
  list: [], // getting all the happy nums pushed into here

  squareSum: function(num) {
    // turn num into a string, split it, square each componenet, ave it in a sum, return sum
    let strNum = num.toString().split('')
    let sum = 0;
    strNum.forEach(function(digit) {
      sum += digit * digit;
    });
    return sum;
  },

  logic: function(num) {
    let steps = []; // array of the results of running square sum over and over checking if it gets to 1. allows us to check for duplicate values (hence a cycle)
    let originalNum = num;
    while (num !== 1) {
      num = this.squareSum(num);
      if (steps.includes(num)) {
        // console logs just for interest, not needed for code.
        console.log(`loop detected for ${originalNum}. repeated number is ${num}`);
        console.log(`steps array is ${steps.length} long at this point`);
        return false; // cycle detected
      }
      steps.push(num);
    }
    // if we get to here, we found a 1
    return num;
  },

  answer: function(num) {
    console.log(`trying to find the first ${num} happy nums`);
    for (let i = 1; this.list.length < num; i++) {
      if (this.logic(i)) {
        // if, when we run the logic method, we get a num back (which is truthy) and not get back false, then add that number to our list
        this.list.push(i);
      }
    }
    console.log(this.list);
    return this.list;
  }
}

happyNums.answer(10); // where 10 is the number of happy nums we want to find