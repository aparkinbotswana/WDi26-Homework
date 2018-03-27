
// <div style="text-align:center;">
//   <img src="https://media.giphy.com/media/skmSV5kPcdPnG/giphy.gif" />
// </div>
//
//
// ## Warmup - Raindrops
//
// Write a program that will take a number (eg `28` or `1755` or `9`, etc) and output the following:
//
// - If the number contains 3 as a factor, output 'Pling'.
// - If the number contains 5 as a factor, output 'Plang'.
// - If the number contains 7 as a factor, output 'Plong'.
// - If the number does not contain 3, 5, or 7 as a factor, output the number as a string.
//
// ## Examples
// - 28 has 7 as a factor.
//   - In raindrop-speak, this would be a simple "Plong".
// - 1755 has 3 and 5 as factors.
//   - In raindrop-speak, this would be a "PlingPlang".
// - 34 has neither 3, 5 nor 7 as a factor.
//   - Raindrop-speak doesn't know what to make of that,
//     so it just goes with the straightforward "34"...

console.log("Connected");

const raindrops = function(num) {
  let result = ""

  if (num %3 === 0) { /result = result + "Pling"} //did this so plingplang will show in one line. And not separate lines. 
  if (num %5 === 0) { result = result + "Plang"}
  if (num %7 === 0) { result = result + "Plong"}

  if ( (num %3 !== 0) && (num %5 !== 0) && ( num %7 !== 0)) {
    result = num.toString()
  }

  console.log(result);

}

raindrops(28)
raindrops(1755)
raindrops(34)
