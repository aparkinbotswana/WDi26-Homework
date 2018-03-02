const mta = {
  N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  L: ['8th', '6th', 'Union Square', '3rd', '1st'],
  '6': ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],

  planTrip: function(startLine, startStation, endLine, endStation) {
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
      lines: [startLine, endLine],
      starEndStations: [startStation, endStation],

      prettyPrintStops: function(trip) {
        let stops = trip[0];
        for (let i = 1; i < trip.length; i++) {
          stops += `, ${trip[i]}`;
        }
        return stops;
      },

      showTripPlan: function() {
        const tripOneText = `You must travel through the following stops on the ${
          this.lines[0]
        } : ${this.prettyPrintStops(this.tripOne)}.`;

        const tripTwoText = `Change at Union Square. Your journey continues through the following stops on line ${
          this.lines[1]
        }: ${this.prettyPrintStops(this.tripTwo)}`;

        return `${tripOneText} ${this.tripTwo && tripTwoText}`;
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
  }
};

const planOne = mta.planTrip('N', '8th', 'N', 'Times Square');
const planTwo = mta.planTrip('N', 'Times Square', 'N', '8th');
const planThree = mta.planTrip('N', 'Times Square', 'L', '1st');
const planFour = mta.planTrip('6', 'Astor Place', 'L', '8th');

console.log(planOne.showTripPlan());
console.log(planTwo.showTripPlan());
console.log(planThree.showTripPlan());
console.log(planFour.showTripPlan());
