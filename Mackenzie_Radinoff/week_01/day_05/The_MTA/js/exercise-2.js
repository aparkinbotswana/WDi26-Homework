//Logic Test

const numbers = ['0', '1', '2', '3', '4'];

const findNumber = function(placedNumber){
  let n = 0;
  while (n<numbers.length){
    if (placedNumber === numbers [n]){
      n = 1 + +n
      console.log(`located at array ${n}`)
    }
    n++
  }
}

findNumber('2');
