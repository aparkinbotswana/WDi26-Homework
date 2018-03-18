// The Sieve of Eratosthenes
// The Sieve of Eratosthenes is a simple, ancient algorithm for finding all prime numbers up to any given limit.
//
// A prime number is a natural number that has exactly two distinct natural number divisors: 1 and itself.
//
// Create your range, starting at two and ending at the given limit.
//
// The algorithm consists of repeating the following over and over:
//
// take the next available unmarked number in your list (it is prime)
// remove all the multiples of that number (they are not prime)
// Repeat until you don't have any possible primes left in your range.
//
// When the algorithm terminates, all the numbers in the list that have not been removed are prime.

console.log("connected");

const isPrime = function ( num ) {
  for (var i = 2; i < num; i++) {
    if ( num % i === 0 ) {return false }
  }
  return true
}



const sieve = function ( endNumber ) {
  let t = Date.now()

  range = []
  listOfPrimes = []
  for (var i = 2; i <= endNumber; i++) {
    range.push(i)
  }

  while (range.length > 0) {
    candidate = range.shift() //m get the first number fronm the array range

    if ( isPrime(candidate) ) {
      listOfPrimes.push(candidate)

      // console.log("range before sieving ", range);

      range = range.filter( function (num) {
        return ( num % candidate !==0 )
      })
      // console.log("range after sieving ", range);

    } // end fof the isPrime check.

  } // end of while loop - will be finished when range.legth <= 0


  console.log("time: ", (Date.now() - t ), "milliseconds");
  return listOfPrimes
}


console.log( sieve(10) )



$(document).ready( function() {

  console.log("ready");
})
