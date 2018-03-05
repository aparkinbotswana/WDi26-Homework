console.log('hello');

/*Part 1, Rectangle
Given the following a rectangle object like the one below, write the following functions:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle
const rectangleA = {
  length: 4,
  width: 4
};*/

const rectangleA = {
  length: 4,
  width: 4
}

const rectangleB = {
  length: 3,
  width: 2
}

const rectangleC = {
  length: 5,
  width: 4
}

const isSquare = function (squareRectangle) {
  if (squareRectangle.length === squareRectangle.width) {
    console.log('This rectangle is a square.');
  } else {
    console.log('This rectangle is not a square.');
  }
}

isSquare(rectangleA);
isSquare(rectangleB);
isSquare(rectangleC);

const area = function (areaOfRectangle) {
  (description = areaOfRectangle.length * areaOfRectangle.width);
  console.log(description);
}

area(rectangleA);
area(rectangleB);
area(rectangleC);

const perimeter = function (totalPerimeter) {
  (description = ((totalPerimeter.length*2)+(totalPerimeter.width*2)));
  console.log(description);
}

perimeter(rectangleA);
perimeter(rectangleB);
perimeter(rectangleC);

/*Part 2, Triangle
Given the following a triangle object like the one below, write the following functions:

isEquilateral - Returns whether the triangle is equilateral or not
isIsosceles - Returns whether the triangle is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not
const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};*/

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
}

const triangleB = {
  sideA: 3,
  sideB: 3,
  sideC: 3
}

const triangleC = {
  sideA: 3,
  sideB: 4,
  sideC: 5
}

const isEquilateral = function (equilateralTriangle) {
  if (equilateralTriangle.sideA === equilateralTriangle.sideB && equilateralTriangle.sideB === equilateralTriangle.sideC && equilateralTriangle.sideA === equilateralTriangle.sideC) {
    console.log('This triangle is an equilateral triangle.');
  } else {
    console.log('This triangle is not an equilateral triangle.');
  }
}

isEquilateral(triangleA);
isEquilateral(triangleB);
isEquilateral(triangleC);

const isIsosceles = function (isoscelesTriangle) {
  if (isoscelesTriangle.sideA === isoscelesTriangle.sideB || isoscelesTriangle.sideB === isoscelesTriangle.sideC || isoscelesTriangle.sideA === isoscelesTriangle.sideC) {
    console.log('This triangle is an isosceles triangle.');
  } else {
    console.log('This triangle is not an isosceles triangle.');
  }
}

isIsosceles(triangleA);
isIsosceles(triangleB);
isIsosceles(triangleC);

const areaTriangle = function (areaOfTriangle) {
  answer1 = ((areaOfTriangle.sideA + areaOfTriangle.sideB + areaOfTriangle.sideC)/2);
  answer2 = (answer1*((answer1-areaOfTriangle.sideA)*(answer1-areaOfTriangle.sideB)*(answer1-areaOfTriangle.sideC)));
  answer3 = Math.sqrt(answer2)
  console.log(answer3);
}

areaTriangle(triangleA);
areaTriangle(triangleB);
areaTriangle(triangleC);

const isObtuse = function (ot) {
  if ((ot.sideA*ot.sideA) + (ot.sideB*ot.sideB) < (ot.sideC*ot.sideC)) || ((ot.sideB*ot.sideB) + (ot.sideC*ot.sideC) < (ot.sideA*ot.sideA)) || ((ot.sideA*ot.sideA) + (ot.sideC*ot.sideC) < (ot.sideB*ot.sideB)) {
    console.log('This triangle is an obtuse triangle.');
  } else {
    console.log('This triangle is not an obtuse triangle.');
  }
}

isObtuse(triangleA);
isObtuse(triangleB);
isObtuse(triangleC);
