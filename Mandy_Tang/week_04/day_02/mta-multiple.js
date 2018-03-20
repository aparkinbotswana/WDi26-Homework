// Activity
// Create a program that models a simple subway system.
// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

const trainLines = {
  "L": ["8th on L", "6th", "Union Square on L", "3rd", "1st"],
  "6": ["Grand Central", "33rd", "28th on 6", "23rd on 6", "Union Square on 6", "Astor Place"],
  "N": ["Times Square", "34th", "28th on N", "23rd on N", "Union Square on N", "8th on N"]
};

const planTrip = function(startLine, start, endLine, end) {
  let indexStart = trainLines[startLine].indexOf(start); // Finding the position/index of the starting stop
  let indexTransfer; // This is the transfer point if 2 lines, or end point if 1 line only

  if (startLine === endLine) {
    indexTransfer = trainLines[startLine].indexOf(end);
  } else {
    indexTransfer = trainLines[startLine].indexOf(`Union Square on ${startLine}`);
  }

  let numStopsL1 = indexStart - indexTransfer;
  if (numStopsL1 < 0) {
    numStopsL1 = numStopsL1 * -1;
  }

  let stopsL1;
  if (indexStart < indexTransfer) { // If true, the train is going forwards in the same direction as the array
    stopsL1 = trainLines[startLine].slice(indexStart + 1, indexTransfer + 1); // Slice out the stops we want
  } else { // Reverse the order if going backwards
    stopsL1 = trainLines[startLine].slice(indexTransfer, indexStart).reverse();
  }

  let tripDetails;
  if (startLine === endLine) {
    tripDetails = `Travel on the ${startLine} line through the following stops: ${stopsL1.join(', ')}.\nGet off at ${end}.\nThere are ${numStopsL1} stops in total.`;
    return tripDetails;
  }

  const indexTransfer2 = trainLines[endLine].indexOf(`Union Square on ${endLine}`);
  const indexFinal = trainLines[endLine].indexOf(end);
  let numStopsL2 = indexTransfer2 - indexFinal;
  if (numStopsL2 < 0) {
    numStopsL2 = numStopsL2 * -1;
    console.log(numStopsL2);
  }

  let stopsL2;
  if (indexTransfer2 < indexFinal) {
    stopsL2 = trainLines[endLine].slice(indexTransfer2 + 1, indexFinal + 1);
  } else {
    stopsL2 = trainLines[endLine].slice(indexFinal, indexTransfer2).reverse();
  }

  tripDetails = `Travel on the ${startLine} line through the following stops: ${stopsL1.join(', ')}.\nTransfer at Union Square to the ${endLine} line.\nKeep travelling through the following stops: ${stopsL2.join(', ')}.\nGet off at ${end}.\n${numStopsL1 + numStopsL2} stops in total.`;
  return tripDetails;

};

console.log(planTrip("L", "1st", "6", "Grand Central"));
console.log(planTrip("N", "34th", "6", "23rd on 6"));
console.log(planTrip("6", "28th on 6", "L", "8th on L"));
console.log(planTrip("L", "1st", "L", "8th on L"));
