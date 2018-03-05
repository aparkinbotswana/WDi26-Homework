console.log("Goodbye Weekend");

/*Activity
Create a program that models a simple subway system.

The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.*/

// console.log() shows output similar to this:
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."
/*There are 3 subway lines:
The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
Hints:
Work out how you would do it on paper first! Then start to explain that process in Javascript.
Get the program to work for a single line before trying to tackle multiple lines.
Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
The key to the lab is finding the index positions of each stop. (hint: indexOf())
Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)*/

const lineN = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
const lineL = ["8th", "6th", "Union Square", "3rd", "1st"];
const line6 = ["Grand Central", "33rd", "28th" , "23rd", "Union Square", "Astor Place"];

//single line trip (lineN)

const planTrip = function(startLine,startStop,endLine,endStop){
  let startInd = lineN.indexOf(startStop);
  let endInd = lineN.indexOf(endStop);
  let numberOfStops = Math.abs(startInd - endInd); // to get the absolute number of stops. i.e if travelling backwards on line.


  let tripArray = [];
  for (let i = startInd + 1; i <= endInd; i++) {
    tripArray.push(lineN[i]);
  }

  console.log(`You must travel through the following stops ${ tripArray }.`);  // not working correctly
  console.log(`${numberOfStops} stops in total.`);
  console.log(startInd, endInd, numberOfStops);
};

planTrip ('Union Square','Times Square');
planTrip("N", "Times Square", "N", "34th");
planTrip("N", "23rdN", "N", "28thN");
planTrip("N", "28thN", "N", "34th");
planTrip("N", "23rdN", "N", "34th");
planTrip("N", "28thN", "N", "Union Square");
planTrip("N", "28thN", "N", "28thN");

//multiple lines

//if startLine === endLine

let startInd = lineN.indexOf(startStop);
let endInd = lineN.indexOf(endStop);
let numberOfStops = Math.abs(startInd - endInd);

let startIndL = lineL.indexOf(startStop);
let endIndL = lineL.indexOf(endStop);
let numberOfStopsL = Math.abs(startInd - endInd);

let startInd6 = line6.indexOf(startStop);
let endInd6 = line6.indexOf(endStop);
let numberOfStops6 = Math.abs(startInd - endInd);

//else if
//slice index??

/*let tripArray = [];
  for (let i = startInd + 1; i <= endInd; i++) {
    tripArray.push(lineN[i]);
  }
  */

//how to make them stop at intersection..?
//need if statements for which line trip starts and ends on i.e if they match or need to switch.
//if same line then use previous code
//if different line change at union sq
//union sq positions.. lineN[4], lineL[2], line6[4]
