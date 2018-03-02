// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not

const rectangleA = {
  length: 4,
  width: 4
};

const isSquare = function (rectangleA) {
  if (rectangleA.length === rectangleA.width) {
    console.log(true);

} else {
  console.log(false);
  }
};

isSquare(rectangleA);





// area - Returns the area of the rectangle

const area = function (rectangleA) {
return rectangleA.length * rectangleA.width;

}
console.log(rectangleA.length * rectangleA.width);
area(rectangleA);






// perimeter - Returns the perimeter of the rectangle

const perimeter = function (rectangleA) {
return rectangleA.length + rectangleA.length + rectangleA.width + rectangleA.width;

}
console.log(rectangleA.length + rectangleA.length + rectangleA.width + rectangleA.width);
perimeter(rectangleA);






// Part 2, Triangle
//
// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

const isEquilateral = function (triangleA) {
  if (triangleA.sideA === triangleA.sideB === triangleA.sideC) {

    console.log(true);

} else {
  console.log(false);
  }
};

isEquilateral(triangleA);






// isIsosceles - Returns whether the triangle is isosceles or not

const isIsosceles = function (triangleA) {
  if (triangleA.sideA === triangleA.sideB) {
    console.log(true);
}  else if (triangleA.sideB === triangleA.sideC) {
    console.log(true);
} else {
  console.log(false);
  }
};

isIsosceles(triangleA);





// area - Returns the area of the Triangle

const triangleArea = function (triangleA) {
  let s = (triangleA.sideA + triangleA.sideB + triangleA.sideC) / 2;
console.log(s);
}

triangleArea(s);
