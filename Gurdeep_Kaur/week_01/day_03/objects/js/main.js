/*Given the following a rectangle object like the one below, write the following functions:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle*/

const rectangleA = {
  length: 2,
  width: 5
};

console.log(`the length of rectangle is ${ rectangleA.length }`);
console.log(`the width of rectangle is ${ rectangleA.width }`);

const isSquare = function(){

  if(rectangleA.length === rectangleA.width){
    console.log('yes it is a square');
  }else {
    console.log('it is a rectangle');
  }
};
isSquare();

const area = function(){
  const rec = rectangleA.length * rectangleA.width;
  console.log(`the area of rectangle is ${ rec }`)
  return rec;
};
area();


const perimeter = function(){
  const per = 2 * (rectangleA.length + rectangleA.width);
  console.log(`the perimeter of rectangle is ${ per }`);
  return per;
};
perimeter();
