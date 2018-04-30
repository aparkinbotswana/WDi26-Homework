console.log("i am connected");


// Write a program that can calculate the sum of the first `n` elements of the following sequences:

// ```js
// s1 = 1 - 1 + 1 - 1 + 1 - 1 + //etc
// s2 = 1 + 2 + 3 + 4 + 5 + 6 + //etc
// ```
// For example:

// ```js
// s1(4) = 0
// s2(4) = 10
// ```

const s1 = function (num) {
  // console.log(num);

  return (num % 2)

}




const s2 = function (num, sum = 0) {


  while ( num > 0 ) {

    sum = sum + num
    num = num - 1
    console.log(`sum: ${sum}, num: ${num}`);
    s2 (num)

  }

  return sum
}


$div.html(`<p>${photo.name}</p> <img src="${thumbNailURL}"/>`)

















// const s1 = function( num ) {
//   return (num % 2)
// }
//
//
// const s2 = function (num, sum = 0) {
//
//   while ( num > 0 ) {
//     sum = sum + num
//     num = num -1
//     console.log(`sum: ${sum}, num: ${num}`);
//     s2 ( num - 1)
//   }
//   return sum
// }

$(document).ready( function() {
  console.log("i am ready");
})
