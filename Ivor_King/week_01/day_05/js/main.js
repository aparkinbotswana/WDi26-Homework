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