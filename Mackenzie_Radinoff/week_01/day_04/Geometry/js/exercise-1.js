//Part 1, Rectangle
//Given the following a rectangle object like the one below,
//write the following functions:

//isSquare - Returns whether the rectangle is a square or not
//area - Returns the area of the rectangle
//perimeter - Returns the perimeter of the rectangle

const makeRectangle = function(lengthInput,widthInput){
  let rectangle = {
    shape:(widthInput-lengthInput),
    area:(widthInput*lengthInput),
    perimeter:(widthInput*2)+(lengthInput*2)
  };
  if (rectangle.shape===0){
    rectangle.shape='square'
  }
  else{
    rectangle.shape='not square'
  }
  console.log (`This rectangle with a length of ${lengthInput} and width of ${widthInput} is ${rectangle.shape} with an area of ${rectangle.area} and a perimeter of ${rectangle.perimeter}` )
}

//Part 2, Triangle
//Given the following a triangle object like the one below,
//write the following functions:

//isEquilateral - Returns whether the triangle is equilateral or not
//isIsosceles - Returns whether the triangle is isosceles or not
//area - Returns the area of the Triangle
//isObtuse - Returns whether the triangle is obtuse or not

const makeTriangle = function(sideA,sideB,sideC){
  let sides =[sideA,sideB,sideC];
  let sortSides=sides.sort();
  let c=sortSides[2]; let b=sortSides[1];let a=sortSides[0];
  let p= (c+b+a);
  let beforeSquareRoot=p*(p-a)*(p-b)*(p-c);
  let pythagoras = (a*a)+(b*b);
  let triangle = {
    shape:(sideA===sideB && sideB==sideC),
    isIsosceles:(sideA-sideB===sideC-sideB || sideB-sideC),
    area:Math.round(Math.sqrt(beforeSquareRoot)),
    obtuse:(c*c)>(a*a)+(b*b)

  }
  if (triangle.shape) {
    triangle.shape='is equilateral'
  }
  else {
    triangle.shape='is not equilateral'
  }
  if(triangle.isIsosceles && triangle.shape==='is not equilateral'){
    triangle.isIsosceles='is isosceles'
  }
  else {
    triangle.isIsosceles='is not isosceles'
  }
  if (triangle.obtuse) {
    triangle.obtuse='is obtuse'
  }
  else {
    triangle.obtuse='is not obtuse'
  }
  console.log(`This triange with three sides of ${sideA}, ${sideB}, and ${sideC} ${triangle.shape}, ${triangle.isIsosceles}, has an area of ${triangle.area}, and ${triangle.obtuse}`)
}
