// The Sieve of Eratosthenes
// The Sieve of Eratosthenes is a simple, ancient algorithm for finding all prime numbers up to any given limit.
//
// A prime number is a natural number that has exactly two distinct natural number divisors: 1 and itself.
//
// Create your range, starting at two and ending at the given limit.
//
// The algorithm consists of repeating the following over and over:
//
//  - take the next available unmarked number in your list (it is prime)
//  - remove all the multiples of that number (they are not prime)
// Repeat until you don't have any possible primes left in your range.
//
// When the algorithm terminates, all the numbers in the list that have not been removed are prime.
//
// https://gist.github.com/Phoboes/1ad2db75a677fccbc2c558bd6a414754




const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (var i = 1; i <= myArray.length; i++) {
  const checkForMultiples2 = myArray[i] / 2;
  let multiplesOf2 = checkForMultiples2 % 1 === 0;
  if (multiplesOf2 === true) {
    //log the multiples of 2 that are true. how?
  }
}

const isPrime = function (num) {
  for (var i = 2; i <= num; i++) {
    if(num % i === 0) {
      return false;
    }
    return true;
  }
}

const sieve = function(endPoint) {

  let range = [];
  for (var i = 2; i < endPoint.length; i++) {
    range.push(i)
  }
  listofPrimes = []
  while(range.length > 0) {
    let candidate = range.shift(); //shift is like pop, but for first integer of array instead of last.

    if(isPrime(candidate)) {
      listofPrimes.push(candidate)
    }

  }
  console.log("This is the range before the sieve");
  range = range.filter(function (num){
    return (num % candidate ! == 0);
  })
}



$(document).ready(function() {
});
