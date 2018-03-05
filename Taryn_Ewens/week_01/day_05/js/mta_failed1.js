console.log("connected");

let nLine = {
  nLineNth: ["8th", "Union Square"], //North
  nLineSth: ["Times Square", "34th", "28th", "23rd", "Union Square"] //South
};

let lLine = {
  lLineNth: ["8th", "6th", "Union Square"], //North
  lLineSth: ["1st", "3rd"] //South
};

let sixLine = {
  sixLineNth: ["Grand Central", "33rd", "28th", "23rd", "Union Square"], //North
  sixLineSth: ["Astor Place", "Union Square"] //South
};




let startLine = "";
let startStation = "";
let endLine = "";
let endStation = "";
let tripStart = "";
let tripEnd = "";

const planTrip = function(startLine, startStation, endLine, endStation) {



// FIND STARTING PLACE INDEX #
if (startLine === "N") { // if startLine = N loop through nLine until a match is found. Log index result
  let index = nLine.nLineNth.indexOf(startStation);
    if (index > 0) {
      startIndex = nLine.nLineNth.indexOf(startStation);
      let startLine = nLine.nLineNth;
      console.log(startLine + " " + startIndex);
    } else if (index < 0) {
      startIndex = nLine.nLineSth.indexOf(startStation);
      let startLine = nLine.nLineSth;
      console.log(startLine + " " + startIndex);
    }
  }
  else if (startLine === "L") { // if startLine = L loop through lLine until a match is found. Log index result
    let index = lLine.lLineNth.indexOf(startStation);
      if (index > 0) {
        startIndex = lLine.lLineNth.indexOf(startStation);
        let startLine = lLine.lLineNth;
        console.log(startLine + " " + startIndex);
      } else if (index < 0) {
        startIndex = lLine.lLineSth.indexOf(startStation);
        let startLine = lLine.lLineNth;
        console.log(startLine + " " + startIndex);
      }
  }
  else if (startLine === "6") { // if startLine = 6 loop through sixLine until a match is found. Log index result
    let index = sixLine.sixLineNth.indexOf(startStation);
      if (index > 0) {
        startIndex = sixLine.sixLineNth.indexOf(startStation);
        let startLine = sixLine.sixLineNth;
        console.log(startLine + " " + startIndex);
      } else if (index < 0) {
        startIndex = sixLine.sixLineSth.indexOf(startStation);
        let startLine = sixLine.sixLineNth;
        console.log(startLine + " " + startIndex);
      }
  else {
   console.log("error - not a station in New York")
 }
};

// FIND ENDING PLACE INDEX #
if (endLine === "N") { // if endLine = N loop through nLine until a match is found. Log index result
  let index = nLine.nLineNth.indexOf(endStation);
    if (index > 0) {
      endIndex = nLine.nLineNth.indexOf(endStation);
      console.log(endIndex);
    } else if (index < 0) {
      endIndex = nLine.nLineSth.indexOf(endStation);
      console.log(endIndex);
    }
  }
  else if (endLine === "L") { // if endLine = L loop through lLine until a match is found. Log index result
    let index = lLine.lLineNth.indexOf(endStation);
      if (index > 0) {
        endIndex = lLine.lLineNth.indexOf(endStation);
        console.log(endIndex);
      } else if (index < 0) {
        endIndex = lLine.lLineSth.indexOf(endStation);
        console.log(endIndex);
      }
  }
  else if (endLine === "6") { // if endLine = 6 loop through sixLine until a match is found. Log index result
    let index = sixLine.sixLineNth.indexOf(endStation);
      if (index > 0) {
        endIndex = sixLine.sixLineNth.indexOf(endStation);
        console.log(endIndex);
      } else if (index < 0) {
        endIndex = sixLine.sixLineSth.indexOf(endStation);
        console.log(endIndex);
      }
};

for (var i = 0; i < startLine.length; i++) {
  startLine[i]
  console.log(start.Line + 1);
}




};
planTrip('6', 'Union Square', '6', '33rd');



// loop through array tripStart's array starting at tripStart's index until it hits tripEnd OR Union Square. Add + 1 to variable noOfStops with every stop. When it hits Union Square, if Union Square is tripEnd stop loop. Convert array name to lineName. (ie. N nth to N)
// Console log "You must travel through the following stops on the ${ lineName } line: ${ stops }". Console log "Change at Union Square."

// If Union Square is NOT tripEnd, go to tripEnd's array starting at UnionSquare's index (-1) and loop through backwards. Add + 1 to variable noOfStops with every stop. When it hits tripEnd stop loop. Convert array name to lineName. (ie. N nth to N)
// If continuing on same line Console log "You must travel through the following stops on the ${ lineName } line: ${ stops }". Else console log "Your journey continues through the following stops: ${ stops }."

// console log ""${ noOfStops } in total"
//







// console.log() shows output similar to this:
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."
