// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

//planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// console.log() shows output similar to this:
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."


const subWay = [
  {
    line: "N",
    stops: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
  },
  {
    line: "L",
    stops: ["8th", "6th", "Union Square", "3rd", "1st"]
  },
  {
    line: "6",
    stops: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  }
];



const getStopsOnSameLine = function(line, fromStation, toStation) {

  //Get the Line index from the array
  const lineIndex = subWay.findIndex(element => {
    return element.line === line;
  });

  //Get the starting station index from the stops array in the Line object (you are travelling on)
  const fromStaIndex = subWay[lineIndex].stops.indexOf(fromStation);

  //Get the destination station index
  const toStaIndex = subWay[lineIndex].stops.indexOf(toStation);

  //Checking the direction you are travelling to (from left to right in the array or the other way around)
  //If travelling from left to right in the stops array
  if (fromStaIndex < toStaIndex) {

    //Slice out the stops from the stops array (excluding the starting station) and store it in a new travelStations array
    const travelStations = subWay[lineIndex].stops.slice(fromStaIndex + 1, toStaIndex + 1);
    //Console log the travel info
    console.log(
      `You must travel through the following stops on the ${line} line: ${travelStations.join(", ")}. Total of ${travelStations.length} stops.`
    );

  } else {

    //If travelling from right to left in the stops array
    const travelStations = subWay[lineIndex].stops.slice(toStaIndex, fromStaIndex);

    //console log the travelStations array in the reverse order
    console.log(
      `You must travel through the following stops on the ${line} line: ${travelStations.reverse().join(", ")}. Total of ${travelStations.length} stops.`
    );

  }
};

const getStopsOnDiffLines = function(fromLine, fromStation, toLine, toStation) {

  //Get the index of the Line that you are starting out from
  const fromLineIndex = subWay.findIndex(element => {
    return element.line === fromLine;
  });

  //Get the index of the Line that you are travelling to
  const toLineIndex = subWay.findIndex(element => {
    return element.line === toLine;
  });


  //Get the index of the starting station
  const fromStaIndexOnFromLine = subWay[fromLineIndex].stops.indexOf(fromStation);

  //Get the index of the destination station
  const toStaIndexOnToLine = subWay[toLineIndex].stops.indexOf(toStation);

  //Get the index of the Union Square station on the line you are from
  const unionStaIndexFromLine = subWay[fromLineIndex].stops.indexOf("Union Square");

  //Get the index of the Union Square station on the line you are transferring to
  const unionStaIndexToLine = subWay[toLineIndex].stops.indexOf("Union Square");

  let travelStationsOnFrom = [];
  let travelStationsOnTo = [];

  if (fromStaIndexOnFromLine < unionStaIndexFromLine) {
    travelStationsOnFrom = subWay[fromLineIndex].stops.slice(fromStaIndexOnFromLine + 1, unionStaIndexFromLine + 1);
  } else {
    travelStationsOnFrom = subWay[fromLineIndex].stops.slice(unionStaIndexFromLine, fromStaIndexOnFromLine).reverse();
  }

  if (toStaIndexOnToLine < unionStaIndexToLine) {
    travelStationsOnTo = subWay[toLineIndex].stops.slice(toStaIndexOnToLine, unionStaIndexToLine).reverse();
  } else {
    travelStationsOnTo = subWay[toLineIndex].stops.slice(unionStaIndexToLine, toStaIndexOnToLine);
  }

  console.log(`You must travel through the following stops on the ${fromLine} line: ${travelStationsOnFrom.join(", ")}.`);
  console.log(`Change at Union Square.`);
  console.log(`Your journey continues through the following stops: ${travelStationsOnTo.join(", ")}.`);
  console.log(`${travelStationsOnFrom.length + travelStationsOnTo.length} stops in total.`);
};

const planTrip = function(fromLine, fromStation, toLine, toStation) {
  if (fromLine === toLine) {
    getStopsOnSameLine(fromLine, fromStation, toStation);
  } else {
    getStopsOnDiffLines(fromLine, fromStation, toLine, toStation);
  }
};

planTrip('N', 'Times Square', '6', '33rd');
