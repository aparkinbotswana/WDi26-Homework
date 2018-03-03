const trainLines = {
    "L": ["8th on the L", "6th", "Union Square on the L", "3rd", "1st"],
    "6": ["Grand Central", "33rd", "28th on the 6", "23rd on the 6", "Union Square on the 6", "Astor Place"],
    "N": ["Times Square", "34th", "28th on the N", "23rd on the N", "Union Square on the N", "8th on the N"]
};

const planTrip = function(line1, start, end) {
  let indexStart = trainLines[line1].indexOf(start);
  console.log(indexStart);
  let indexStop = trainLines[line1].indexOf(end);
  console.log(indexStop);
  let numStops = indexStart - indexStop;
  console.log(numStops);
  if (numStops < 0) {
    numStops = numStops * -1;
    console.log(numStops);
  }
  let stops; //seems to want me to define this outside of the if statement but I don't quite get why
  if (indexStart < indexStop) {
    stops = trainLines[line1].slice(indexStart + 1, indexStop + 1);
    console.log(stops);
  } else {
    stops = trainLines[line1].slice(indexStop, indexStart).reverse();
    console.log(stops);
  }
  console.log(`You must travel through the following stops on the ${line1} line: ${stops.join(', ')}.`);
  console.log(`${numStops} stops in total.`);
}

planTrip("6", "33rd", "Astor Place");
