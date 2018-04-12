// MTA Lab week 7
// Subway line names array:
const subwayLines = ['N', 'L', '6'];

// N line station names array:
const nLine = ['N', 'Times Square', '34th', '28th', '23rd', 'Union Square', '8th']; // [l]

// L line station names array:
const lLine = ['L', '8th', '6th', '28th', 'Union Square', '3rd', '1st']; // [l]

// 6 line station names array:
const sixLine = ['6', 'Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']; // [l]

const subwayArrays = [nLine, lLine, sixLine]; // [a]
const departLines = ['departNLine', 'departLLine', 'depart6Line'];
const arriveLines = ['arriveNLine', 'arriveLLine', 'arrive6Line'];

let userDepartLine;
let userDepartStation;
let userArriveLine;
let userArriveStation;

// USER DROPDOWN MENUS:
// DEPART LOOP:
for (let a = 0; a < subwayArrays.length; a++) { // loops X num of lines
  let sel = document.getElementById(departLines[a]);
  for (let l = 0; l < subwayArrays[a].length; l++) { // loops X num of stations
      let opt = document.createElement('option');
      opt.innerHTML = subwayArrays[a][l]; // too exciting!!!
      opt.value = subwayArrays[a][l]; // too exciting!!!
      sel.appendChild(opt);
    }
  }

  // ARRIVE LOOP:
  for (let a = 0; a < subwayArrays.length; a++) { // loops X num of lines
    let sel = document.getElementById(arriveLines[a]);

    for (let l = 0; l < subwayArrays[a].length; l++) { // loops X num of stations
        let opt = document.createElement('option');
        opt.innerHTML = subwayArrays[a][l]; // too exciting!!!
        opt.value = subwayArrays[a][l]; // too exciting!!!
        sel.appendChild(opt);
      }
    }

    // SET DEPARTURE FUNCTION:
    const setDeparture = function (dropdown) {
      let departStatus = document.getElementById(dropdown).value;
      document.getElementById("depart").innerHTML = "Depart from: " + departStatus;

      if (dropdown === 'departNLine') {
         userDepartLine = "N";
      } else if (dropdown === 'departLLine') {
         userDepartLine = "L";
      } else if (dropdown === 'depart6Line') {
         userDepartLine = "6";
      }

      userDepartStation = document.getElementById(dropdown).value;
    };

    // SET ARRIVAL FUNCTION:
    const setArrival = function (dropdown) {

      let arriveStatus = document.getElementById(dropdown).value;
      document.getElementById("arrive").innerHTML = "Arrive at: " + arriveStatus;

      if (dropdown === 'arriveNLine') {
         userArriveLine = "N";
      } else if (dropdown === 'arriveLLine') {
         userArriveLine = "L";
      } else if (dropdown === 'arrive6Line') {
         userArriveLine = "6";
      }

      userArriveStation = document.getElementById(dropdown).value;
    };

    const getUserTrip = function () {
      tripPlanner(userDepartLine, userDepartStation, userArriveLine, userArriveStation);
    };

// trip planner function begins
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
    document.getElementById("message1").innerHTML =`You must travel through the following stops ${ stationStops } on the ${ departL } line. `;
    document.getElementById("message2").innerHTML = `${ numStops } stops in total`;
  } else { // multiline trip
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
      document.getElementById("message1").innerHTML = `You must travel through the following stops on the ${ departL } line: ${ departLStops }.`;
      document.getElementById("message2").innerHTML = `Then change at Union Square to the ${ arriveL } line.`;

      if (arriveStIndex === arriveUSqIndex + 1 || arriveStIndex === arriveUSqIndex - 1) {
        document.getElementById("message3").innerHTML = `Your journey will continue 1 stop to ${ arriveS }.`;
      } else {
        document.getElementById("message4").innerHTML = `Your journey continues through the following stops: ${ arriveLStops }`;
      }
      document.getElementById("message5").innerHTML = `${ changeNumStops } stops in total.`;
  };
};
// tripPlanner('N', '28th', 'L', '28th');
