const trainLines = {
    "L": ["8th on the L", "6th", "Union Square on the L", "3rd", "1st"],
    "6": ["Grand Central", "33rd", "28th on the 6", "23rd on the 6", "Union Square on the 6", "Astor Place"],
    "N": ["Times Square", "34th", "28th on the N", "23rd on the N", "Union Square on the N", "8th on the N"]
};

const planTrip = function(line1, start, line2, end) {
  let indexStart = trainLines[line1].indexOf(start); //not sure if it's bad to be referring to trainLines as something defined outside of the function, wherease my other 3 parameters are referred to by their own function names rather than anything from outside the function...

  let indexSwitch; //switch point or end point if one line only
  if (line1 === line2) {
    indexSwitch = trainLines[line1].indexOf(end);
  } else {
    indexSwitch = trainLines[line1].indexOf(`Union Square on the ${line1}`)
  }

  let numStopsL1 = indexStart - indexSwitch;
  if (numStopsL1 < 0) {
    numStopsL1 = numStopsL1 * -1;
  }

  let stopsL1;
  if (indexStart < indexSwitch) { //if smaller, train must be going forwards so stops go in same order as list in the array
    stopsL1 = trainLines[line1].slice(indexStart + 1, indexSwitch + 1);
  } else { //if larger, train must be going backwards so we need to reverse the order of the stops
    stopsL1 = trainLines[line1].slice(indexSwitch, indexStart).reverse();
  }

  let tripDetails;
  if (line1 === line2) {
    tripDetails = `You must travel on the ${line1} line through the following stops: ${stopsL1.join(', ')}.\nGet off at ${start}.\n${numStopsL1} stops in total.`
    return tripDetails;
  }

  let indexSwitch2 = trainLines[line2].indexOf(`Union Square on the ${line2}`)

  let indexStop = trainLines[line2].indexOf(end);

  let numStopsL2 = indexSwitch2 - indexStop;
  if (numStopsL2 < 0) {
    numStopsL2 = numStopsL2 * -1;
    console.log(numStopsL2);
  }

  let stopsL2;
  if (indexSwitch2 < indexStop) {
    stopsL2 = trainLines[line2].slice(indexSwitch2 + 1, indexStop + 1);
  } else {
    stopsL2 = trainLines[line2].slice(indexStop, indexSwitch2).reverse();
  }

  tripDetails = `You must first travel on the ${line1} line through the following stops: ${stopsL1.join(', ')}.\nChange at Union Square.\nYour journey continues through the following stops: ${stopsL2.join(', ')}.\nGet off at ${end}.\n${numStopsL1 + numStopsL2} stops in total.`;
  return tripDetails;
}

const tripOutline = planTrip("L", "1st", "6", "Grand Central");
console.log(tripOutline);
