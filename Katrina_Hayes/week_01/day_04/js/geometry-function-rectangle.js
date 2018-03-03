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


const rectangleA = {
  length: 6,
  width: 7
};

const isSquare = function(r) {
  if (r.length === r.width) {
    return true; //not sure whether this is necessary for our purposes but it says to return the result
  } else {
    return false; //not sure whether this is necessary for our purposes but it says to return the result
  }
}
//test this out:
if (isSquare(rectangleA)) { //aka: if (isSquare(rectangleA) === true) {}
  console.log(`This rectangle is a square.`);
} else {
  console.log(`This rectangle is not a square.`);
};

const area = function(r) {
  return r.length * r.width;
}
//test this out:
console.log(area(rectangleA));

const perimeter = function(r) {
  return r.length*2 + r.width*2;
}
//test this out:
console.log(perimeter(rectangleA));
