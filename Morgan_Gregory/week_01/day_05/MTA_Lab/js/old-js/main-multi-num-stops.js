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
  let changeAtUnionSquareStops;

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
  let unionSquareIndex = departureLine.indexOf('Union Square');
  let departUSqIndex = departureLine.indexOf('Union Square');;
  let arriveUSqIndex = arrivalLine.indexOf('Union Square');;
  // singleline trip - WORKS :-)
  // if statement works out how many stops and also what stations will be travelled thru
  if (departL === arriveL) {
    if (departIndex < arriveIndex) {
      numStops = arriveIndex  - departIndex;
      stationStops = departureLine.slice(departIndex + 1, arriveIndex).join(', ');
    } else { // travelling in reverse direction
      numStops = departIndex - arriveIndex;
      stationStops = departureLine.slice(arriveIndex  + 1, departIndex).reverse().join(', ');
    };
    // output for single line trip
    console.log(`You must travel through the following stops ${ stationStops } on the ${ departL } line. `);
    console.log(`${ numStops } stops in total`);

  } else { // multiline trip - NOT WORKING :-(
    // if statement works out how many stops and what stations will be travelled thru to Union Square
    // if the departure line is not the same as the arrival line
    let departStIndex = departureLine.indexOf(departS);
    let arriveStIndex = arrivalLine.indexOf(arriveS);
    let departUSqIndex = departureLine.indexOf('Union Square');
    let arriveUSqIndex = arrivalLine.indexOf('Union Square');
      if (departStIndex < departUSqIndex) {
        departNumStUS = departUSqIndex - departStIndex;
      } else {
        departNumStUS = departStIndex - departUSqIndex;
      }
      if (arriveStIndex < arriveUSqIndex) {
        arriveNumStUS = arriveUSqIndex - arriveStIndex;
      } else {
        arriveNumStUS = arriveStIndex - arriveUSqIndex;
      }
      let changeNumStops = departNumStUS + arriveNumStUS;
      console.log(`${ changeNumStops } stops in total`);
  };
};
tripPlanner('N', 'Times Square', 'L', '8th');


/////////////////////////////////////////////// MY BINNED CODE

// let departUSqIndex = departureLine.indexOf('Union Square');;
// let changeNumStops;
// let stationStops;
// let changeAtUnionSquareStops;

// if (departIndex < unionSquareIndex) {
//   changeAtUnionSquareStops = unionSquareIndex - departIndex;
//   changeAtUnionSquareStops = departureLine.slice(departIndex + 1, arriveIndex - 1).join(', ');
//     if (unionSquareIndex < arriveIndex) { // travelling forward
//       changeNumStops = departIndex + arriveIndex - 1;
//       changeStops = arriveIndex - unionSquareIndex;
//       changeStops = arrivalLine.slice(arriveIndex - 1).join(', ');
//     }  else { // travelling in reverse direction
//       changeStops = unionSquareIndex - arriveIndex;
//       changeStops = arrivalLine.slice(unionSquareIndex - 1).join(', ');
//       console.log(changeStops);
//     };
//     // output for multi line trip
//     console.log(`You must travel through the following stops on the ${ departL } line: ${ changeAtUnionSquareStops }`);
//     console.log('Change at Union Square.');
//     console.log(`Your journey continues through the following stops: ${ changeStops }`);
//     console.log(`${ changeNumStops } stops in total`);
// }

// let unionSquareIndex;
// change at Union Square
// if (departL !== arriveL) {
//   console.log('hello test');
//   //  determie US index
//   // unionSquareIndex = indexOf('unionSquare'.depatL);
//   // you will need to change at Union Square
//   // is unionSquareIndex <  arriveSIndex
//   // if true then arriveS = arriveSIndex - unionSquareIndex
//   // stationStops = departureLine.slice(unionSquareIndex -1).join(', ');
//
// };
