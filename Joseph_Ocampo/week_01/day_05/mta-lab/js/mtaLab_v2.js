

const N = ['Times Square','34th','28th','23rd','Union Square','8th']
const L = ['8th','6th','Union Square','3rd','1st']
const six  = ['Grand Central','33rd','28th','23rd','Union Square','Astor Place']


const planTrip = function (line1,start,line2,end) {

  let firstStop = line1.indexOf(start);
  let lastStop = line2.indexOf(end);
  let unionSwap = line1.indexOf('Union Square');
  let secondTripStart = line2.indexOf('Union Square');
  let firstTrip = [];  // store the iterated station stops in this array
  let secondTrip = []; // store the iterated station stops for trip 2
  let tripLength = '';

// Line Name Checker ///////////////////////////////////////////////////////////

// line 1 name checker

  if (line1[0] === 'Times Square') {
    lineOneName = 'N';
  }
  if (line1[0] === '8th') {
    lineOneName = 'L';
  }
  if (line1[0] === 'Grand Central') {
    lineOneName = '6';
  }

// line 2 name checker

  if (line2[0] === 'Times Square') {
    lineTwoName = 'N';
  }
  if (line2[0] === '8th') {
    lineTwoName = 'L';
  }
  if (line2[0] === 'Grand Central') {
    lineTwoName = '6';
  }

////////////////////////////////////////////////////////////////////////////////

const forwardBackwards = function (stop1,stop2) {
  if (stop1 > stop2) {
    for (var i = stop1; i >= stop2; i--) {
       firstTrip.push(line1[i]);
    }
    tripLength = firstTrip.length
  }
// if train is going forwards
  if (stop2 > stop1) {
    for (var i = stop1; i <= stop2; i++) {
       firstTrip.push(line1[i]);
    }
    tripLength = firstTrip.length;
  }
};

////////////////////////////////////////////////////////////////////////////////

  if (line1 !== line2) {                // if two trips are needed run this code
    forwardBackwards(firstStop,unionSwap);

    // if second trip is backwards

    if (lastStop > secondTripStart ) {
        for (var i = secondTripStart; i <= lastStop; i++) {
           secondTrip.push(line2[i]);
        }
      tripLength = firstTrip.length + secondTrip.length;
  };

    // if second trip is forwards

  if (lastStop < secondTripStart ) {
      for (var i = secondTripStart; i => lastStop; i--) {
         secondTrip.push(line2[i]);
      }
    tripLength = firstTrip.length + secondTrip.length;
  }

  console.log(`You must travel through the following stops on the ${lineOneName} line: ${firstTrip}.`);
  console.log(`Change at Union Square.`)
  console.log(`Your journey continues through the following stops on the ${lineTwoName} Line: ${secondTrip}.`);
  console.log(`${tripLength} stops in total.`)

} else {                                  // if one trip is needed run this code
  forwardBackwards(firstStop,lastStop);

  console.log(`You must travel through the following stops on the ${lineOneName}: ${firstTrip}.`);
  console.log(`${tripLength} stops in total.`)
  }
};



console.log(`=======================================       SAME LINE BACKWARDS`)
planTrip(N,'23rd',N,'Times Square');

console.log(`=======================================        same line forwards`)
planTrip(N,'Times Square',N,'23rd');

console.log(`=======================================  different line backwards`)
planTrip(N,'Times Square',L,'3rd');

console.log(`=======================================   different line forwards`)
planTrip(L,'8th',six,'Astor Place');
