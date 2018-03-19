// MTA assignment

//Global Object with Arrays of Stations on each Line
let lines = {
  nLine: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  lLine: ["8th", "6th", "Union Square", "3rd", "1st"],
  sixLine: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
};

//Global Variables
let index1;
let index2;
let stations1 = [];
let stations2 = [];
let noOfStops = 0;
let line1;
let line2;
let line1UnionIndex;
let line2UnionIndex;

// Start of planTrip function
const planTrip = function(startLine, startStation, endLine, endStation) {

//Find Start Line Index
  if (startLine === "N") { //if the start line is N
    index1 = lines.nLine.indexOf(startStation); //make variable index1 be the index number of the start station
    line1 = lines.nLine; //make variable line1 the array of N line stations in the lines object
    // console.log("Start Line = " + startLine + " Index1 = " + index1);
  } else if (startLine === "L") { //if the start line is L
    index1 = lines.lLine.indexOf(startStation);  //make variable index1 be the index number of the start station
    line1 = lines.lLine; //make variable line1 the array of L line stations in the lines object
    // console.log("Start Line = " + startLine + " Index1 = " + index1);
  } else if (startLine === "6") { //if the start line is 6
    index1 = lines.sixLine.indexOf(startStation);  //make variable index1 be the index number of the start station
    line1 = lines.sixLine; //make variable line1 the array of 6 line stations in the lines object
    // console.log("Start Line = " + startLine + " Index1 = " + index1);
  // } else {
  //   console.log("error - incorrect line name")
  }


  //Find End Line Index
  if (endLine === "N") { //if the start line is N
    index2 = lines.nLine.indexOf(endStation); //make variable index1 be the index number of the end station
    line2 = lines.nLine; //make variable line1 the array of N line stations in the lines object
    // console.log("End Line = " + endLine + " Index2 = " + index2);
  } else if (endLine === "L") { //if the start line is L
    index2 = lines.lLine.indexOf(endStation); //make variable index1 be the index number of the end station
    line2 = lines.lLine; //make variable line1 the array of L line stations in the lines object
    // console.log("End Line = " + startLine + " Index2 = " + index2);
  } else if (endLine === "6") { //if the start line is 6
    index2 = lines.sixLine.indexOf(endStation); //make variable index1 be the index number of the end station
    line2 = lines.sixLine; //make variable line1 the array of L line stations in the lines object
    // console.log("End Line = " + startLine + " Index2 = " + index2);
  // } else {
  //   console.log("error - incorrect line name")
  }

  //If start or end Line equals "" then store the index # of Union Square in the line #UnionIndex
  if (startLine === "N") {
    line1UnionIndex = 4;
  } else if (startLine === "L") {
    line1UnionIndex = 2;
  } else if (startLine === "6") {
    line1UnionIndex = 4;
  }

  if (endLine === "N") {
    line2UnionIndex = 4;
  } else if (endLine === "L") {
    line2UnionIndex = 2;
  } else if (endLine === "6") {
    line2UnionIndex = 4;
  }



  // TRIP ON SINGLE LINE - could swap this loop for array.slice(index1, index2); and firstTrip.length; and array.reverse();
  if ((startLine === endLine) && (index1 < index2))  { //if start line is equal to end line AND index one is less than index 2
    for (let i = index1; i < index2 + 1; i++) { //create a loop where i is index 1, which loops forward through each index, until i hits index 2
      stations1 = (stations1 + line1[i]) + ", ";
      noOfStops = noOfStops + 1; // every time the loop runs, add 1 to variable noOfStops
    }
    console.log(`You must travel through the following stops on the ${ startLine } line: ${ stations1 }`);
    console.log(`${ noOfStops } stops in total.`);
  }

  if ((startLine === endLine) && (index1 > index2))  { //if start line is equal to end line AND index one is more than than index 2
    for (let i = index1; i > index2 - 1; i--) { //create a loop where i is index 1, which loops backwards through each index, until i hits index 2
      stations1 = stations1 + line1[i] + ", ";
      noOfStops = noOfStops + 1; // every time the loop runs, add 1 to variable noOfStops
    }
    console.log(`You must travel through the following stops on the ${ startLine } line: ${ stations1 }`);
    console.log(`${ noOfStops } stops in total.`);
  }




  // IF TRIP IS ON TWO LINES, START TRIP HERE AND CHANGE AT UNION SQUARE
  if ((startLine !== endLine) && (index1 < line1UnionIndex)) { //if the start line is not equal to the end line AND index1 is less than the index of Union square
    for (let i = index1; i < line1UnionIndex + 1; i++) { //create a loop where i is index 1, which loops forward through each index, until i hits index 2
      stations1 = stations1 + line1[i] + ", ";
      noOfStops = noOfStops + 1; // every time the loop runs, add 1 to variable noOfStops
    }
    console.log(`You must travel through the following stops on the ${ startLine } line: ${ stations1 }`);
    console.log(`Change at Union Square`);
  }

  if ((startLine !== endLine) && (index1 > line1UnionIndex)) { //if the start line is not equal to the end line AND index1 is less than the index of Union square
    for (let i = index1; i > line1UnionIndex - 1; i--) { //create a loop where i is index 1, which loops backwards through each index, until i hits index 2
      stations1 = stations1 + line1[i] + ", ";
      noOfStops = noOfStops + 1; // every time the loop runs, add 1 to variable noOfStops
    }
    console.log(`You must travel through the following stops on the ${ startLine } line: ${ stations1 }`);
    console.log(`Change at Union Square`);
  }


  // IF THE TRIP IS ON TWO LINES, FINISH TRIP HERE, STARTING AT UNION SQUARE AND ENDING AT ENDSTATION
  if ((startLine !== endLine) && (index2 > line2UnionIndex)) { //if the start line is not equal to the end line AND index2 is greater than the index of Union square
    for (let i = line2UnionIndex; i < index2 + 1; i++) { //create a loop where i is line2UnionIndex, which loops forward through each index, until i hits index 2
      stations2 = stations2 + line2[i] + ", "; // stations 2 is a new string that adds each stop to it
      noOfStops = noOfStops + 1; // every time the loop runs, add 1 to variable noOfStops
    }
    console.log(`You must travel through the following stops on the ${ endLine } line: ${ stations2 }`);
    console.log(`${ noOfStops - 1 } stops in total.`);
  }

  if ((startLine !== endLine) && (index2 < line2UnionIndex)) { //if the start line is not equal to the end line AND index2 is less than the index of Union square
    for (let i = line2UnionIndex; i > index2 - 1; i--) { //create a loop where i is line2UnionIndex, which loops backwards through each index, until i hits index 2
      stations2 = stations2 + line2[i] + ", "; // stations 2 is a new string that adds each stop to it
      noOfStops = noOfStops + 1; // every time the loop runs, add 1 to variable noOfStops
    }
    console.log(`You must travel through the following stops on the ${ endLine } line: ${ stations2 }`);
    console.log(`${ noOfStops - 1} stops in total.`);
  }
//
//
//

};

planTrip('6', 'Astor Place', 'N', 'Times Square');
console.log("--------");
planTrip('N', '8th', 'N', 'Times Square');
console.log("--------");
planTrip('6', 'Grand Central', 'N', 'Times Square');
console.log("--------");
