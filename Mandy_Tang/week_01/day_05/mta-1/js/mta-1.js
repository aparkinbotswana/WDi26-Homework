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
    console.log(`${result} stops in total between ${stopOn} and ${stopOff}.`);
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
    console.log(`${ans} stops in total between ${stopOn} and ${stopOff}.`);
    }
}

//numStops("Times Square", "23rd"); // Find the number of stops between beginning and ending stations.
//numStops("23rd", "Times Square"); //  run the function on the reversed array

// Now we want to print the stops that we travel through in order
// If beginning stop is "Times Square" or N[0], and "23rd" is N[3], we need to loop through and print the elements in between

// At this point, we realise that that the .reverse() permanently reverses your arrays - so N is now the reverse of the original N array, which is why we have to reassign N to what it was initially
N = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
let stopStr = ""; // Empty string so when we print all the stops, they aren't on separate lines
let stoppingAt = function (stopOn, stopOff) {
    for (let i = findIndex(stopOn); i <= findIndex(stopOff); i++) { // Prints all the stops between the beginning and ending stops by looping through their indices
      stopStr = stopStr + N[i] + ', ';  // Turning the array values (stop names) into one string and separating by comma
      //console.log(N[i]);
      }
    let reverseN = N.reverse(); //
    let reverseFindIndex = function (stationName) {
    let reverseIndex = reverseN.indexOf(stationName);
      return reverseIndex;
      }
    for (let i = reverseFindIndex(stopOn); i <= reverseFindIndex(stopOff); i++) {
       stopStr = stopStr + reverseN[i] + ', '; // Turning the array values (stop names) into one string and separating by comma
      }

    console.log(`You must travel through the following stops on the N line: ${stopStr}`); // Printing the string of stop names
}
//stoppingAt("Times Square", "23rd");
//stoppingAt("Union Square", "28th");    // Note you can't run both this and above function at the same time or the string returned will be wrong

// We now have the ability to find the number of stops, and name them in order on a single line, in both directions.



// On to tackling multiple lines...
// The only intersection of the lines is Union Square. So we reach Union Square in one line/array, we continue onto the next array. This means combining the arrays. Have done this manually below - but there's probably an easier way.
// Consider - need logic that tells us which combined line to use, depending on which array the starting and ending stops belong to i.e. if we start on line N and end in line L, then we would need to use array NandL.


let NandL = ["Times Square", "34th", "28th", "23rd", "Union Square", "3rd", "1st"];


      let findIndexNandL = function (stationName) {
        let index = NandL.indexOf(stationName); {
        return index;
        }
      }

      let numStopsNandL = function (stopOn, stopOff) {
      let res = (findIndexNandL(stopOff) - findIndexNandL(stopOn) + 1);
      if (res > 0) {
        console.log(`${res} stops in total between ${stopOn} and ${stopOff}.`);
        return res;
      }

      if (res < 0) { // If you are heading in the opposite direction of the array, the number of stops function will return a negative value, which is obviously wrong. This condition tests for negative numbers and will run an alternative function if we get a negative result
        let reverseNandL = NandL.reverse(); // Reversing the N array so we can see what the line looks like when we are travelling in both directions (and manipulate it)

        let reverseFindIndexNandL = function (stationName) { // Function that finds the index of the reversed line
          let reverseIndexNandL = reverseNandL.indexOf(stationName);
          return reverseIndexNandL;
          }
        let answer = (reverseFindIndexNandL(stopOff) - reverseFindIndexNandL(stopOn) + 1);
        console.log(`${answer} stops in total between ${stopOn} and ${stopOff}.`);
        }
}
//numStopsNandL("34th", "3rd");

NandL = ["Times Square", "34th", "28th", "23rd", "Union Square", "3rd", "1st"];
let stopStr1 = ""; // Empty string so when we print all the stops, they aren't on separate lines
let stoppingAtNandL = function (stopOn, stopOff) {
    for (let i = findIndexNandL(stopOn); i <= findIndexNandL(stopOff); i++) { // Prints all the stops between the beginning and ending stops by looping through their indices
      stopStr1 = stopStr1 + NandL[i] + ', ';  // Turning the array values (stop names) into one string and separating by comma

      }
    let reverseNandL = NandL.reverse(); //
    let reverseFindIndexNandL = function (stationName) {
    let reverseIndexNandL = reverseNandL.indexOf(stationName);
      return reverseIndexNandL;
      }
    for (let i = reverseFindIndexNandL(stopOn); i <= reverseFindIndexNandL(stopOff); i++) {
       stopStr1 = stopStr1 + reverseNandL[i] + ', '; // Turning the array values (stop names) into one string and separating by comma
      }

    console.log(`You must travel through the following stops: ${stopStr1}`); // Printing the string of stop names
}

let L = ["8th", "6th", "Union Square", "3rd", "1st"];

let findIndexL = function (stationName) {
  let indexL = L.indexOf(stationName); {
  return indexL;
  }
}

let numStopsL = function (stopOn, stopOff) {

  let resultL = (findIndexL(stopOff) - findIndexL(stopOn) + 1);
  if (resultL > 0) {
    console.log(`${resultL} stops in total between ${stopOn} and ${stopOff}.`);
    return resultL;
  }

  if (resultL < 0) {
    let reverseL = L.reverse();

    let reverseFindIndexL = function (stationName) {
      let reverseIndexL = reverseL.indexOf(stationName);
      return reverseIndexL;
      }
    let ansL = (reverseFindIndexL(stopOff) - reverseFindIndexL(stopOn) + 1);
    console.log(`${ansL} stops in total between ${stopOn} and ${stopOff}.`);
    }
}
L = ["8th", "6th", "Union Square", "3rd", "1st"];
let stopStrL = "";
let stoppingAtL = function (stopOn, stopOff) {
    for (let i = findIndexL(stopOn); i <= findIndexL(stopOff); i++) {
      stopStrL = stopStrL + L[i] + ', ';
      }
    let reverseL = L.reverse(); //
    let reverseFindIndexL = function (stationName) {
    let reverseIndexL = reverseL.indexOf(stationName);
      return reverseIndexL;
      }
    for (let i = reverseFindIndexL(stopOn); i <= reverseFindIndexL(stopOff); i++) {
       stopStrL = stopStrL + reverseL[i] + ', ';
          }

    console.log(`You must travel through the following stops on the L line: ${stopStrL}`);
}

let six = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"];

let findIndex6 = function (stationName) {
  let index6 = six.indexOf(stationName); {
  return index6;
  }
}

let numStops6 = function (stopOn, stopOff) {

  let result6 = (findIndex6(stopOff) - findIndex6(stopOn) + 1);
  if (result6 > 0) {
    console.log(`${result6} stops in total between ${stopOn} and ${stopOff}.`);
    return result6;
  }

  if (result6 < 0) {
    let reverse6 = six.reverse();

    let reverseFindIndex6 = function (stationName) {
      let reverseIndex6 = reverse6.indexOf(stationName);
      return reverseIndex6;
      }
    let ans6 = (reverseFindIndex6(stopOff) - reverseFindIndex6(stopOn) + 1);
    console.log(`${ans6} stops in total between ${stopOn} and ${stopOff}.`);
    }
}
six = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"];
let stopStr6 = "";
let stoppingAt6 = function (stopOn, stopOff) {
    for (let i = findIndex6(stopOn); i <= findIndex6(stopOff); i++) {
      stopStr6 = stopStr6 + six[i] + ', ';
      }
    let reverse6 = six.reverse(); //
    let reverseFindIndex6 = function (stationName) {
    let reverseIndex6 = reverse6.indexOf(stationName);
      return reverseIndex6;
      }
    for (let i = reverseFindIndex6(stopOn); i <= reverseFindIndex6(stopOff); i++) {
       stopStr6 = stopStr6 + reverse6[i] + ', ';
          }

    console.log(`You must travel through the following stops on the 6 line: ${stopStr6}`);
}
////////////
let Nand6 = ["Times Square", "34th", "28th", "23rd", "Union Square", "Astor Place"];


      let findIndexNand6 = function (stationName) {
        let index = Nand6.indexOf(stationName); {
        return index;
        }
      }

      let numStopsNand6 = function (stopOn, stopOff) {
      let resNand6 = (findIndexNand6(stopOff) - findIndexNand6(stopOn) + 1);
      if (resNand6 > 0) {
        console.log(`${resNand6} stops in total between ${stopOn} and ${stopOff}.`);
        return resNand6;
      }

      if (resNand6 < 0) { // If you are heading in the opposite direction of the array, the number of stops function will return a negative value, which is obviously wrong. This condition tests for negative numbers and will run an alternative function if we get a negative result
        let reverseNand6 = Nand6.reverse(); // Reversing the N array so we can see what the line looks like when we are travelling in both directions (and manipulate it)

        let reverseFindIndexNand6 = function (stationName) { // Function that finds the index of the reversed line
          let reverseIndexNand6 = reverseNand6.indexOf(stationName);
            //  console.log(reverseIndex);
          return reverseIndexNand6;
          }
          //  reverseFindIndex("Times Square");
        let answerNand6 = (reverseFindIndexNand6(stopOff) - reverseFindIndexNand6(stopOn) + 1);
        console.log(`${answerNand6} stops in total between ${stopOn} and ${stopOff}.`);
        }
}

Nand6 = ["Times Square", "34th", "28th", "23rd", "Union Square", "Astor Place"];
let stopStrN6 = ""; // Empty string so when we print all the stops, they aren't on separate lines
let stoppingAtNand6 = function (stopOn, stopOff) {
    for (let i = findIndexNand6(stopOn); i <= findIndexNand6(stopOff); i++) {
      stopStrN6 = stopStrN6 + Nand6[i] + ', ';
      }
    let reverseNand6 = Nand6.reverse();
    let reverseFindIndexNand6 = function (stationName) {
    let reverseIndexNand6 = reverseNand6.indexOf(stationName);
      return reverseIndexNand6;
      }
    for (let i = reverseFindIndexNand6(stopOn); i <= reverseFindIndexNand6(stopOff); i++) {
       stopStrN6 = stopStrN6 + reverseNand6[i] + ', ';
      }

    console.log(`You must travel through the following stops: ${stopStrN6}`);
  }
    ////////////

    let SL = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "3rd", "1st"];


          let findIndex6andL = function (stationName) {
            let index = SL.indexOf(stationName); {
            return index;
            }
          }

          let numStops6andL = function (stopOn, stopOff) {
          let res6andL = (findIndex6andL(stopOff) - findIndex6andL(stopOn) + 1);
          if (res6andL > 0) {
            console.log(`${res6andL} stops in total between ${stopOn} and ${stopOff}.`);
            return res6andL;
          }

          if (res6andL < 0) { // If you are heading in the opposite direction of the array, the number of stops function will return a negative value, which is obviously wrong. This condition tests for negative numbers and will run an alternative function if we get a negative result
            let reverse6andL = SL.reverse(); // Reversing the N array so we can see what the line looks like when we are travelling in both directions (and manipulate it)

            let reverseFindIndex6andL = function (stationName) { // Function that finds the index of the reversed line
              let reverseIndex6andL = reverse6andL.indexOf(stationName);
                //  console.log(reverseIndex);
              return reverseIndex6andL;
              }
              //  reverseFindIndex("Times Square");
            let answerNand6 = (reverseFindIndex6andL(stopOff) - reverseFindIndex6andL(stopOn) + 1);
            console.log(`${answer6andL} stops in total between ${stopOn} and ${stopOff}.`);
            }
    }

    SL = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "3rd", "1st"];
    let stopStrSL = "";
    let stoppingAt6andL = function (stopOn, stopOff) {
        for (let i = findIndex6andL(stopOn); i <= findIndex6andL(stopOff); i++) {
          stopStrSL = stopStrSL + SL[i] + ', ';
          }
        let reverse6andL = SL.reverse();
        let reverseFindIndex6andL = function (stationName) {
        let reverseIndex6andL = reverse6andL.indexOf(stationName);
          return reverseIndex6andL;
          }
        for (let i = reverseFindIndex6andL(stopOn); i <= reverseFindIndex6andL(stopOff); i++) {
           stopStrSL = stopStrSL + reverse6andL[i] + ', ';
          }

        console.log(`You must travel through the following stops: ${stopStrSL}`);
  }
  ////////////

  let Land6 = ["8th", "6th", "Union Square", "Astor Place"];


        let findIndexLand6 = function (stationName) {
          let index = Land6.indexOf(stationName); {
          return index;
          }
        }

        let numStopsLand6 = function (stopOn, stopOff) {
        let resLand6 = (findIndexLand6(stopOff) - findIndexLand6(stopOn) + 1);
        if (resLand6 > 0) {
          console.log(`${resLand6} stops in total between ${stopOn} and ${stopOff}.`);
          return resLand6;
        }

        if (resLand6 < 0) { // If you are heading in the opposite direction of the array, the number of stops function will return a negative value, which is obviously wrong. This condition tests for negative numbers and will run an alternative function if we get a negative result
          let reverseLand6 = Land6.reverse(); // Reversing the N array so we can see what the line looks like when we are travelling in both directions (and manipulate it)

          let reverseFindIndexLand6 = function (stationName) { // Function that finds the index of the reversed line
            let reverseIndexLand6 = reverseLand6.indexOf(stationName);
              //  console.log(reverseIndex);
            return reverseIndexLand6;
            }
            //  reverseFindIndex("Times Square");
          let answerLand6 = (reverseFindIndexLand6(stopOff) - reverseFindIndexLand6(stopOn) + 1);
          console.log(`${answerLand6} stops in total between ${stopOn} and ${stopOff}.`);
          }
  }

  Land6 = ["8th", "6th", "Union Square", "Astor Place"];
  let stopStrLand6 = "";
  let stoppingAtLand6 = function (stopOn, stopOff) {
      for (let i = findIndexLand6(stopOn); i <= findIndexLand6(stopOff); i++) {
        stopStrLand6 = stopStrLand6 + Land6[i] + ', ';
        }
      let reverseLand6 = SL.reverse();
      let reverseFindIndexLand6 = function (stationName) {
      let reverseIndexLand6 = reverseLand6.indexOf(stationName);
        return reverseIndexLand6;
        }
      for (let i = reverseFindIndexLand6(stopOn); i <= reverseFindIndexLand6(stopOff); i++) {
         stopStrSL = stopStrLand6 + reverseLand6[i] + ', ';
        }

      console.log(`You must travel through the following stops: ${stopStrLand6}`);
}  ////////









// We ultimately need logic that tells us which functions to trigger and directs us to the right array to use depending on the starting and ending line (if condition?)

let planTrip = function (startLine, startStation, endLine, endStation) {
    if ((startLine === N && endLine === L) || (startLine === L && endLine === N)) {
      numStopsNandL(startStation, endStation);
      stoppingAtNandL(startStation, endStation);
    };
    if (startLine === N && endLine === N) {
      numStops(startStation, endStation);
      stoppingAt(startStation, endStation)
    };
    if (startLine === L && endLine === L) {
      numStopsL(startStation, endStation);
      stoppingAtL(startStation, endStation);
    };
    if (startLine === 6 && endLine === 6) {
      numStops6(startStation, endStation);
      stoppingAt6(startStation, endStation);
    };
    if ((startLine === L && endLine === 6) || (startLine === 6 && endLine === L)) {
      numStopsLand6(startStation, endStation);
      stoppingAtLand6(startStation, endStation);
    };
    if ((startLine === N && endLine === 6) || (startLine === 6 && endLine === N)) {
      numStopsNand6(startStation, endStation);
      stoppingAtNand6(startStation, endStation);
    };
    if (startLine === N && endLine === 6) {
      numStopsNand6(startStation, endStation);
      stoppingAtNand6(startStation, endStation);
    };
  }


planTrip(L, "8th", 6, "Astor Place");


    // let NandL = N.concat(L.filter(function(item) {       // This chunk of code actually worked to combine my two arrays BUT there's stuff in both arrays we don't care about. To make our lives easier, just going to manually create the NandL array
    //  return N.indexOf(item) < 0;
    //}));
    //console.log(NandL)



// myTrip = [] splice  -- idea to try
