console.log("Homework day 4..")

/*Given the following a rectangle object like the one below, write the following functions:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle
*/

let rectangleA = {
  length: 4,
  width: 8
};

  let length = rectangleA.length;
  let width = rectangleA.width;

let isSquare = function (shape){
  if (length === width) {
    console.log("square");
  } else {
    console.log("rectangle")
  }
}

isSquare();

  let area = function (areaOfShape){
    areaOfShape = length*width;
    console.log(areaOfShape);
  }
  area();

  let perimeter = function (pOfShape){
    pOfShape = 2*(length+width);
    console.log(pOfShape);
  }
  perimeter();

  /*isEquilateral - Returns whether the triangle is equilateral or not
  isIsosceles - Returns whether the triangle is isosceles or not
  area - Returns the area of the Triangle
  isObtuse - Returns whether the triangle is obtuse or not*/
  const triangleA = {
    sideA: 4,
    sideB: 4,
    sideC: 3
  };

  let A = triangleA.sideA;
  let B = triangleA.sideB;
  let C = triangleA.sideC;

  console.log(C);
  let isEquilateral = function(){
  if (A === B && B === C){
    console.log("equilateral");
  } else {
    console.log("not");
  }
}
isEquilateral();

let isIsosceles = function(){
if (A === B && B != C){
  console.log("isosceles");
} else if (A === C && A != B){
  console.log("isosceles");
} else if (B === C && A != B){
  console.log("isosceles");
} else {
  console.log("not");
}
}
isIsosceles();
