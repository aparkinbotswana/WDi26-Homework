// Instructions

// Create a program that models a simple subway system.

// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
// console.log() shows output similar to this:
// 'You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square.'
// 'Change at Union Square.'
// 'Your journey continues through the following stops: 23rd, 28th, 33rd.'
// '7 stops in total.'

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
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.


// Global vars

const lineN =
    ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];

const lineL = 
    ['8th', '6th', 'Union Square', '3rd', '1st'];

const line6 =
    ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];

var lineLoc = function(station, line) {
    if (line === 'N') {
        return lineN.indexOf(station) + 1;
    }
    if (line === 'L') {
        return lineL.indexOf(station) + 1;
    }
    if (line === '6') {
        return line6.indexOf(station) + 1;
    }
};

const tripOutput = function(start_station, start_line, end_station, end_line) {

    let stationList = "";    

    console.log(`You have provided the following travel request:\nStart station - ${start_station}\nStart line - ${start_line.slice(-1)}\nEnd station - ${end_station}\nEnd line - ${end_line.slice(-1)}\n\n`);

    // If starting and finishing on the same line

    if (start_line === end_line) {
        const lId = start_line.slice(-1);
        let startPos = lineLoc(start_station,lId);
        let endPos = lineLoc(end_station,lId);
        let travelDist = endPos - startPos;

        // If they're moving forward along the line

        if (travelDist >= 0) {
            for (let i2 = startPos; i2 < endPos; i2++) {
                if (lId === 'N') {
                    stationList += lineN[i2] + ", ";
                }
                if (lId === 'L') {
                    stationList += lineL[i2] + ", ";
                }
                if (lId === '6') {
                    stationList += line6[i2] + ", ";
                }
            }
        }

        // If they're moving backwards along the line

        else {
            for (let i2 = startPos - 2; i2 >= endPos - 1; i2--) {
                if (lId === 'N') {
                    stationList += lineN[i2] + ", ";
                }
                if (lId === 'L') {
                    stationList += lineL[i2] + ", ";
                }
                if (lId === '6') {
                    stationList += line6[i2] + ", ";
                }
            }

        }
        console.log(`You must travel through the following stops on ${lId} line: \n${stationList.slice(0, -2)} \n`);
        console.log(`The total number of stops (excluding the first station) is: \n${Math.abs(travelDist)} \n`);  
    }

    // If on different lines
    else {
        var lId_start = start_line.slice(-1);
        var lId_end = end_line.slice(-1);

        var startPos = lineLoc(start_station,lId_start);
        var endPos = lineLoc(end_station,lId_end);

        var len_part1 = 0;
        var len_part2 = 0;

        var journeyString1 = "";
        var journeyString2 = "";

        let counter = 0;
        let counterneg = 0;

        // First leg of journey

        if (lId_start === 'N') {
            len_part1 = 5 - startPos - 1;
            if (len_part1 > 0) {
                while (counter <= len_part1) {
                    journeyString1 += lineN[counter + startPos] + ", ";
                    counter++;
                }
            }
            else {
                counterneg = startPos - 1;
                while (counterneg >= 5) {
                    journeyString1 += lineN[counterneg - 1] + ", ";
                    counterneg--;
                }
            }
        }

        if (lId_start === 'L') {
            len_part1 = 3 - startPos - 1;
            if (len_part1 > 0) {
                while (counter <= len_part1) {
                    journeyString1 += lineL[counter + startPos] + ", ";
                    counter++;
                }
            }
            else {
                counterneg = startPos - 1;
                while (counterneg >= 3 ) {
                    journeyString1 += lineL[counterneg - 1] + ", ";
                    counterneg--;
                }
            }
        }

        if (lId_start === '6') {
            len_part1 = 5 - startPos - 1;
            if (len_part1 > 0) {
                while (counter <= len_part1) {
                    journeyString1 += line6[counter + startPos] + ", ";
                    counter++;
                }
            }
            else {
                counterneg = startPos - 1;
                while (counterneg >= 5) {
                    journeyString1 += line6[counterneg - 1] + ", ";
                    counterneg--;
                }
            }
        }

        // Second leg of journey

        let counter2 = 0;
        let counterneg2 = 0;

        if (lId_end === 'N') {
            len_part2 = endPos - 5;
            if (len_part2 > 0) {
                while (counter2 < len_part2) {
                    journeyString2 += lineN[counter2 + 5] + ", ";
                    counter2++;
                }
            }
            else {
                counterneg2 = 4;
                while (counterneg2 >= endPos) {
                    journeyString2 += lineN[counterneg2 - 1] + ", ";
                    counterneg2--;
                }
            }
        }

        if (lId_end === 'L') {
            len_part2 = endPos - 3;
            if (len_part2 > 0) {
                while (counter2 < len_part2) {
                    journeyString2 += lineL[counter2 + 3] + ", ";
                    counter2++;
                }
            }
            else {
                counterneg2 = 2;
                while (counterneg2 >= endPos) {
                    journeyString2 += lineL[counterneg2 - 1] + ", ";
                    counterneg2--;
                }
            }
        }

        if (lId_end === '6') {
            len_part2 = endPos - 5;
            if (len_part2 > 0) {
                while (counter2 < len_part2) {
                    journeyString2 += line6[counter2 + 5] + ", ";
                    counter2++;
                }
            }
            else {
                counterneg2 = 4;
                while (counterneg2 >= endPos) {
                    journeyString2 += line6[counterneg2 - 1] + ", ";
                    counterneg2--;
                }
            }
        }

    console.log(`Travel to the following stations on ${lId_start} line:\n${journeyString1.slice(0,-2)}`);
    console.log(`Change at Union Square to ${lId_end} line.`);
    console.log(`Continue on to stations:\n${journeyString2.slice(0,-2)}`);

    var stops = journeyString1.match(/,/g).length + journeyString2.match(/,/g).length;
    console.log(`Your journey involves ${stops} stops (excluding the first station).`);
    }
};

// Input format for calling the function: first station, first line, last station, last line

tripOutput('Union Square','lineL','Union Square','lineL');