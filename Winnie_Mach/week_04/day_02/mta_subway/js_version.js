const paths = [
  {
    line: 'N',
    stations: ['Time Square', '34th Street', '28th Street', '23rd Street', 'Union Square', '8th Street']

  }, //Ts, 34, 28, 23, us, 8

  },

  {
    line: 'L',
    stations: ['8th Street', '6th Street', 'Union Square', '3rd Street', '1st Street']
  },
  {
    line: '6',
    stations: ['Grand Central', '33rd Street', '28th Street', '23rd Street', 'Union Square', 'Astor Place']
  }
];

// ^ Found the best way to do arrays to better call them in a function or loop

// Our variables are:

let startStationIndex = 0; let endStationIndex = 0;
let startIndex = 0; var endIndex = 0;
let unionIndex = 0;
let secUnionIndex = 0;
let leg1 = []; let leg2 = [];
let totalLength = 0;

let startStation = '28th Street';
let startStationIndex = 0;
let endStationIndex = 0;
let startIndex = 0;
let endIndex = 0;
let unionIndex = 0;
let secUnionIndex = 0;
let leg1 = [];
let leg2 = [];
let totalLength = 0;


// Overall function
let trip = function(startLine, startStation, endLine, endStation) { // takes in 4 arguments findStart(startLine, startStation); //function to find your startLine and startStation Indices, returns
findStart(startLine, startStation); //function to find your startLine and startStation Indices, returns values to be used for finding stops and filling leg1 array
findEnd(endLine, endStation); //function to find your endLine and endStation Indices, returns values to be used for finding stops and filling leg2 array, returns array to be used for totalLength
findLeg1(); //function to push stops into leg1 array based on position
findLeg2(); //function to push stops into leg2 array based on position, returns array to be used for totalLength
addLength(); // adding the length of findLeg1 and leg2
  if (startIndex === endIndex) { //if the starting line is equal to the end line, then print out

  console.log(`You will be traveling through ${startLine} Line, starting at ${startStation} and get off at ${endStation}. Your total number of stops is ${totalLength}.`);
  }
  else {
    console.log(`You will be traveling through ${startLine} Line, and must travel through the following stops: ${leg1}.Change at Union Square on ${endLine}.You must continue through the following stops: ${leg2}. Your total number of stops is ${totalLength}.`);
  console.log(`You will be travelling through ${startLine} Line, starting at ${startStation} and get off at ${endStation}. Your total number of stops is ${totalLength}.`);
  }
  else {
    console.log(`You will be travelling through ${startLine} Line, and must travel through the following stops: ${leg1}. Change at Union Square on ${endLine} line. You must continue through the following stops: ${leg2}. Your total number of stops is ${totalLength}.`);
  }
};

//Finding the jsName for the startStation argument that was typed in.
let findStart = function(startLine, startStation){
  for (let i = 0; i < paths.length; i++){
    if (startLine === paths[i].line){ //if startLine jsName is equal to the line that was entered in the argument
      for (let j = 0; j < paths[i].stations.length; j++){ //  j =
        if (startStation === paths[i].stations[j]){ //fining jsName for start station.

          startStationIndex = paths[i].station.indexOf(startStation);
          unionIndex = paths[i].station.indexOf('Union Square');
          startStationIndex = paths[i].stations.indexOf(startStation);
          unionIndex = paths[i].stations.indexOf('Union Square');
          startIndex = i; //(Leg 1 of trip) Will be using this as a new array to push stations into.
        }
      }
    }
  }
};

//Finding the jsName for the endLine argument that was typed in.
let findEnd = function(endLine, endStation) {
  for (let i = 0; i < paths.length; i++){
    if (endLine === paths[i].line){
      for (let j = 0; j < paths[i].stations.length; j++){
        if (endStation === paths[i].stations[j]){

          endStationIndex = paths[i].station.indexOf(endStation);
          SecUnionIndex= paths[i].station.indexOf('Union Square');
          endStationIndex = paths[i].stations.indexOf(endStation);
          secUnionIndex= paths[i].stations.indexOf('Union Square');
          endIndex = i; //(Leg 2 of trip) Will be using this as a new array to push stations into.
        }
      }
    }
  }
};

//Finding list of stations on leg 1 of trip (before it reaches Union Square)
let findLeg1 = function(){
  if (startStationIndex < unionIndex){

    for(let i = startStationIndex + 1; i < unionIndex; i++) { // if the station comes before union square, then loop it to find the list of stops that will stop at till it reaches union square.
       leg1.push(paths[startIndex].station[i]); //add each station into Leg 1 of trip (startIndex)
     }
  } else if(unionIndex < startStationIndex) { //if the station comes after union square, then loop it backwards to find the list of stops that it will stop at till it reaches union square.
    for(let j = startStationIndex - 1; j > unionIndex; j--) {
         leg1.push(paths[startIndex].station[j]);
       }
  } else { // i.e. if it happens to starts at Union Square or start/end on same line.
       for (let k = unionIndex + 1; k < secUnionIndex; k++){ //find the station names of all stations after union square till it reaches union sqaure again.
         leg1.push(paths[startIndex].station[k]);
       }

    for(let i = startStationIndex + 1; i <= unionIndex; i++) { // if the station comes before union square, then loop it to find the list of stops that will stop at till it reaches union square.
       leg1.push(paths[startIndex].stations[i]); //add each station into Leg 1 of trip (startIndex)
     }
  } else if(unionIndex < startStationIndex) { //if the station comes after union square, then loop it backwards to find the list of stops that it will stop at till it reaches union square.
    for(let j = startStationIndex - 1; j >= unionIndex; j--) {
         leg1.push(paths[startIndex].stations[j]);
       }
  } else { // i.e. if it happens to starts at Union Square or start/end on same line.
       for (let k = unionIndex + 1; k <= secUnionIndex; k++){ //find the station names of all stations after union square till it reaches union sqaure again.
         leg1.push(paths[startIndex].stations[k]);
       }
     }
   };


let findLeg2 = function() {
  if (endStationIndex < secUnionIndex){ //if end station is before union square.

    for (let i = secUnionIndex - 1; i > endStationIndex; i--){
    leg2.push(paths[endIndex].station[i]);
    }
  } else { //if end station is after union square.
    for (let j = secUnionIndex + 1; j < endStationIndex; j++){
leg2.push(paths[endIndex].station[j]);
    }
  };
    for (let i = secUnionIndex - 1; i >= endStationIndex; i--){
    leg2.push(paths[endIndex].stations[i]);
    }
  } else { //if end station is after union square.
    for (let j = secUnionIndex + 1; j <= endStationIndex; j++){
leg2.push(paths[endIndex].stations[j]);
    }
  }
};


// Add the total stations in leg 1 and leg 2 together.
let addLength = function() {

  totalLength = leg1 + leg2;
  //totalLength = add leg1 and leg2 arrays together
};

findStart('N', '28th Street');
findEnd('L', 'Astor Place');
trip('N', '28th Street', 'L', 'Astor Place');
  totalLength = leg1.length + leg2.length;
  //totalLength = add leg1 and leg2 arrays together
};

trip('N', 'Time Square', 'L', '8th Street');
trip('N', 'Time Square', 'N', '23rd Street');
