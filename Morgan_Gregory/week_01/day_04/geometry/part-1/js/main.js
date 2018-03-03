console.log('working');

// Geometry Function Lab
// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions:

// isSquare - Returns whether the rectangle is a square or not

// area - Returns the area of the rectangle

// perimeter - Returns the perimeter of the rectangle

const rectangleA = {
  length: 4,
  width: 5
};

// isSquare - Returns whether the rectangle is a square or not
const isSquare = function (r) {
    if (r.length === r.width ) {
      console.log(`It's a square!`);
    } else {
      console.log(`Not a square!`);
    }
};
isSquare(rectangleA);

// area - Returns the area of the rectangle
const areaRectangle = function (a) {
  let area = a.width * a.length;
  console.log(`The area of the rectangle is calculated by: multiplying ${ a.width } * ${ a.length } which returns ${ area }`);
}
areaRectangle(rectangleA);

// perimeter - Returns the perimeter of the rectangle
const permimeterRectangle = function (p) {
  let perimeter = (p.width + p.length) * 2;
  console.log(`The perimeter of the rectangle is calculated by: adding the width (${ p.width }) to the length (${ p.length }) and then multiplying by 2 giving us ${ perimeter }`);
}
permimeterRectangle(rectangleA);
