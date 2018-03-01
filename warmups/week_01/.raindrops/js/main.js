console.log("connected");


const raindrops = function(num) {
  result = ""

  if (num % 3 === 0) { result = result + "Pling"}
  if (num % 5 === 0) { result = result + "Plang"}
  if (num % 7 === 0) { result = result + "Plong"}

  if (( num % 3 !== 0 ) && ( num % 5 !== 0) && (num %7 !== 0)) {
    result = num.toString()
  }

  console.log(result);
}

raindrops(3)
