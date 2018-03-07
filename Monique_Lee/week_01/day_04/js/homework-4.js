// console.log('test js');

// Geometry Function Lab
// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions:

const rectangleA = {
  length: 4,
  width: 4
};

// isSquare - Returns whether the rectangle is a square or not

const isSquare = function(rectangle) {
    rectangle.height = rectangle.length;
    if (rectangle.height == rectangle.width){
    console.log("The rectangle is a square.");
  } else {
    console.log("The rectangle is not a square.");
  }
}

// area - Returns the area of the rectangle
//A=wl

const area = function(rectangle) {
    rectangle.height = rectangle.length;
    rectangleArea = rectangle.height * rectangle.width;
    return rectangleArea;
}

// perimeter - Returns the perimeter of the rectangle
//perimeter=2(l+w)

const perimeter = function(rectangle) {
    rectangle.height = rectangle.length;
    rectanglePerimeter = (rectangle.height+rectangle.width)*2;
    return rectanglePerimeter;
}

isSquare(rectangleA);
console.log (`The area of the rectangle is: ${area(rectangleA)}`);
console.log(`The perimeter of the rectangle is: ${perimeter(rectangleA)}`);


// Part 2, Triangle
// Given the following a triangle object like the one below, write the following functions:

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

// isEquilateral - Returns whether the triangle is equilateral or not


const isEquilateral = function(triangle) {
  let side1 = triangle.sideA;
  let side2 = triangle.sideB;
  let side3 = triangle.sideC;

  if(side1!==side2 || side2!==side3) {
    console.log("The triangle is not equilateral.");
  } else {
      console.log("The triangle is equilateral.");
    }
}

isEquilateral(triangleA);


// isIsosceles - Returns whether the triangle is isosceles or not
//isosceles:(of a triangle) having two sides of equal length.

const isIsosceles = function(triangle) {
  let side1 = triangle.sideA;
  let side2 = triangle.sideB;
  let side3 = triangle.sideC;

  if(side1==side2 || side2==side3) {
    console.log("The triangle is isosceles.");
  } else {
      console.log("The triangle is not isosceles.");
    }
}

isIsosceles(triangleA);


// area - Returns the area of the Triangle

const triangleArea = function(triangle){
  let side1 = triangle.sideA;
  let side2 = triangle.sideB;
  let side3 = triangle.sideC;

  const perimeter = (side1 + side2 + side3)/2;
  let result = Math.sqrt(perimeter*(perimeter-side1)*(perimeter-side2)*(perimeter-side3));
  console.log("The area of the triangle is: " + result);
}

triangleArea(triangleA);


// isObtuse - Returns whether the triangle is obtuse or not
//Obtuse - An obtuse triangle is a triangle in which one of the angles is an obtuse angle.
// From the law of cosines, for a triangle with side lengths a, b, and c,
//  cosC=(a^2+b^2-c^2)/(2ab),
// with C the angle opposite side C. For an angle to be obtuse, cosC<0.
//Therefore, an obtuse triangle satisfies one of a^2+b^2<c^2, b^2+c^2<a^2, or c^2+a^2<b^2.


const isObtuse = function(triangle){
  let a2 = Math.pow(triangle.sideA, 2);
  let b2 = Math.pow(triangle.sideB, 2);
  let c2 = Math.pow(triangle.sideC, 2);

if ( (a2+b2)<c2 || (b2+c2)<a2 || (c2+a2)<b2 ) {
    console.log("The triangle is obtuse.");
   } else {
    console.log("The triangle is not obtuse.");
  }
}

isObtuse(triangleA);
