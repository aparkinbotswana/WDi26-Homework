// Geometry Function Lab
// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions:
//



// const rectangleA = {
//   length: 4,
//   width: 4
// };

const rectangleA = {
  length: 4,
  width: 4
};

// isSquare - Returns whether the rectangle is a square or not

const isSquare = function (rec) {
    if (rec.length === rec.width) {
      return('isSquare');
    } else {
      return('isNotSquare');
    }
};

console.log(isSquare(rectangleA));

// area - Returns the area of the rectangle

const area = function (rec) {
    return rec.length * rec.width;
}

console.log(area(rectangleA));


// perimeter - Returns the perimeter of the rectangle

const perimeter = function (rec) {
    return 2*(rec.length + rec.width);
}

console.log(perimeter(rectangleA));


console.log(`=====================================================`)

// Part 2, Triangle
// Given the following a triangle object like the one below, write the following functions:


const triangleA = {
  sideA: 4,
  sideB: 3,
  sideC: 3
};

// isEquilateral - Returns whether the triangle is equilateral or not


const isEquilateral = function (object) {
  let sides = Object.values(object);                    // converts object values to array
    const checker = function (currentValue) {          // check if array values ===
        return currentValue === sides[0];
};
    if (sides.every(checker) === true ) {            // return yes or no
      console.log('isEq');
    } else {
      console.log('isNotEq');
    }
};

isEquilateral(triangleA);

console.log(`=====================================================`)

// isIsosceles - Returns whether the triangle is isosceles or not



// isIsosceles(triangleA);

// area - Returns the area of the Triangle

console.log(`=====================================================`)


const findArea = function (object) {
  const triPmeter = (object.sideA + object.sideB + object.sideC) / 2;
  const area = Math.sqrt(triPmeter*(triPmeter - object.sideA)*(triPmeter - object.sideB)*(triPmeter - object.sideC));
  console.log(area.toFixed(2))
}

findArea(triangleA);


console.log(`=====================================================`)


// isObtuse - Returns whether the triangle is obtuse or not


// const isObtuse = function (object) {
//   let largestSide = (object.sizeA,object.sizeB,object.sizeC);
//   // if (Math.pow(largestSide,2) > 5)
//     console.log(largestSide);
// }

isObtuse(triangleA);
