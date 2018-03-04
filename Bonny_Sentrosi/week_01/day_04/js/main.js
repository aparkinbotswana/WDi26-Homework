console.log("dlrow olleh");

const rectangleA = {
  length: 4,
  width: 8,
};


// compare id width and length are the same, returns isSquare true or false

const isSquare = function(sq) {
  if(sq.length === sq.width) {
  console.log(`Yes this is a square`);
} else {
  console.log(`No, this is a rectangle`);
};

};

console.log(isSquare(rectangleA));
// takes length, multiply by width and return the value

const area = function() {
  console.log(`The area is ${rectangleA.length * rectangleA.width}`);
};




// takes both values, returns the perimeter

const perimeter = function() {
  console.log(`The perimeter is ${rectangleA.length + rectangleA.width * 2}`);
};


//Part two, The Triangle
// Given the following a triangle object like the one below, write the following functions:
//



const triangleA = {
  sideA: 3,
  sideB: 2,
  sideC: 7,
};

// isEquilateral - Returns whether the triangle is equilateral or not all 3 values must be the same

const isEquilateral = function(tr) {
  if(tr.sideA === tr.sideB === tr.sideC) {
  console.log(`Yes this equilateral. Super.`);
  }else {
  console.log(`No, there's some funk in the junk of this try-angle`);
  };
};
console.log(isEquilateral(triangleA));

// isIsosceles - Returns whether the triangle is isosceles or not


const isIsosceles= function(io) {
  if(io.sideA === io.sideB || io.sideA === io.sideC || io.sideB === io.sideC) {
  console.log(`Yes this is an Isausages triangle.`);
  }else {
  console.log(`No Isausages, better luck next time.`);
  };
};
console.log(isIsosceles(triangleA));


// area - Returns the area of the Triangle




const triArea = function() {
  let sum1 = ( (triangleA.sideA + triangleA.sideB + triangleA.sideC) / 2);
  let areaSum = Math.sqrt(sum1*(sum1-triangleA.sideA)*(sum1-triangleA.sideB)*(sum1-triangleA.sideC));

};
console.log(triArea(triangleA));

// isObtuse - Returns whether the triangle is obtuse or not
// a2 + b2 < c2 is the formula but we first need to store the sides in variables
// so we can use the longest longest side for the equation
// ok so.... sideA squared + sideB squared < sideC squared. if this is true then we have
// an obtuse triangle

 if (triangleA.sideA > triangleA.sideB && triangleA.sideA > triangleA.sideC){
   let longestSide = triangleA.sideA;
 } else if (triangleA.sideB > triangleA.sideA && triangleA.sideB > triangleA.sideC) {
   let longestSide = triangleA.sideB;
 } else if (triangleA.sideC > triangleA.sideA && triangleA.sideC > triangleA.sideB) {
   let longestSide = triangleA.sideC;
 } else {
   console.log("Nah bruh, not obtuse");
 };

console.log(longestSide);
 // now we know our longest side s


for (let item in cartForParty) {
  total = total + parseFloat
}
