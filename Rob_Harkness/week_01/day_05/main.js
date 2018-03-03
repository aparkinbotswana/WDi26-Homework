const mta = {
  N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  L: ['8th', '6th', 'Union Square', '3rd', '1st'],
  '6': ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],

  planTrip: function(startLine, startStation, endLine, endStation) {
    startLine = startLine.toUpperCase();
    endLine = endLine.toUpperCase();
    startStation = this.setStationToTitleCase(startStation);
    endStation = this.setStationToTitleCase(endStation);

    let tripOne;
    let tripTwo = '';

    if (startLine === endLine) {
      tripOne = this.getSingleLineTrip(startLine, startStation, endStation);
    } else {
      tripOne = this.getSingleLineTrip(startLine, startStation, 'Union Square');

      tripTwo = this.getSingleLineTrip(endLine, 'Union Square', endStation);
    }

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
        const tripOneText = `Your journey will include the following stops on the ${
          this.lines[0]
        } : ${this.prettyPrintStops(this.tripOne)}.`;

        const tripTwoText = `Change at Union Square. Your journey continues with the following stops on line ${
          this.lines[1]
        }: ${this.prettyPrintStops(this.tripTwo)}.`;

        return `${tripOneText}${this.tripTwo && tripTwoText} Total stops: ${
          this.numberOfStops
        }`;
      }
    };
  },

  getSingleLineTrip: function(line, startStation, endStation) {
    let startStationIndex = this[line].indexOf(startStation);
    let endStationIndex = this[line].indexOf(endStation);
    const stations = [];

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

