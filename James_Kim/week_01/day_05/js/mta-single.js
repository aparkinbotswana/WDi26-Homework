const lineN = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
const lineL = ['8th', '6th', 'Union Square', '3rd', '1st'];
const line6 = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Aston Place'];

let tripStart = " ";
let tripEnd = " ";

const planTrip = function (start, stop) { // function to set up tripStart and tripEnd with values from planTrip input values
  tripStart = start;
  tripEnd = stop;
}

planTrip('Times Square', '8th');

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
