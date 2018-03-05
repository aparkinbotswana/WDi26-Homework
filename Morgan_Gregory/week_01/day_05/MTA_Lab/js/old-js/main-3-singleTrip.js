// console.log('Testing main.js to console is workiing');

// MTA Lab week 1
// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.

// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)

// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// console.log() shows output similar to this:
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."

////////////////////////////////////////////////////////////////////////////////// single trip:
// Subway line names array:
const subwayLines = ['N', 'L', '6' ];
// N line station names array:
const nLine = ['N', 'Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
// L line station names array:
const lLine = ['L', '8th', '6th', '28th', 'Union Square', '3rd', '1st'];
// 6 line station names array:
const sixLine = ['6', 'Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];

const tripPlanner  = function (departL, departS, arriveL, arriveS) {
  console.log(`USER INPUT: ${ departL }, ${ departS }, ${ arriveL }, ${ arriveS }`);

  let departureLine = [];
  let arrivalLine = [];
  let numStops;

  // determine departure line from user input:
  if (departL === nLine[0]) {
    departureLine = nLine;
  } else if (departL === lLine[0]) {
      departureLine = lLine;
  } else if (departL === sixLine[0]) {
      departureLine = sixLine;
  } else {
    console.log('no such line');
  }
  // determine arrival line from user input:
  if (arriveL === nLine[0]) {
    arrivalLine = nLine;
  } else if (arriveL === lLine[0]) {
      arrivalLine = lLine;
  } else if (arriveL === sixLine[0]) {
      arrivalLine = sixLine;
  } else {
    console.log('no such line');
  }
  // variables hold index numbers from user input
  let departIndex = departureLine.indexOf(departS);
  let arriveIndex = arrivalLine.indexOf(arriveS);
  let stationStops;
  // if statement works out how many stops and also what stations will be travelled thru
  if (departIndex < arriveIndex ) {
    numStops = arriveIndex  - departIndex;
    stationStops = departureLine.slice(departIndex + 1, arriveIndex ).join(', ');
  } else {
    numStops = departIndex - arriveIndex ; // travelling in reverse direction
    stationStops = departureLine.slice(arriveIndex  + 1, departIndex).reverse().join(', ');
  }
  console.log(`You must travel through the following stops on the ${ departL } line: ${ stationStops }`);
  console.log(`${ numStops } stops in total`);
  console.log(departIndex, arriveIndex);
};
tripPlanner('N', 'Times Square', 'N', '8th');
