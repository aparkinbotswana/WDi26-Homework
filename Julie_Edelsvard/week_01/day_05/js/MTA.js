

const trainLines = {

line_N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
line_L: ['8th.', '6th', 'Union Square', '3rd', '1st'],
line_6: ['Grand Central', '33rd', '28th.', '23rd.', 'Union Square', 'Astor Place']

};

const planTrip = function (startLine, startStation, endLine, endStation) {
  let stops1 = [];

console.log(startLine, startStation, endLine, endStation);

let startIndex = trainLines.line_N.indexOf(startStation);
// startIndex = 0
console.log(`startIndex: ${startIndex}`);

let endIndex = trainLines.line_N.indexOf(endStation);
// endIndex = 5
console.log(`endIndex: ${endIndex}`);

// if station 2 is after station 1

if (endIndex < startIndex) {

  let stops = trainLines.line_N;
  stops1 = stops.slice(endIndex, startIndex).reverse();

  console.log(`You must travel through the following stops on the N line: ${stops1} to get to ${endStation}.`);
  }

  // if station 2 is before station 1
  else if (endIndex > startIndex) {
    let stops = trainLines.line_N;
    stops1 = stops.slice(startIndex, endIndex);

    console.log(`You must travel through the following stops on the N line: ${stops1} to get to ${endStation}.`);
  }


// console.log("distance = " + stops1.length);
console.log(stops1.length + " " + "stops in total");


};

planTrip('line_N', '23rd', 'line_N', 'Times Square');
