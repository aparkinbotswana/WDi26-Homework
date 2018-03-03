// // Part 1, Rectangle
// // Given the following a rectangle object like the one below, write the following functions:
//
// const rectangleA = {
//   length: 5,
//   width: 5
// };
// // isSquare - Returns whether the rectangle is a square or not
//
// function isSquare (sq) {
//   if (rectangleA.length === rectangleA.width) {
//     return true;
//   } else {
//     return false;
//   }
// };
// isSquare();
//
//
// // // area - Returns the area of the rectangle
// function area (ar) {
//   console.log(rectangleA.length * rectangleA.width)
// };
// area();
//
//
//
// // perimeter - Returns the perimeter of the rectangle
// function perimeter (per) {
//   console.log(2 * (rectangleA.width + rectangleA.length));
// };
// perimeter();


//   // Part 2, Triangle
//   // Given the following a triangle object like the one below, write the following functions:
  const triangleA = {
  sideA: 4,
  sideB: 3,
  sideC: 2
};
//   // isEquilateral - Returns whether the triangle is equilateral or not

// function isEquilateral () {
//   if ((triangleA.sideA === triangleA.sideB) && (triangleA.sideA === triangleA.sideC)) {
//     console.log(true)
//   } else {
//     console.log(false);
//   }
// }
// isEquilateral();

//   // isIsosceles - Returns whether the triangle is isosceles or not
function isIsosceles () {
if (triangleA.sideA === triangleA.sideB)
if (triangleA.sideA === triangleA.sideC)
if (triangleA.sideC === triangleA.sideB) {
  console.log(true)
} else {
  console.log(false);
}
};
isIsosceles();




//   // area - Returns the area of the Triangle
//   // isObtuse - Returns whether the triangle is obtuse or not
