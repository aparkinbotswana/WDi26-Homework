console.log("connected");


const isPrime = function ( num ) {
  for (var i = 2; i < num; i++) {
    if ( num % i === 0 ) {return false }
  }
  return true
}



const sieve = function (endPoint) {
  t = Date.now()

  let range = []
  for (var i = 2; i <= endPoint; i++) {
    range.push(i)
  }

  listOfPrimes = []

  while (range.length > 0) {

    let candidate = range.shift()

    if ( isPrime( candidate )) {
      listOfPrimes.push(candidate)
    }

    console.log("this is range before the sieve: ", range);
    range = range.filter( function(num) {
      return ( num % candidate !==0 )
    })
    console.log("this is the range after the sieve: ", range);
  }


  console.log(listOfPrimes);
  console.log( Date.now() - t );
}










$(document).ready( function () {

  console.log("I am ready");

})
