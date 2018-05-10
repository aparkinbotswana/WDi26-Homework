console.log("connected");



const pairwise = function ( arr, arg ) {

  const pairArr = arr.slice();
  let sum = 0

  for (var i = 0; i < (pairArr.length - 1); i++) {
    let num1 = pairArr[i]

    for (var j = (i + 1); j < pairArr.length; j++) {
      let num2 = pairArr[j]

      if (num1 + num2 === arg) {
        sum = sum  + i + j
        pairArr[i] = NaN
        num1 = NaN             // these were the lines I added to make the solution work.
        pairArr[j] = NaN       // previously I set pairArr[i] and [j] to NaN, but forgot to reset num1 and num2
        num2 = NaN             // now the solution works for all of the test cases provided
      }
    }
  }


  return sum

}

// Here is a bunch of alternative solutions. Mine is the same as the first one here.



// const pairwise = function ( arr, arg ){
//
//   const pairArr = arr.slice();
//   let sum = 0;
//   for( let i = 0; i < pairArr.length; i++ ){
//
//     for( let j = i + 1; j < pairArr.length; j++){
//
//       // console.log(`pairArr[i] = ${pairArr[i]}`);
//       // console.log(`pairArr[j] = ${pairArr[j]}`);
//       if ( pairArr[i] + pairArr[j] == arg ){
//         sum += i + j;
//         pairArr[i] = NaN;
//         pairArr[j] = NaN;
//       }
//
//     }
//
//   }
//
//   return sum;
// }




////////////////////////////////////////////////////////
// Option 2

// const pairwise = function(arr, arg) {
//   // Create empty array to keep the arrays we will add.
//   let index = [];
//
//   // Loop to check the first number.
//   for (let a in arr) {
//     // temporal first number.
//     let temp = arr[a];
//
//     // Second loop to check against the first number.
//     for (let i = 1; i < arr.length; i++) {
//       // temporal second number.
//       let temp2 = arr[i];
//
//       // Key element, this check to make sure that the numbers add to arg
//       // also that the second index is greater than the first, and that neither
//       // of those indices are already on the array.
//       if (temp + temp2 === arg && i > a && index.indexOf(+a) === -1 && index.indexOf(+i) === -1) {
//         // if true then add both indices as integers then stop checking to avoid repeats.
//         index.push(+a, +i);
//         break;
//       }
//     }
//   }
//
//   // After the two loops are done, check if index is empty to return 0
//   // or if it is not, then use Array.reduce(callbackFunc) to return the sum
//   // of the numbers.
//   if (index.length >= 1) {
//     let addAll = function(a, b) {
//       return a + b;
//     };
//
//     return index.reduce(addAll);
//   } else
//       return 0;
// }


////////////////////////////////////////////////////////
// Option 3
//
// const pairwise = function(arr, arg) {
//   // search array for elements that when paired, equal the second argument, then sum their indices
//   // make a local copy of the arguments object so we don't modify it directly
//   let pairArr = arr.slice();
//   return pairArr.reduce( function (a,b,index){ // use native reduce to collect running total of summed indices
//       let search = arg - b; // get difference of current item so we know what value will sum to arg
//
//       // check if search value in rest of the array, but also make sure it doesn't match current search index
//       if ( pairArr.indexOf(search) != -1 && pairArr.indexOf(search) != index ){
//          let total = index + pairArr.indexOf(search);  // if found, add to the runnning total
//          pairArr.splice(index,1,NaN); // remove current index from the array
//          pairArr.splice(pairArr.indexOf(search),1,NaN); // remove the other matched element from the array
//          return a + total; //return the running total back to reduce for next item
//       }
//       return a; // simply return previous total if no operations needed
//   },0);
// }


console.log(pairwise([7, 9, 11, 13, 15], 20)); // => 6
console.log(pairwise([1, 4, 2, 3, 0, 5], 7)); // => 11
console.log(pairwise([1, 3, 2, 4], 4)); // => 1
console.log(pairwise([1, 1, 1], 2)); // => 1
console.log(pairwise([0, 0, 0, 0, 1, 1], 1)); // => 10
console.log(pairwise([], 100)); // => 0
