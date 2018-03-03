// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle
// const rectangleA = {
//   length: 4,
//   width: 4
// };

const rectangleA = {
  length: 4,
  width: 4
};
// Square or rect - function check

const isSquare = function(recA) {
  let result;
  if (recA.length === recA.width) {
      result = 'Square';
    }
  else {
    result ='Rectangle';
  }
  return result
};



// Area
const Area = function(recAr) {
  let areaRect = recAr.length * recAr.width;
  return areaRect;
};

//perimeter

const perimeter = function(recPeri) {
  let recPerimeter = 2*(recPeri.length + recPeri.width);
  return recPerimeter;
};
console.log(`${isSquare(rectangleA)}`);
console.log(`${Area(rectangleA)}`);
console.log(`${perimeter(rectangleA)}`);

//console.log(`${isSquare(rectangleA)} has an area of ${Area(rectangleA)} and perimeter of ${perimeter(rectangleA)}.` );








/////////////

// Part 2, Triangle
// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not
// const triangleA = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };



const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};
////
const isIsosceles = function(IsoTr) {
  let result1 ;
  if (IsoTr.sideA === IsoTr.sideB || IsoTr.sideA === IsoTr.sideC || IsoTr.sideB === IsoTr.sideC)
  {
    result1 = 'Isosceles Triangle';
  }
  else {
    result1 = 'Not Isosceles Triangle';
  }
   return result1;
};
//////

console.log(`${isIsosceles(triangleA)}`)

//////////////
const isEquilateral = function(equiTr) {
  let result1 ;
  if (equiTr.sideA === equiTr.sideB && equiTr.sideA === equiTr.sideC && equiTr.sideB === equiTr.sideC)
  {
    result1 = 'Equilateral Triangle';
  }
  else {
    result1 = 'Not Equilateral Triangle';
  }
   return result1;
};
 console.log(`${isEquilateral(triangleA)}`)



 ////area - Returns the area of the Triangle
const TriArea = function(areaTr) {
  let sp = (areaTr.sideA + areaTr.sideB + areaTr.sideC) / 2;
  let area = Math.sqrt(sp * (sp - areaTr.sideA) * (sp - areaTr.sideB) * (sp - areaTr.sideC));
  return area;

};
console.log(`${TriArea(triangleA)}`)


// // //////Obtuse Traingle

const isObtuse = function(ObTr) {
  var arrSides = [];
  var result;
  arrSides.push(ObTr.sideA);
  arrSides.push(ObTr.sideB);
  arrSides.push(ObTr.sideC);
  arrSides.sort();
  if ((arrSides[2] * arrSides[2]) > (arrSides[0] * arrSides[0])+(arrSides[1] * arrSides[1]))
  {
    result ="Obtuse"

  }
  else {
    result ="Not Obtuse"
  }
  return result;
};
console.log(`${isObtuse(triangleA)}`)


/////
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

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const cashRegister = function(shopCart) {
  let arr = Object.values(shopCart);
  let SumA = 0 ;
  for (let i =0; i < arr.length; i++)
    {
      SumA =  SumA + parseFloat(arr[i]);
      // console.log((arr[i]));
      // console.log(parseInt(SumA));

    }
  return SumA;
};


console.log(`${cashRegister(cartForParty)}`)



/////////////

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


let creditno;

const validateCreditCard = function(CreditCardNo) {
creditno = CreditCardNo;
let creditLastno;
let sum = 0;
let resultstat = false;
let string2 = "0123456789";
creditno = creditno.replace(/-/g, "");

if (creditno.length !== 16)  {
  return false;
}

creditLastno = creditno.slice(-1);
if (creditLastno%2 !== 0) {
  return false;
}

/////////
// if (typeof(creditno) !== 'number')
// {
//   return false;
// }
//////////////

// for (let i = 0; i < creditno.length; i++)
// { if (string2.search(parseInt(creditno[i]))!== -1)
//
// }



};
console.log(`${validateCreditCard('9999-9999-8888-0002')}`);
