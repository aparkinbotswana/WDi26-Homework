console.log("connected");


isPrime = (num) => {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

getPrimeRange = (num) => {
  let primeRange = []

  for (var i = 2; i < num; i++) {
    if (( num % i === 0) && isPrime(i) ) {
      primeRange.push(i)
    }
  }
  return primeRange
}


getPrimeFactorRange = (num) => {
  let primeFactorRange = []
  primeRange = getPrimeRange (num)

    for (var i = 0; i < primeRange.length; i++) {
      let currentPrime = primeRange[i]
      while ( num % currentPrime === 0 ) {
        primeFactorRange.push(currentPrime);
        num = num / currentPrime
      }
    }
  return primeFactorRange
}




























//
//
// isPrime = (num) => {
//   for (var i = 2; i < num; i++) {
//     if ( num % i === 0 ) {
//       return false
//     }
//   }
//   return true
// }
//
// getPrimeRange = (num) => {
//   let primeRange = []
//   for (var i = 2; i < num; i++) {
//     if ( ( num % i === 0 ) && isPrime( i ) ) {
//       primeRange.push(i)
//     }
//   }
//   return primeRange
// }
//
//
// getPrimeFactorRange = (num) => {
//   primeFactorRange = [];
//   primeRange = getPrimeRange(num)
//
//   for (var i = 0; i < primeRange.length; i++) {
//     let currentPrime = primeRange[i]
//     while ( num % currentPrime === 0 ) {
//       primeFactorRange.push(currentPrime);
//       num = num / currentPrime
//     }
//   }
//   return primeFactorRange
// }


$(document).ready( () => {
  console.log("ready");
})
