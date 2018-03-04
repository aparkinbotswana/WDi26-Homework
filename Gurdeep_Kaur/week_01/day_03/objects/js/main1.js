/*Given the following a triangle object like the one below, write the following functions:

isEquilateral - Returns whether the triangle is equilateral or not
isObtuse - Returns whether the triangle is obtuse or not*/

const triangleA = {
  sideA: 4,
  sideB: 4,
  sideC: 4
};

console.log(`the sideA of triangle is ${ triangleA.sideA }`);

const isEquilateral = function(){
  if( (triangleA.sideA === triangleA.sideB) && (triangleA.sideB === triangleA.sideC)){
    console.log('the triangle is equilateral');
  } else {
  console.log('the triangle is not equilateral');
  }
};
isEquilateral();

/*isIsosceles - Returns whether the triangle is isosceles or not*/
const isIsosceles = function(){
  if( triangleA.sideA === triangleA.sideB ){
    console.log('the triangle is  isoleceles');

  } else if ( triangleA.sideB === triangleA.sideC ){
    console.log('the triangle is  isoleceles ');

  } else {
    console.log('the triangle is not isoleceles');
  }
};
isIsosceles();

/*area - Returns the area of the Triangle*/

const area = function(){

  const tri = (triangleA.sideA * triangleA.sideB)/2;
  console.log(`the area of traingle is ${ tri }`);
  return tri;
};
area();

/*isObtuse - Returns whether the triangle is obtuse or not*/

const isObtuse= function(){

  if( (triangleA.sideB * triangleA.sideB) > (triangleA.sideA * triangleA.sideA )
  + (triangleA.sideC * triangleA.sideC))
  {
    console.log('the triangleA is obtuse');
  }
  else{
    console.log('the triangleA  is not obtuse');
  }
};
isObtuse();
