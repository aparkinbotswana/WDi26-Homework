//Part 1 and Part2 are included in the same file

//------PART -1 -------------

// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."


const squareNumber = function(numbr)
{
  const sqNum = numbr * numbr;
  console.log(`The result of squaring the number ${numbr} is ${sqNum}.`);
  return sqNum;
};


// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
const halfNumber = function(numbr)
{
  const halfNum = numbr/2;
  console.log(`Half of ${numbr} is ${halfNum}.`);
  return halfNum;
};

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
const percentOf = function(numbr1,numbr2)
{
  const perOf = (numbr1/numbr2)*100;
  console.log(`${numbr1} is ${perOf}% of ${numbr2}.`);
};

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.
const areaOfCircle = function(radius)
{
  const areaCircle = Math.ceil(Math.PI * radius *radius); //
  console.log(`The area for a circle with radius ${radius} is ${areaCircle}.`)
  return areaCircle;
};

// I have passed the same values as they were in homework..
squareNumber(3);
halfNumber(5);
percentOf(2,4);
areaOfCircle(2);

console.log ("--Part2--");
//---- PART 2---------------------------------

// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

const multiper = function(num)
{
  const halfnum = halfNumber(num);
  const sqnum = squareNumber(halfnum);
  const areacir = areaOfCircle(sqnum);
  const perOf = percentOf(areacir,sqnum);

};

multiper(5);
