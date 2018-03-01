// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

let squareNumber = function (num) {
  const answer = num * num;
  console.log(`The result of squaring the number ${num} is ${answer}.`);
  return answer;
};

squareNumber(2);

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

let halfNumber = function (x) {
  const result = x/2;
  console.log(`Half of ${x} is ${result}.`);
  return result;
};

halfNumber(10);

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

let percentOf = function (y,z) {
  const ans = y/z * 100;
  console.log(`${y} is ${ans}% of ${z}.`);
  return ans;
};

percentOf(2,4)

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

let areaOfCircle = function (radius) {
  area = (Math.PI * radius * radius).toFixed(2); // Round the result so there are only two digits after the decimal.
  console.log(`The area for a circle with radius ${radius} is ${area}.`)
  return area;
};

areaOfCircle(4);

// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

let calc = function (a) {
  b = halfNumber(a); // Halving the number, a. Note we are not using return within this function because it stops running code afterwards
  c = squareNumber(b); // Squaring b (the result of the above line)
  d = areaOfCircle(c); // Using c (the result of the above line) to calculate area of circle
  e = percentOf(d,c); // Calculating what percentage the area is of the squared result
};

calc(2);
