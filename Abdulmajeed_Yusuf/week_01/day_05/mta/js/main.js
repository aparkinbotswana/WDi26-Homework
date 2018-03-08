const trainLines = {

  N: ["Times Square","34th", "28thN", "23thN", "Union Square", "8th" ],
  L: ["8th", "6th", "Union Square", "3rd", "1st"],
  6: ["Grand Central", "33rd", "28th6", "23rd6", "Union Square", "Astor Place"]

};

const singleLine = function (startLine, startStation, endStation ) {


    let line = trainLines[startLine];

    let startIndex = line.indexOf( startStation );
    let endIndex = line.indexOf( endStation );

    let stops = line.slice( startIndex, endIndex );
    let reverse = line.reverse(endIndex, startIndex);


       if ( startIndex < endIndex ) {
         console.log(`You must travel through the following stops on the ${startLine} line: ${stops.join(',') }.`);
         console.log(`${startIndex - endIndex} stops in total`);
       } else {
         console.log(`You must travel through the following stops on the ${startLine} line: ${reverse.join(',')  }.`);
         console.log(`${startIndex - endIndex} stops in total`)
       };
};

singleLine('N', 'Union Square', 'Times Square');
