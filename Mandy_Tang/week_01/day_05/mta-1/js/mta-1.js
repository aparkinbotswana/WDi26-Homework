// MTA Lab

// Let's work with one line first.
// Assuming there is only one line: N
let N = [ "Times Square", "34th", "28th", "23rd", "Union Square", "8th - N Line"];

// We know "Times Square" = N[0]
// We need to return the index based on the string input, which we can do using a function


let findIndex = function (stationName) {
  let index = N.indexOf(stationName); {
//  console.log(index);
  return index;
  }
}
//findIndex("Times Square");    // Take text input and return the index. In this case, index of "Times Square" is 0


// Now that we can find the index of the beginning and ending stations, we can use it to find the number of stops
// The number of stops = index of stopOff minus index of stopOn + 1. Make a function to work this out:

let numStops = function (stopOn, stopOff) { // Where stopOn the name of the station we are getting on at

  let result = (findIndex(stopOff) - findIndex(stopOn) + 1);
  if (result > 0) {
    console.log(`${result} stops in total.`);
    return result;
  }

  if (result < 0) { // If you are heading in the opposite direction of the array, the number of stops function will return a negative value, which is obviously wrong. This condition tests for negative numbers and will run an alternative function if we get a negative result
    let reverseN = N.reverse(); // Reversing the N array so we can see what the line looks like when we are travelling in both directions (and manipulate it)

    let reverseFindIndex = function (stationName) { // Function that finds the index of the reversed line
      let reverseIndex = reverseN.indexOf(stationName);
        //  console.log(reverseIndex);
      return reverseIndex;
      }
      //  reverseFindIndex("Times Square");
    let ans = (reverseFindIndex(stopOff) - reverseFindIndex(stopOn) + 1);
    console.log(`${ans} stops in total.`);
    }
}

numStops("Times Square", "23rd"); // Find the number of stops between beginning and ending stations.
numStops("23rd", "Times Square"); //  run the function on the reversed array

// Now we want to print the stops that we travel through in order
// If beginning stop is "Times Square" or N[0], and "23rd" is N[3], we need to loop through and print the elements in between

// At this point, we realise that that the .reverse() permanently reverses your arrays - so N is now the reverse of the original N array, which is why we have to reassign N to what it was initially
N = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];

let stoppingAt = function (stopOn, stopOff) {
    for (let i = findIndex(stopOn); i <= findIndex(stopOff); i++) { // Prints all the stops between the beginning and ending stops by looping through their indices
      console.log(N[i]);
      }
    let reverseN = N.reverse(); //
    let reverseFindIndex = function (stationName) {
    let reverseIndex = reverseN.indexOf(stationName);
      return reverseIndex;
      }
    for (let i = reverseFindIndex(stopOn); i <= reverseFindIndex(stopOff); i++) {
      console.log(reverseN[i]);
      }
}

stoppingAt("Times Square", "23rd");
//stoppingAt("23rd", "Times Square");

// We now have the ability to find the number of stops, and name them in order on a single line, in both directions.



// On to tackling multiple lines...
// The only intersection of the lines is Union Square. So we reach Union Square in one line/array, we continue onto the next array. This means combining the arrays. Picture 3 lines crossing over each other at one point.
// Consider - we probably need logic that tells us which combined line to use, depending on which array the starting and ending stops belong to i.e. if we start on line N and end in line L, then we would need to use array NandL.



N = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th - N Line"];  // Fixing variable again since we used reverse() above
let L = ["8th", "6th", "Union Square", "3rd", "1st"];
let NandL = ["Times Square", "34th", "28th", "23rd", "Union Square", "3rd", "1st"];

// let NandRevL = [ ]; // Not using this yet -- If we travel along N the right way, but start going 'backwards' when we hit the L line

// let NandL = N.concat(L.filter(function(item) {       // This chunk of code actually worked to combine my two arrays BUT there's stuff in both arrays we don't care about. To make our lives easier, just going to manually create the NandL array
//  return N.indexOf(item) < 0;
//}));
//console.log(NandL)

if the starting location is on the n line
// What about journeys that start at union square???
let  = function (stopOn, stopOff) {
    for (let i = findIndex(stopOn); i <= findIndex(stopOff); i++) { // Prints all the stops between the beginning and ending stops by looping through their indices
      console.log(N[i]);
      }





//10pm = 4.5h


// myTrip = [] splice  -- idea to try
