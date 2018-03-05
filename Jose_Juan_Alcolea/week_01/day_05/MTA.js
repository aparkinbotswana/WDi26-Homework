// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."

// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

const trainLines = {
  N: ["Times Square","34th", "28thN", "23thN", "Union Square", "8th" ],
  L: ["8th", "6th", "Union Square", "3rd", "1st"],
  6: ["Grand Central", "33rd", "28th6", "23rd6", "Union Square", "Astor Place"]
};

const singleTrip = function (startLine, startStation, endStation ) {

    // console.log(startLine, startStation, endLine, endStation);
    // let lineStart = trainLines[startLine];
    let line = trainLines[startLine];

    let startIndex = line.indexOf( startStation );
    let endIndex = line.indexOf( endStation );

    let stops = line.slice( startIndex, endIndex );
    let reverse = line.reverse(endIndex, startIndex);

    console.log(startIndex);
    console.log(endIndex);

       if ( startIndex < endIndex ) {
         console.log(`You must travel through the following stops on the ${ startLine } line: ${ stops.join(', ') }.`);
         console.log(`${startIndex - endIndex} stops in total`);
       } else {
         console.log(`You must travel through the following stops on the ${ startLine } line: ${ reverse.join(', ')  }.`);
         console.log(`${startIndex - endIndex} stops in total`)
       };
};

const multitrip = function (startLine, startStation, endLine, endStation) {

    let lineStars = trainLines[startLine];
    let indexFirstStart = lineStars.indexOf(startStation);
    let indexFirstStop = lineStars.indexOf("Union Square");
        if (indexFirstStart < indexFirstStop) {

        }






};






singleTrip('6', 'Union Square', '6', 'Astor Place');
