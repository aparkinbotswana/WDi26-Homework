console.log(`test`);
/*
Week01 Day04 Homework
URL:
https://gist.github.com/wofockham/dacf2da17c743afb2b17
*/

/*
Task:
Geometry Function Lab

Part 1, Rectangle

Given the following a rectangle object like the one below,
write the following functions:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle
const rectangleA = {
  length: 4,
  width: 4
};
*/

const rectangleA = {
  length: 4,
  width:  4
};

const rectangleB = {
  length: 9,
  width:  4
};

const rectangleC = {
  length: 4,
  width:  8
};

const isSquare = function(rec){
  let x = rec.length;
  let y = rec.width;
  if(x===y){
    console.log(`It's a square`);
  }
  else{
    console.log(`It's a rectangle`);
  }
}
console.log(`Geometry Function Lab`);
console.log(`=====================`);
console.log(`Part 1, Rectangle`);
console.log(`-----------------`);
console.log(``);
isSquare(rectangleA);
isSquare(rectangleB);
isSquare(rectangleC);
console.log(``);
console.log(``);

/*
Part 2, Triangle

Given the following a triangle object like the one below, write the following functions:

isEquilateral - Returns whether the triangle is equilateral or not
isIsosceles - Returns whether the triangle is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not
const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};
*/
/*
Equilateral: All 3 sides are equal
Isosceles:   2 equal sides
Obtuse:      a^2 + b^2 > c^2
*/

console.log(``);
console.log(``);
console.log(`Part 2, Triangle`);
console.log(`----------------`);

// Variables
let triangleType;

// Initialisation
const triangleA = {
  name:  `Triangle A`,
  sideA: 3,
  sideB: 4,
  sideC: 5
}

const triangleB = {
  name:  `Triangle B`,
  sideA: 3,
  sideB: 3,
  sideC: 3
}

const triangleC = {
  name:  `Triangle C`,
  sideA: 3,
  sideB: 4,
  sideC: 4
}

const triangleD = {
  name:  `Triangle D`,
  sideA: 12,
  sideB: 8,
  sideC: 15
}

const isEquilateral = function(triangle){
  let a = triangle.sideA;
  let b = triangle.sideB;
  let c = triangle.sideC;
  let name = triangle.name;
  let type;
  if(a === b){
    if(b === c){
      //console.log(`${name} is an Equilateral Triangle`);
      type = "equilateral";
      return type;
    }
  }
  else{
    //console.log(`${name} is not an equilateral triangle`);
  }
  //return type;
}

const checkType = function(triangle){
  let a = triangle.sideA;
  let b = triangle.sideB;
  let c = triangle.sideC;
  let asq = Math.pow(a,2);
  let bsq = Math.pow(b,2);
  let csq = Math.pow(c,2);
  let name = triangle.name;

  //console.log(asq);
  //console.log(bsq);
  //console.log(csq);

  let type;
  if(a === b || b === c || c === a){
    type = "isosceles";
    if(a === b && b === c && c === a){
      type = "equilateral";
    }
  }
  else if(csq<(asq+bsq)|| asq<(bsq+csq) || bsq<(csq+asq)){
    type = "obtuse";
  }
  else{
    type = "scalene";
  }
  return type;
}

triangleType = checkType(triangleA);
console.log(`${triangleA.name}: Type is ${triangleType}`);
triangleType = checkType(triangleB);
console.log(`${triangleB.name}: Type is ${triangleType}`);
triangleType = checkType(triangleC);
console.log(`${triangleC.name}: Type is ${triangleType}`);
triangleType = checkType(triangleD);
console.log(`${triangleD.name}: Type is ${triangleType}`);
console.log(``);
