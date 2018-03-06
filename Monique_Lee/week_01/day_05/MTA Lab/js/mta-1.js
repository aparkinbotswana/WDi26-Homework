// MTA Lab
// Objectives:
// Apply your knowledge of Javascript to solve a real world problem.
// Get really good at array manipulation.
// Activity
// Create a program that models a simple subway system.
//
// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
//
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
//
// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
// Hints:
// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
// console.log() shows output similar to this:
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."

//Notes:
//Math.abs turns a number into positive
// ${numStops.join(',')}.\n ... .\n
//data validation
//if using key to look up object need to convert to string to access data

/* VERSION 1:
tried using an Object but had trouble extracting the data, ie:
const MTA = {
"N" = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
"6" = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
"L" = ['8th', '6th','Union Square','3rd','1st']
};

// need to use  MTA[startLine].indexOf() ie:
let tripStart = MTA[startLine].indexOf(firstStop);
let tripEnd = MTA[startLine].indexOf(lastStop);

*/

// VERSION 2:
const lineN = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
const line6 = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];
const lineL = ['8th', '6th','Union Square','3rd','1st'];

const planTrip = function(startLine, firstStop, endLine, lastStop){

  if(startLine ==='N' && endLine ==='N') {
      let tripStart = lineN.indexOf(firstStop);
      let tripEnd = lineN.indexOf(lastStop);
      let trip = [];
      if(tripStart<tripEnd){
      for (let i=(tripStart+1); i<(tripEnd+1); i++){
        trip.push(lineN[i]);
          }
          let numStops =  trip.length;
          console.log(`You must travel through the following stops on the ${startLine} Line: ${trip}. ${numStops + ""} stops in total.`);
        }
      }


  if(startLine ==='N' && endLine ==='6') {
      let tripStart = lineN.indexOf(firstStop);
      let transferA = lineN.indexOf('Union Square');
      let transferLine = line6;
      let transferB = transferLine.indexOf('Union Square');
      let tripEnd = line6.indexOf(lastStop);

      if(tripEnd > transferB) {
        let tripA = lineN.slice(tripStart+1, transferA+1);
        let tripB = transferLine.slice(transferB+1, tripEnd+1);
      } else {
          transferLine = line6.reverse();
          tripA = lineN.slice(tripStart+1, transferA+1);
          tripB = transferLine.slice(transferB-1, tripEnd-1); //this isn't working
      }

      let trip = tripA.concat(tripB);
      let numStops =  trip.length;
      console.log(`You must travel through the following stops on the ${startLine} Line: ${tripA}. Change at Union Square. Your journey continues through the following stops on the ${endLine} line: ${tripB}. ${numStops + ""} stops in total.`);

    }

      if(startLine ==='N' && endLine ==='L') {
      let tripStart = lineN.indexOf(firstStop);
      let transferA = lineN.indexOf('Union Square');
      let transferLine = lineL;
      let tripEnd = lineL.indexOf(lastStop);
      let transferB = transferLine.indexOf('Union Square');

      if(tripEnd > transferB) {
        let tripA = lineN.slice(tripStart+1, transferA+1);
        let tripB = transferLine.slice(transferB+1, tripEnd+1);
      } else {
          transferLine = lineL.reverse();
          tripA = lineN.slice(tripStart+1, transferA+1);
          tripB = transferLine.slice(transferB-1, tripEnd-1); //this isn't working

      }

        let trip = tripA.concat(tripB);
        let numStops =  trip.length;
        console.log(`You must travel through the following stops on the ${startLine} Line: ${tripA}. Change at Union Square. Your journey continues through the following stops on the ${endLine} line: ${tripB}. ${numStops + ""} in total.`);

      }

  }

// planTrip('N', '34th', '6', '33rd');
planTrip('N', '8th', 'N', 'Times Square');
planTrip('N', 'Times Square', 'N', '8th');
