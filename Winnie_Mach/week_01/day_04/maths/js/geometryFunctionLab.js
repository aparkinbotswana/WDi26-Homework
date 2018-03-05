// Geometry Function Lab
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

// My Objects
const rectangleA = {
  length: 4,
  width: 4
};

const rectangleB = {
  length: 5,
  width: 20
};

const rectangleC = {
  length: 2,
  width: 30
};

const rectangleArray = [rectangleA, rectangleB, rectangleC]; //turning the list of objects into an array

// My function
const isSquare = function (rectangle) {
  const lengthOfShape = rectangle.length;
  const widthOfShape = rectangle.width;
  let isItSquare = false;
  const areaofShape = lengthOfShape * widthOfShape; //formula to calculate area
  const perimeterOfShape = (lengthOfShape * 2) + (widthOfShape * 2); //formula to calculate perimeter
  if (lengthOfShape === widthOfShape) {
      isItSquare = true;
  }
  if (isItSquare) {
    console.log("Your rectangle is a square!");
  } else {
    console.log("Your rectangle is not a square :(")
  }
  console.log(areaofShape);
  console.log(perimeterOfShape);
}

isSquare(rectangleA);
isSquare(rectangleB);
isSquare(rectangleC);

//Looping the objects(the array I've created with the objects) so I can find out the info of all my objects without having to call the functions 50 times like I am doing above ^
for (var i = 0; i < rectangleArray.length; i++) {
  isSquare(rectangleArray[i]);
}


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
const triangleB = { // got NaN for area formula because numbers were 8, 1500, 200 ASK ?? 
  sideA: 900,
  sideB: 800,
  sideC: 1500
};
const triangleC = {
  sideA: 15,
  sideB: 15,
  sideC: 15
};

const triangleArray = [triangleA, triangleB, triangleC];

const triangleInfo = function(triangle){
  const A = triangle.sideA;
  const B = triangle.sideB;
  const C = triangle.sideC;


  const isEquilateral = (A === B && B === C) // if all sides are equal then a triangle is equilateral
  if(isEquilateral) {
    console.log("Yes! Your triangle is equilateral!");
  } else {
    console.log("No, your triangle is not equilateral :(");
  }


  const isIsosceles = A === B || A === C || B === C // if two sides are equal then a triangle is isosceles
  if(isIsosceles) {
    console.log("Yes! Your triangle is an isosceles");
  } else {
    console.log("Noooooo. Your triangle is NOT an isosceles");
  }


  const aSquared = Math.pow(A, 2);
  const bSquared = Math.pow(B, 2);
  const cSquared = Math.pow(C, 2);
  const isObtuse = aSquared + bSquared < cSquared || bSquared + cSquared < aSquared || cSquared + aSquared < bSquared // http://mathworld.wolfram.com/ObtuseTriangle.html
  if(isObtuse) {
    console.log("Your triange is an Obtuse! Horrahh!");
  } else {
    console.log("Boo hoo! Your triange is not Obtuse!");
  }

  const perimeterOfTriangle = A + B + C;
  const halfPerimeter = perimeterOfTriangle / 2
  const areaofTriangle = function (triangle) {
    const formula = halfPerimeter * (halfPerimeter - A) * (halfPerimeter - B) * (halfPerimeter - C) //herons formula
    const area = Math.sqrt(formula);
    console.log(Math.round(area));
  }
  areaofTriangle(triangleArray);

}


for (var i = 0; i < triangleArray.length; i++) {
  triangleInfo(triangleArray[i]);
}
