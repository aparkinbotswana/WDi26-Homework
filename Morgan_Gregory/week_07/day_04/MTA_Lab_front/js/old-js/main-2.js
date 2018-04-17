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
// subway lines object
const subwayLines = {
  nLine: 'N',
  lLine: 'L',
  sixLine: '6'
};

// subway stations object
const subwayStations = {
  nLine: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  lLine: ['8th', '6th', '28th', 'Union Square', '3rd', '1st'],
  sixLine: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
};

// ** console user input: trip plan
const tripPlanner  = function (departLine, departStation, arriveLine, arriveStation) {
  console.log(`USER INPUT: ${ departLine }, ${ departStation }, ${ arriveLine }, ${ arriveStation }`);

  // gets values from object subwayLines
  let lines = Object.values(subwayLines);
  console.log(lines);
  // finds index number using user input departLine thru lines variable
  let departLineIndex = lines.indexOf(departLine);
  console.log(departLineIndex);
  // finds key names using departLineIndex variable by accessing subwayLines object
  let linesKeys = Object.keys(subwayLines);
  console.log(linesKeys[departLineIndex]);
  // gets values from object subwayStations
  let stations = Object.values(subwayStations);
  console.log(stations);

  let departStationIndex = stations[departLineIndex].indexOf(departStation);
  console.log(departStationIndex);

  let arriveStationIndex = stations[departLineIndex].indexOf(arriveStation);
  // console.log(arriveStationIndex);
  console.log(stations[departLineIndex]);

  // logic for single trip plan
  if ( departStationIndex < arriveStationIndex ) {
    for (i = departStationIndex + 1; i < arriveStationIndex; i++) {
      console.log(`You will need to travel thru these stations: ${stations[departLineIndex][i]}`);
    }
  } else {
    for (i = departStationIndex - 1; i > arriveStationIndex; i--)
    console.log();
  };
};
tripPlanner('N', 'Times Square', 'N', '8th');

























































////////////////////////////////////// BIN CODE //////////////////////////////////////
// Joel's solution re bolding text in the console
// console.log('This next thing is in %cbold %cbut the rest is not', 'font-weight: bold', 'font-weight: normal');

// ** console user input regarding: Lines
// const singleTripLines = function (departLine, departStation, arriveLine, arriveStation) {
//   let lines = Object.values(departLine, arriveLine);
//
//   if (departLine === arriveLine) {
//     return `You are traveling on one line the: ${ lines } line`;
//   };
// };
// singleTripLines('N', 'Times Square', 'N', '8th');

// return output;

// for (i = 0; i < stations.length; i++) {
//   if (departStation && arriveStation) {

//   };
// };


// for (i = 0; i < stations.length; i++) {
//   console.log(subwayStations.nLine[i]);
//   // console.log(subwayStations.lLine[i]);
//   // console.log(subwayStations.sixLine[i]);
//   if (a === stations[i]) {
//     let departStation =  [i];
//     // console.log
//   }
// }
// };

// let output = `You will start from this station: ${ departStation } and end at this station: ${ arriveStation }`;;

//
// const tripStations = function (departLine, departStation, arriveLine, arriveStation) {
//   let stations = Object.values(departStation, arriveStation);
//   // console.log(`You will be traveling thru theses: ${ stations }`)
// };
// console.log(tripStations('N', 'Times Square', 'N', '8th'));
//
// const singleTripPlan = function () {
//
//   console.log(`You will be traveling on the ${ tripLines() } thru these stations: ${ tripStations() }`)
// };
// console.log( singleTripPlan() );

























  // console.log(lines);
  // console.log(stations);

  // for (i = 0; i < stations.length; i++) {
  //   console.log(subwayStations.nLine[i]);
  //   // console.log(subwayStations.lLine[i]);
  //   // console.log(subwayStations.sixLine[i]);
  //   if (a === stations[i]) {
  //     let departStation =  [i];
  //     // console.log
  //   }
  // }
// };
// singleTrip(subwayStations);


////////////////////////// MY SNIPPETS AND RUBBISH BELOW ////////////////////////////////
// const timesSquare = {
//   line: 'N',
//   stopNum: 1
// }

// function test() {
//     const nLine = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
// };
// console.log(test.indexOf(nLine)));


// cash resgister code
// const cartForParty = {
//   banana: "1.25",
//   handkerchief: "0.99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };
//
// const cashRegister = function (input) {
//   let cartValues = Object.values(input);
//   let valuesSum = 0;
//   for (i = 0; i < cartValues.length; i++) {
//     valuesSum += +cartValues[i];
//   }
//   return valuesSum;
// };
//
// let registerTotal = cashRegister(cartForParty);
