const mta = {
  trainLines: {
    "L": ["8th on the L", "6th", "Union Square on the L", "3rd", "1st"],
    "6": ["Grand Central", "33rd", "28th on the 6", "23rd on the 6", "Union Square on the 6", "Astor Place"],
    "N": ["Times Square", "34th", "28th on the N", "23rd on the N", "Union Square on the N", "8th on the N"]
  },

  tripDetails: "",

  planTrip: function(line1, stationOn, line2, stationOff) {
    const indexStart = this.trainLines[line1].indexOf(stationOn);
    let indexSwitch; //switch point or end point if one line only
    if (line1 === line2) {
      indexSwitch = this.trainLines[line1].indexOf(stationOff);
    } else {
      indexSwitch = this.trainLines[line1].indexOf(`Union Square on the ${line1}`);
    }

    const numStopsL1 = Math.abs(indexStart - indexSwitch);

    let stopsL1;
    if (indexStart < indexSwitch) { //if smaller, train must be going forwards so stops go in same order as list in the array
      stopsL1 = this.trainLines[line1].slice(indexStart + 1, indexSwitch + 1);
    } else { //if larger, train must be going backwards so we need to reverse the order of the stops
      stopsL1 = this.trainLines[line1].slice(indexSwitch, indexStart).reverse();
    }
    let tripDetails;
    if (line1 === line2) {
      this.tripDetails = `<ul><li>Get on at ${stationOn}.</li><li>You must travel on the ${line1} line, including the following stops: ${stopsL1.join(', ')}.</li><li>Get off at ${stationOff}.</li><li>${numStopsL1} stops in total.</li></ul>`;
      return this.tripDetails;
    }
    const indexSwitch2 = this.trainLines[line2].indexOf(`Union Square on the ${line2}`);
    const indexStop = this.trainLines[line2].indexOf(stationOff);
    const numStopsL2 = Math.abs(indexSwitch2 - indexStop);

    let stopsL2;
    if (indexSwitch2 < indexStop) {
      stopsL2 = this.trainLines[line2].slice(indexSwitch2 + 1, indexStop + 1);
    } else {
      stopsL2 = this.trainLines[line2].slice(indexStop, indexSwitch2).reverse();
    }
    this.tripDetails = `<ul><li>Get on at ${stationOn}.</li><li>You must first travel on the ${line1} line, including the following stops: ${stopsL1.join(', ')}.</li><li>Switch at Union Square to the ${line2} line.</li><li>The next leg of your journey will include the following stops: ${stopsL2.join(', ')}.</li><li>Get off at ${stationOff}.</li><li>${numStopsL1 + numStopsL2} stops in total.</li></ul>`;
    return this.tripDetails;
  }
}
