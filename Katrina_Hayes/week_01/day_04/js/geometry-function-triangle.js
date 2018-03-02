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

const isEquilateral = function(t) {
  if (t.sideA === t.sideB === t.sideC) {
    return true;
  } else {
    return false;
  }
}
//test this out:
if (isEquilateral(triangleA)) {
  console.log(`This is an equilateral triangle.`);
} else {
  console.log(`This isn't an equilateral triangle.`);
}

const isIsosceles = function(t) {
  if ((t.sideA === t.sideB && t.sideA != t.sideC) || (t.sideA === t.sideC && t.sideA != t.sideB) || (t.sideB === t.sideC && t.sideB != t.sideA)) {
    return true;
  } else {
    return false;
  }
}
//test this out:
if (isIsosceles(triangleA)) { //aka: if (isIsosceles(triangleA) === true) {}
  console.log(`This triangle is an isoceles.`);
} else {
  console.log(`This triangle is not an isoceles.`);
};

const area = function(t) {
  let s = (t.sideA + t.sideB + t.sideC)/2;
  //console.log(s);
  return s*(s-t.sideA)*(s-t.sideB)*(s-t.sideC)**0.5;
}
//test this out:
console.log(area(triangleA));

const isObtuse = function(t) {
  if ((t.sideA**2 + t.sideB**2 < t.sideC**2) || (t.sideB**2 + t.sideC**2 < t.sideA**2) || (t.sideC**2 + t.sideA**2 < t.sideB**2)) {
    return true;
  } else {
    return false;
  }
}
//test this out:
if (isObtuse(triangleA)) {
  console.log(`This triangle is obtuse.`);
} else {
  console.log(`This triangle is not obtuse.`);
}
