const mta = {
  // declare an array for each MTA line in the MTA object with the key of each array matching the line name/number
  N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  L: ['8th', '6th', 'Union Square', '3rd', '1st'],
  '6': ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],

  // method to be called to find journey info
  planTrip: function(startLine, startStation, endLine, endStation) {
    // sets arguments to correct case
    startLine = startLine.toUpperCase();
    endLine = endLine.toUpperCase();
    startStation = this.setStationToTitleCase(startStation);
    endStation = this.setStationToTitleCase(endStation);

    // declare variables to store trip details in
    let tripOne;
    let tripTwo = '';

    // if lines will not change during trip then call the method to get a trip ona  single line once
    if (startLine === endLine) {
      tripOne = this.getSingleLineTrip(startLine, startStation, endStation);
    } else {
      // if lines will change call getSingleLineTrip twice, passing in appropriate line and station. for 1st trip end station will always be 'union square'. for second trip start station will always be union square
      tripOne = this.getSingleLineTrip(startLine, startStation, 'Union Square');

      tripTwo = this.getSingleLineTrip(endLine, 'Union Square', endStation);
    }

    // when mta.planTrip is called, an object will be returned with the stations in an array for tripOne (and if a line change is needed) tripTwo, number of stops and lines traveled on. Also a method that can be called from the returned object that will return human readable text of the journey info. prettyPrint Stops is used to insert the stops from the trip arrays into this journey info text.
    return {
      tripOne: tripOne,
      tripTwo: tripTwo,
      numberOfStops:
        tripOne.length - 1 + (tripTwo.length > 0 ? tripTwo.length - 1 : 0),
      lines: [startLine, endLine],

      prettyPrintStops: function(trip) {
        let stops = trip[0];
        for (let i = 1; i < trip.length; i++) {
          stops += ` >> ${trip[i]}`;
        }
        return stops;
      },

      showTripPlan: function() {
        const tripOneText = `Your journey will include the following stops on line: ${
          this.lines[0]
        } : ${this.prettyPrintStops(this.tripOne)}.`;

        const tripTwoText = ` Change at Union Square to line: ${
          this.lines[1]
        }. Your journey continues with the following stops on line: ${
          this.lines[1]
        } : ${this.prettyPrintStops(this.tripTwo)}.`;

        return `${tripOneText}${this.tripTwo && tripTwoText} Total stops: ${
          this.numberOfStops
        }`;
      }
    };
  },
  // method to return stops on one line of the trip
  getSingleLineTrip: function(line, startStation, endStation) {
    // get array index of sart and end stations
    let startStationIndex = this[line].indexOf(startStation);
    let endStationIndex = this[line].indexOf(endStation);
    const stations = [];

    // check which direction on the line the trip will be, loop through array in appropriate direction and push the stations into the stations array that will be returned to where this function was called fom in showTripPlan
    if (startStationIndex > endStationIndex) {
      for (let i = startStationIndex; i >= endStationIndex; i--) {
        stations.push(this[line][i]);
      }
    } else {
      for (let i = startStationIndex; i <= endStationIndex; i++) {
        stations.push(this[line][i]);
      }
    }
    return stations;
  },
  // sets title case if station name doesnt start with a number
  setStationToTitleCase(station) {
    if (/\d/g.test(station)) {
      return station.toLowerCase();
    } else {
      return station.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    }
  }
};

const planOne = mta.planTrip('n', '8Th', 'N', 'times square');
const planTwo = mta.planTrip('N', 'TIMES SQUARE', 'n', '8th');
const planThree = mta.planTrip('n', 'Times SQUARE', 'L', '1ST');
const planFour = mta.planTrip('6', 'astor pLaCe', 'l', '8th');

console.log(planOne.showTripPlan());
console.log(planTwo.showTripPlan());
console.log(planThree.showTripPlan());
console.log(planFour.showTripPlan());

