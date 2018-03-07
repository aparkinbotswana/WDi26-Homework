// MTA Lab

// Let's work with one line first.
// Assuming there is only one line: N
let lines = {
N: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th - N Line"],
L: ["8th", "6th", "Union Square", "3rd", "1st"],
NandL: ["Times Square", "34th", "28th", "23rd", "Union Square", "3rd", "1st"],
6: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
Land6: ["8th", "6th", "Union Square", "Astor Place"],
Nand6: ["Times Square", "34th", "28th", "23rd", "Union Square", "Astor Place"]
};
// rules
// if source and destination are on the same line,
// if source and destination are not on the same line, travel via intersection
// if different line, count to the intersection
// if same line, count to the end


//Lines in object
//let stopsL1;
//const planTrip = function(line1, start, line2, end);
//  const indexStart = trainLines[line1].indexOf(start);
// let indexSwitch // if you switch,
// if (line1 === line1) no switch
  //indexSwitch = trainLines[line1].endOf()
// let indexStart = trainLines[line1].indexOf(start);
//let tripDetails;
//if (line1 === line2)
//indexSwitch = trainLines[line1].indexOf(end);
//else {
  //indexSwitch = trainLines[line1].indexOf(unionsquare) using Math.abs you don't need an if statement for negative numbers
//}
//if indexstart < indexswitch (they're going forwards). if so, then slice array
//startline+1 and end slice at where they get off + 1 (to include the last stop)
//stopsL1 = trainLines[line1].slice(indexSwitch, indexStart)
//when calling tripDetails, stopsL1.join
let planTrip = function (startLine, startStation, endLine, endStation) {

  let findIndex = function (startLine, startStation) {
    let index = lines.N.indexOf(startStation); {
    console.log(index);
    return index;
}

// We know "Times Square" = N[0]
// We need to return the index based on the string input, which we can do using a function
}
findIndex(N, "TimesSquare")
//planTrip(lines.N, "Times Square", lines.N, "23rd");

    // Take text input and return the index. In this case, index of "Times Square" is 0


// Now that we can find the index of the beginning and ending stations, we can use it to find the number of stops
// The number of stops = index of stopOff minus index of stopOn + 1. Make a function to work this out:
//
// let numStops = function (stopOn, stopOff) { // Where stopOn the name of the station we are getting on at
//
//   let result = (findIndex(stopOff) - findIndex(stopOn) + 1);
//   if (result > 0) {
//     console.log(`${result} stops in total between ${stopOn} and ${stopOff}.`);
//     return result;
//   }
//
//   if (result < 0) { // If you are heading in the opposite direction of the array, the number of stops function will return a negative value, which is obviously wrong. This condition tests for negative numbers and will run an alternative function if we get a negative result
//     let reverseN = N.reverse(); // Reversing the N array so we can see what the line looks like when we are travelling in both directions (and manipulate it)
//
//     let reverseFindIndex = function (stationName) { // Function that finds the index of the reversed line
//       let reverseIndex = reverseN.indexOf(stationName);
//         //  console.log(reverseIndex);
//       return reverseIndex;
//       }
//       //  reverseFindIndex("Times Square");
//     let ans = (reverseFindIndex(stopOff) - reverseFindIndex(stopOn) + 1);
//     console.log(`${ans} stops in total between ${stopOn} and ${stopOff}.`);
//     }
// }
//
// numStops("Times Square", "23rd"); // Find the number of stops between beginning and ending stations.
// numStops("23rd", "Times Square"); //  run the function on the reversed array
//
// // Now we want to print the stops that we travel through in order
// // If beginning stop is "Times Square" or N[0], and "23rd" is N[3], we need to loop through and print the elements in between
//
// // At this point, we realise that that the .reverse() permanently reverses your arrays - so N is now the reverse of the original N array, which is why we have to reassign N to what it was initially
// N = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
// let stopStr = ""; // Empty string so when we print all the stops, they aren't on separate lines
// let stoppingAt = function (stopOn, stopOff) {
//     for (let i = findIndex(stopOn); i <= findIndex(stopOff); i++) { // Prints all the stops between the beginning and ending stops by looping through their indices
//       stopStr = stopStr + N[i] + ', ';  // Turning the array values (stop names) into one string and separating by comma
//       //console.log(N[i]);
//
//
//       }
//     let reverseN = N.reverse(); //
//     let reverseFindIndex = function (stationName) {
//     let reverseIndex = reverseN.indexOf(stationName);
//       return reverseIndex;
//       }
//     for (let i = reverseFindIndex(stopOn); i <= reverseFindIndex(stopOff); i++) {
//        stopStr = stopStr + reverseN[i] + ', '; // Turning the array values (stop names) into one string and separating by comma
//       }
//
//     console.log(`You must travel through the following stops on the N line: ${stopStr}`); // Printing the string of stop names
// }
// //stoppingAt("Times Square", "23rd");
// stoppingAt("Union Square", "28th");    // Note you can't run both this and above function at the same time or the string returned will be wrong
//
// // We now have the ability to find the number of stops, and name them in order on a single line, in both directions.
//
//
//
// // On to tackling multiple lines...
// // The only intersection of the lines is Union Square. So we reach Union Square in one line/array, we continue onto the next array. This means combining the arrays. Picture 3 lines crossing over each other at one point.
// // Consider - we probably need logic that tells us which combined line to use, depending on which array the starting and ending stops belong to i.e. if we start on line N and end in line L, then we would need to use array NandL.
//
//
//
// N = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th - N Line"];  // Fixing variable again since we used reverse() above
// let L = ["8th", "6th", "Union Square", "3rd", "1st"];
// let NandL = ["Times Square", "34th", "28th", "23rd", "Union Square", "3rd", "1st"];
//
// // let NandRevL = [ ]; // Not using this yet -- If we travel along N the right way, but start going 'backwards' when we hit the L line
//
// // let NandL = N.concat(L.filter(function(item) {       // This chunk of code actually worked to combine my two arrays BUT there's stuff in both arrays we don't care about. To make our lives easier, just going to manually create the NandL array
// //  return N.indexOf(item) < 0;
// //}));
// //console.log(NandL)
//
// // If the starting location is on the n line && finishing location is on the ... then use NandL
//
// // let  = function (stopOn, stopOff) {
// //    for (let i = findIndex(stopOn); i <= findIndex(stopOff); i++) { // Prints all the stops between the beginning and ending stops by looping through their indices
// //      console.log(N[i]);
// //      }
//
//
//
//
//
// //10pm = 4.5h
// //6-7pm = 1h
//
// // myTrip = [] splice  -- idea to try
