console.log("connected");

let results1;
let results2;
let results3;
let results4;
let numStops = 0;
let stops;
let doubleTripBool = false;
let secondTrip = false;
let startPosition;
let endPosition;

const lines = {
  "N": ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  "L": ["8th", "6th", "Union Square", "3rd", "1st"],
  "six": ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

const mta = {
  singleTrip: function(line, startStation, endStation ) {
    let currentLine = line
    let currentLineStations = lines[line];
    if (currentLine === "N") {
      startPosition = lines.N.indexOf(startStation);
      endPosition = lines.N.indexOf(endStation);
    } else if (currentLine === "L") {
      startPosition = lines.L.indexOf(startStation);
      endPosition = lines.L.indexOf(endStation);
    } else if (currentLine === "six") {
      startPosition = lines.six.indexOf(startStation);
      endPosition = lines.six.indexOf(endStation);
    }

    if (startPosition < endPosition) {
      let hop = currentLineStations.slice(startPosition, endPosition +1);
      if (hop.length === 2) {
        numStops += 1;
        console.log(numStops);
        stops = `${numStops} stop`
      } else if (hop.length > 2) {
        numStops += hop.length -1;
        console.log(numStops);
        stops = `${numStops} stops`
      };


      if (doubleTripBool === false) {
      results1 = `You must travel through the following stops on the ${ line } line: ${ hop.join(", ") }. ${stops} in total.`;
      numStops = 0;
    } else if (secondTrip === true) {
      results3 = `Your journey continues through the following stops on the ${ line } line: ${ hop.join(", ") }.`
    }  else {
      results1 = `You must travel through the following stops on the ${ line } line: ${ hop.join(", ") }.`
      }
    };


    if (startPosition > endPosition) {
      let hop = currentLineStations.slice(endPosition, startPosition +1);
      let reverseHop = hop.reverse();
      if (reverseHop.length === 2) {
        numStops += 1;
        stops = `${numStops} stop`
      } else if (reverseHop.length > 2) {
        numStops += reverseHop.length -1;
        stops = `${numStops} stops`
      };

      if (doubleTripBool === false) {
      results1 = `You must travel through the following stops on the ${ line } line: ${ hop.join(", ") }. ${stops} in total.`;
      numStops = 0;
      } else if (secondTrip === true) {
        results3 = `Your journey continues through the following stops on the ${ line } line: ${ hop.join(", ") }.`
      } else {
      results1 = `You must travel through the following stops on the ${ line } line: ${ hop.join(", ") }.`
      }
    };
  },

  doubleTrip: function(startLine, startStation, endLine, endStation) {
    doubleTripBool = true;
    mta.singleTrip(startLine, startStation, "Union Square");
    results2 = `Change at Union Square to the ${ endLine } line.`;
    secondTrip = true;
    mta.singleTrip(endLine, "Union Square", endStation);
    results4 = `${numStops} stops in total.`;
    doubleTripBool = false;
    secondTrip = false;
  }
};



// mta.singleTrip("six", "Grand Central", "Astor Place")
// mta.doubleTrip("N", "8th", "six", "Grand Central");
