console.log("working?");

// Geometry Function Lab
// PART1, Rectangle
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle
//
// const rectangleA = {
//   length: 4,
//   width: 4
// };

const rectangle = {
  length: 4,
  width: 4
};
console.log(rectangle.length);

const isSquare = function ( length, width ) {

  if (rectangle.length === rectangle.width) {
    console.log(`this is a square`);
  } else {
    console.log(`this is not a square`);
  };
  const area = rectangle.length * rectangle.width;
  console.log(area);

  const perimeter = 2*(rectangle.length + rectangle.width);
  console.log(perimeter);
}

isSquare();




// PART2, Triangle
// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not
//
const triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

const isEquilateral = function (sideA, sideB, sideC) {
  if (triangle.sideA === triangle.sideB && triangle.sideB === triangle.sideC) {
    console.log(`is equilateral`);
  } else {
    console.log(`not equilateral`);
  }
}
isEquilateral();

const isIsosceles = function (sideA, sideB, sideC) {
  if (triangle.sideB === triangle.sideC && triangle.sideA !== triangle.sideB) {
    console.log(`isosceles`);
  }else {
    console.log(`not isosceles`);
  }
}
isIsosceles();

const area = function (sideA, sideB, sideC) {
  const answer = .5 * (triangle.sideA * triangle.sideB)
  console.log(answer);
}
area();

const isObtuse = function (sideA, sideB, sideC) {
  if ((triangle.sideA + triangle.sideC) > triangle.sideB) {
    console.log(`obtuse`);
  }else {
    console.log(`not obtuse`);
  }
}
isObtuse();


// The Cash Register
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example
//
// // Input
// const cartForParty = {
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };
//
// // Output
// cashRegister(cartForParty)); // 60.55


const shoppingCart = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
}

const cashRegister = function(cart) {
  // console.log(cart);
  let total = 0
  const items = Object.keys(cart)
  // console.log(items);
  for (var i = 0; i < items.length; i++) {
    let keyName = items[i]
    // console.log(keyName);
    total = total + +(cart[keyName])
  }
  console.log(total);
}
//
cashRegister(shoppingCart);


// Credit Card Validation
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16
// The following credit card numbers are valid:
//
// 9999-9999-8888-0000
// 6666-6666-6666-1666
// The following credit card numbers are invalid:
//
// a923-3211-9c01-1112 invalid characters
// 4444-4444-4444-4444 only one type of number
// 1111-1111-1111-1110 sum less than 16
// 6666-6666-6666-6661 odd final number




//
// const input = function(numbers) {
//
//   numbers = numbers.replace(/-/g, "")
//
// // is number that is 16 digits long *
//   if (typeof(numbers) === 'number') {
//     let stringNumber=JSON.stringify(numbers)
//       if (stringNumber.length === 4) {
//       } else {
//         console.log("wrong");
//         return;
//       }
//       // console.log('correct');
//   }else {
//       console.log("wrong");
//       return;
//     }
//
// // NUMBER is even *
//
//   if (numbers % 2 ===0) {
//     console.log('correct');
//   }else {
//     console.log("wrong");
//     return;
//   }
//
//   two different digits represented
//
//     let n=0;
//     let stringNumber=JSON.stringify(numbers);
//     for (let i = 0; i < stringNumber.length; i++) {
//       let keyName = stringNumber[i]
//       // console.log(stringNumber[i]);
//         console.log(keyName);
//
//       }              // not consistantly correct

let input = function (numbers) {

// numbers = numbers.replace(/-/g, ""); -- could not seem to get this to working, error: numbers.replace is not a function

// new - total number > 16

  if (numbers.length !== 16) {
    return false
    }
  // new - Is numbers

    if (typeof(numbers) !== 'number') {
      return false
    }
// new - Number is even

  if ( numbers[15] % 2 !== 0){
    return false
  } return true

  // new sum > 16

  const arr = numbers.split("");
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + +arr[i]
  }
  if (sum < 17){
    return false
  }

  if (updated.slice(0,7) === updated.slice(8,15)) {
      return false;
    }
      return true

};
