//1. planTrip1-This function will work for one line in array
//2. planTrip- This function will work for 3 lines

const planTrip1 = function(startLine, startStop, endLine,endStop) {
  let lineN = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
  let firstIndex;
  let secIndex;
  let journey ="";
  let noOfStops =0;

  firstIndex = lineN.indexOf(startStop);
  secIndex = lineN.indexOf(endStop);

  if (firstIndex > secIndex) {
    for (let i = firstIndex; i >= secIndex; i --) {
        journey += lineN[i]+" , ";
        noOfStops+=1;
    }
  }
  else {
    for (let i = firstIndex; i <= secIndex; i ++ ) {
        journey += lineN[i]+" , ";
        noOfStops+=1;
    }
  }
console.log(`There are ${noOfStops} Stops from  ${journey}`)
};
planTrip1('N','Times Square','N','8th');
planTrip1('N','34th','N','Union Square');
planTrip1('N','Union Square','N','34th');
planTrip1('N','Union Square','N','Times Square');



//---------------------------------Work for multiple lines -----

let path = {
    LineN: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    LineL: ['8th', '6th', 'Union Square', '3rd', '1st'],
    Line6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
}
let journey = "";
let noOfStops = 0;
let InstPoint = "Union Square";

///////////////////

const planTrip = function(startLine, startStop, endLine, endStop) {

    let firstIndex; // index of start point
    let secIndex; // index of stoping point
    let InstIndex; // index of intersection index


    journey = "";
    noOfStops = 0;


    // console.log(path[startLine].indexOf(startStop));// if its a key in variable use [] inseted of .

    firstIndex = path[startLine].indexOf(startStop);
    secIndex = path[endLine].indexOf(endStop);
    // if starting and stopping point is same as intersection point i.e union square.
    if (startStop === InstPoint && endStop === InstPoint) {
        journey = `You are already at ${InstPoint}. Change to Line: ${endLine}`;
        console.log(journey);
    } else {
        if (startLine === endLine) { // on same line
            journey = `You must travel through the following stops on line ${startLine} : `;
            trackLoc(firstIndex, secIndex, startLine);
        } else { // not on same line
            journey = `You must travel through the following stops on line ${startLine} : `;
            // first line  intersection point
            InstIndex = path[startLine].indexOf(InstPoint);
            trackLoc(firstIndex, InstIndex, startLine);
            ///// sec line intersection point
            InstIndex = path[endLine].indexOf(InstPoint);
            if (secIndex !== InstIndex) // if sec index is not equal to intersection, if is equal i'm alredy at the stop
            {
                journey += `\nChange at ${InstPoint} to Line: ${endLine}.\nYour journey continues through the following stops: `;

                /// this condition to take out the Intersection point - Union Square from sec line
                if (InstIndex < secIndex) {
                    trackLoc(InstIndex + 1, secIndex, endLine);
                } else {
                    trackLoc(InstIndex - 1, secIndex, endLine);
                }
            } else {
                journey += `\nYou are already at ${InstPoint}. Change to Line: ${endLine}`;
            }
        }
        //console.log(`There are ${noOfStops} Stops in Total. ${journey}`);
        console.log(`There are %c${noOfStops}%c Stops in Total. ${journey}`, 'font-weight: bold', 'font-weight: normal');

        //console.log('This next thing is in %cbold %cbut the rest is not', 'font-weight: bold', 'font-weight: normal');
    }

};

///////////New function
const trackLoc = function(firstIndex1, secIndex1, lineNo1) {
    if (firstIndex1 > secIndex1) {
        for (let i = firstIndex1; i >= secIndex1; i--) {
            journey += path[lineNo1][i] + ", ";
            noOfStops += 1;
        }
    } else {
        for (let i = firstIndex1; i <= secIndex1; i++) {
            //console.log(path[lineNo1][i]);
            journey += path[lineNo1][i] + ", ";
            noOfStops += 1;
        }
    }
    journey = journey.slice(0, -2);
};
// function call.
console.log("-----------------------------------------------------------------------\n");
planTrip('LineN', 'Times Square', 'LineN', '8th');
console.log("-----------------------------------------------------------------------\n");
planTrip('LineL', '1st', 'LineN', '34th');
console.log("-----------------------------------------------------------------------\n");
planTrip('LineN', 'Union Square', 'Line6', 'Astor Place');
console.log("-----------------------------------------------------------------------\n");
planTrip('LineN', '34th', 'LineL', 'Union Square');
console.log("-----------------------------------------------------------------------\n");
planTrip('LineN', 'Union Square', 'Line6', 'Union Square');
