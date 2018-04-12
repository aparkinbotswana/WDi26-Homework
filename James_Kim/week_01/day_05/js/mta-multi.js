/* RANDOM CRAP

const greet = function () {
  console.log("Hello World!");
}

greet();

const nameGreet = function (name) {
  console.log(`Hello, ${name}`);
}

nameGreet("Jack");

const add = function (x, y) {
  return x + y;
}

const multiply = function (x, y) {
  return x * y;
}

var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var citrus = fruits.slice(1, 5);

*/

/*Activity
Create a program that models a simple subway system.

The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// console.log() shows output similar to this:
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."
There are 3 subway lines:
The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
Hints:
Work out how you would do it on paper first! Then start to explain that process in Javascript.
Get the program to work for a single line before trying to tackle multiple lines.
Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
The key to the lab is finding the index positions of each stop. (hint: indexOf())
Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)*/

const allLines = {
  lineN: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  lineL: ['8th', '6th', 'Union Square', '3rd', '1st'],
  line6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Aston Place']
};

let tripStart = " ";
let tripEnd = " ";

const planTrip = function (start, stop) { // function to set up tripStart and tripEnd with values from planTrip input values
  tripStart = start;
  tripEnd = stop;
}

planTrip('Times Square', '23rd');

const trip = function (start, stop) {
  let stops = lineN.indexOf(start) - lineN.indexOf(stop); // local variable 'stops' gains index number of specific station and finds out the number of stations in between
  if (stops < 0) { // In the case of going backwards on the line, stops is multiplied by -1 so that a positive value is always provided
  stops = -1 * stops;
} return stops; // returns the stops number as a positive number once the IF function has run for a negative number to convert it to a positive number
}

// 'trip' variable is used to show how many stops between specific stations
console.log(`There are ${trip(tripStart, tripEnd)} stops in total between ${tripStart} and ${tripEnd}.`);

const stations = function (start, stop) {
 let startStation = lineN.indexOf(start);
 let stopStation = lineN.indexOf(stop);
 let firstStation = lineN.indexOf(start) + 1;
 let endStation = lineN.indexOf(stop) + 1;
 if (stopStation >= startStation) {
   let stops = lineN.slice(firstStation, stopStation);
   return stops;
 } else {
   let stops = (lineN.slice(endStation, startStation)).reverse();
   return stops;
 }
}

console.log(`You must travel from ${tripStart} through the following stops on the N Line: ${stations(tripStart, tripEnd)} to get to ${tripEnd}.`);
