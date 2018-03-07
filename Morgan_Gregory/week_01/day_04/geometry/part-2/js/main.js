console.log('I can hear you');

// Part 2, Triangle
// Given the following a triangle object like the one below, write the following functions:

// isEquilateral - Returns whether the triangle is equilateral or not

// isIsosceles - Returns whether the triangle is isosceles or not

// area - Returns the area of the Triangle

// isObtuse - Returns whether the triangle is obtuse or not

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

// isEquilateral - Returns whether the triangle is equilateral or not
const isEquilateral = function (e) {
    if (e.sideA === e.sideB && e.sideA === e.sideC ) {
      console.log(`Wow this is so much fun! It's an equilateral triangle!`);
    } else {
      console.log(`Isn't an equilateral triangle.`);
    }
};
isEquilateral(triangleA);

// isIsosceles - Returns whether the triangle is isosceles or not
const isIsosceles = function (i) {
    if (i.sideA === i.sideB && i.sideA !== i.sideC) {
      console.log(`It's an isosceles triangle!`);
    } else {
      console.log(`Isn't an isosceles triangle.`);
    }
};
isIsosceles(triangleA);

// area - Returns the area of the Triangle
const areaTriangle = function (a) {
  let perimeter = (a.sideA + a.sideB + a.sideC)/2;
  let area =  Math.sqrt(perimeter*((perimeter-a.sideA)*(perimeter-a.sideB)*(perimeter-a.sideC)));
  console.log(`The area of this triangle is: ${ area.toFixed(2) }`)
};
areaTriangle(triangleA);

// isObtuse - Returns whether the triangle is obtuse or not
const isObtuse = function (o) {
  let hypotenuse = o.sideA + o.sideB;
  if (hypotenuse < o.sideC) {
    console.log(`The triangle is obtuse!`);
  } else {
    console.log(`The triangle is not obtuse - it's acute`);
  }
};
isObtuse(triangleA);



// isObtuse - Returns whether the triangle is obtuse or not
