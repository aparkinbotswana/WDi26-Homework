// MTA Lab week 1
console.log('LOG ARRAYS TO CONSOLE:')
// Subway line names array:
const subwayLines = ['N', 'L', '6' ];
// N line station names array:
const nLine = ['N', 'Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
console.log(nLine);
// L line station names array:
const lLine = ['L', '8th', '6th', '28th', 'Union Square', '3rd', '1st'];
console.log(lLine);
// 6 line station names array:
const sixLine = ['6', 'Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];
console.log(sixLine);

const tripPlanner  = function (departL, departS, arriveL, arriveS) {
console.log(`USER INPUT: ${ departL }, ${ departS }, ${ arriveL }, ${ arriveS } `);

  let departureLine = [];
  let arrivalLine = [];
  let numStops;
  let arriveNumStUS;
  let departNumStUS;
  let changeNumStops;
  let stationStops;
  let departLStops;
  let arriveLStops;

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

  let departIndex = departureLine.indexOf(departS);
  let arriveIndex = arrivalLine.indexOf(arriveS);
  let departUSqIndex = departureLine.indexOf('Union Square');;
  let arriveUSqIndex = arrivalLine.indexOf('Union Square');;
  // singleline trip
  // if statement works out how many stops and also what stations will be travelled thru
  if (departL === arriveL) {
    if (departIndex < arriveIndex) {
      numStops = arriveIndex  - departIndex;
      stationStops = departureLine.slice(departIndex + 1, arriveIndex).join(', ');
    } else { // travelling in reverse direction
      numStops = departIndex - arriveIndex;
      stationStops = departureLine.slice(arriveIndex + 1, departIndex).reverse().join(', ');
    };
    // output for single line trip
    console.log(`You must travel through the following stops ${ stationStops } on the ${ departL } line. `);
    console.log(`${ numStops } stops in total`);

  } else { // multiline trip
    // if statement works out how many stops and what stations will be travelled thru to Union Square
    // if the departure line is not the same as the arrival line
    let departStIndex = departureLine.indexOf(departS);
    let arriveStIndex = arrivalLine.indexOf(arriveS);
    let departUSqIndex = departureLine.indexOf('Union Square');
    let arriveUSqIndex = arrivalLine.indexOf('Union Square');

      if (departStIndex < departUSqIndex) { // depart station is before Union Square
        departNumStUS = departUSqIndex - departStIndex;
        departLStops = departureLine.slice(departStIndex + 1, departUSqIndex).join(', ');
      } else { // depart station is after Union Square
        departNumStUS = departStIndex - departUSqIndex;
        departLStops = departureLine.slice(departUSqIndex + 1, departStIndex).reverse().join(', ');
      }
      if (arriveStIndex < arriveUSqIndex) { // arrive station is before Union Square
        arriveNumStUS = arriveUSqIndex - arriveStIndex;
        arriveLStops = arrivalLine.slice(arriveStIndex + 1, arriveUSqIndex).reverse().join(', ');
      } else { // arrive station is after Union Square
        arriveNumStUS = arriveStIndex - arriveUSqIndex;
        arriveLStops = arrivalLine.slice(arriveUSqIndex + 1, arriveStIndex).join(', ');
      }
      // determine number of stops when trip requires changing lines
      let changeNumStops = departNumStUS + arriveNumStUS;

      // output for multiline trip
      console.log(`You must travel through the following stops on the ${ departL } line: ${ departLStops }`);
      console.log('Change at Union Square.');
      console.log(`Your journey continues through the following stops: ${ arriveLStops }`);
      console.log(`${ changeNumStops } stops in total`);
  };
};
tripPlanner('N', 'Times Square', '6', 'Astor Place');
