console.log("connected");

// Geometry Function Lab
// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle


const rectangleA = {
  length: 10,
  width: 4
};

const isSquare = function() {
  if (rectangleA.length === rectangleA.width) {
    return "rectangle is a square";
    }  else {
        return "rectangle is not a square";
      }
  };

const area = function() {
  return rectangleA.length * rectangleA.width;
};

const perimeter = function() {
  return ((rectangleA.length * 2) + (rectangleA.width * 2));
};

  console.log(isSquare());
  console.log(area());
  console.log(perimeter());



// Part 2, Triangle
// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

const isEquilateral = function() {
  if ((triangleA.sideA === triangleA.sideB) && (triangleA.sideA === triangleA.sideC)) {
    return "Equilateral";
  } else {
    return "Not equilateral";
  }
};

const isIsosceles = function() {
  if ((triangleA.sideA === triangleA.sideB) || (triangleA.sideA === triangleA.sideC) || (triangleA.sideB === triangleA.sideC)) {
    return "Isosceles";
  } else {
    return "Not isosceles";
  }
};

const triangleArea = function() {
    const halfP = (triangleA.sideA + triangleA.sideB + triangleA.sideC)/2;
    return Math.sqrt(halfP*((halfP-triangleA.sideA)*(halfP-triangleA.sideB)*(halfP-triangleA.sideC)));
};

const isObtuse = function() {
  const angleAmath = function () {
    angleA = (((triangleA.sideA * triangleA.sideA) + (triangleA.sideB * triangleA.sideB) + (triangleA.sideC * triangleA.sideC)) / (2 * triangleA.sideA * triangleA.sideB));
  // don't know how to work out the rest! something with cos to the power of one - I don't know what means - Maths is hard! :'(
  }
};

console.log(isEquilateral());
console.log(isIsosceles());
console.log(triangleArea());
console.log(isObtuse());
