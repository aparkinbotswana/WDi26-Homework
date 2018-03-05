// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions:

// isSquare - Returns whether the rectangle is a square or not
let isSquare = function (width, length) {
  if (width === length) {   // All sides of a square have to be equal
    console.log(`Yes, you have a square.`)
  }
  else {
    console.log(`You do not have a square.`);
  }
};

isSquare(3,3);
isSquare(2,3);

// area - Returns the area of the rectangle

let area = function (width, length) {
  console.log(width * length);
}

area(3,4);

// perimeter - Returns the perimeter of the rectangle

let perimeter = function (width, length) {
  console.log((2 * width) + (2 * length));   // Length and width of rectangles the same. For perimeter, add up all sides
}

perimeter(2,3);

// Part 2, Triangle
// Given the following a triangle object like the one below, write the following functions:

// isEquilateral - Returns whether the triangle is equilateral or not

let isEquilateral = function (sideA, sideB, sideC) {
  if (sideA === sideB && sideB === sideC && sideA === sideC) { // Test if all three sides are equal
    console.log('Your triangle is equilateral.');
  } else {
    console.log('Your triangle is not equilateral.');
  }
}

isEquilateral(2,2,2);
isEquilateral(3,2,5);
isEquilateral(1,2,2);

// isIsosceles - Returns whether the triangle is isosceles or not

let isIsosceles = function (sideA, sideB, sideC) {
  if (sideA === sideB || sideA === sideC || sideB === sideC) {  // Test if two sides are the same
    console.log('Your triangle is isosceles.');
  } else {
    console.log('Your triangle is not isosceles.');
  }
}
isIsosceles(3,2,1);
isIsosceles(1,2,2);
isIsosceles(1,1,1);

// area - Returns the area of the Triangle

let areaTri = function (sideA, sideB, sideC) {
let p = (sideA + sideB + sideC)/2 // To find the area of a triangle with the length of 3 sides, need p to feed into Heron's formula
// console.log(p);
formula = p*(p-sideA)*(p-sideB)*(p-sideC);  // Applying Heron's formula
// console.log(p - sideA);
// console.log(p - sideB);
// console.log(p - sideC);
// console.log(formula);
  areaOfTri = Math.sqrt(formula);
  console.log(areaOfTri);
}

areaTri(3,5,6);

// isObtuse - Returns whether the triangle is obtuse or not

// Using Pythagoras' Theorem - we compare the three sides and if the sum of the squares of the two shorter sides is smaller than the square of the longest side, then the triangle is obtuse.

let isObtuse = function(sideA, sideB, sideC) {
  if (sideA*sideA + sideB*sideB < sideC*sideC) {   // Based on maths formula
    console.log('Your triangle is obtuse.');
  } else {
    console.log('Your triangle is not obtuse.');
  }
};

isObtuse(5,10,14);
isObtuse(5,6,7);
