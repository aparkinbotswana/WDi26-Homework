// const raindrops = function(num) {
//   let result = "";
//   if (num %3 === 0) {result = result + "pling"}
//   if (num %5 === 0) {result = result + "plang"}
//   if (num %7 === 0) {result = result + "plong"}
//
//   if ( (num %3 !== 0) && (num %5 !== 0) && ( num %7 !== 0) ) {
//     result = num.toString();
//   }
//
//   console.log(result);
// }
//
// raindrops(23);

// const theWord = ["F", "O", "X"];
// let guessWord = [];
//
// const guessLetter = function(guessedLetter) {
//   console.log("is this on?");
//   for (var i = 0; i < theWord.length; i++) {
//     guessWord[i] = letter;
//     letterFound = true;
//   }
// }
//
// if letterFound {
//   console.log("Congrats", guessWord);
// }
//
// if theWord === guessWord {
//   console.log("you win");
// }

// const sergeSays = function(input) {
//   if (input === '' || input === undefined) {
//   if (arg1.includes("?")) {
//     return("Sure");
//   }
//   if (arg1 === arg1.toUpperCase()) {
//     return("Woah chill out!");
//       if (arg1 === '') {
//         return("Fine, be that way!");
//       }
//       else {
//         return("Whatever");
//     }
//   }
//   }
// }
//
// console.log(sergeSays("you"));

const rectangleA = {
  length: 4,
  width: 4
};

const triangleA = {
  sideA: 5,
  sideB: 5,
  sideC: 5
};

function isSquare(rg0) {
  if (rg0.length === rg0.width) {
    return true;
  }
  else {
    return false;
  }
}

function rgleArea(rg1) {
  return rg1.length * rg1.width;
}

function perim(rg2) {
  return (rg2.width * 2) + (rg2.length * 2);
}

function isEquilateral(rg3) {
  if ((rg3.sideA === rg3.sideB) && (rg3.sideA === rg3.sideC)) {
    return true;
  }
  else {
    return false;
  }
}

function isIsos(rg4) {
  if  (( rg4.sideA === rg4.sideB) ||
      ( rg4.sideA === rg4.sideC) ||
      ( rg4.sideB === rg4.sideC)) {
      return true;
  }
  else {
    return false;
  }
}

function triArea(rg5) {
  var px = (rg5.sideA + rg5.sideB + rg5.sideC) / 2;
  var ax = Math.sqrt(px * (px - rg5.sideA) * (px - rg5.sideB) * (px - rg5.sideC));
  return ax;
}

function isObtuse(rg6) {
  let aP = Math.pow(rg6.sideA, 2);
  let bP = Math.pow(rg6.sideB, 2);
  let cP = Math.pow(rg6.sideC, 2);
  if  ( ((aP + bP) < cP) ||
        ((bP + cP) < aP) ||
        ((cP + aP) < bP)) {
    return true;
  }
  else {
    return false;
  }
}

console.log(isSquare(rectangleA));
console.log(rgleArea(rectangleA));
console.log(perim(rectangleA));
console.log(isEquilateral(triangleA));
console.log(isIsos(triangleA));
console.log(triArea(triangleA));
console.log(isObtuse(triangleA));
