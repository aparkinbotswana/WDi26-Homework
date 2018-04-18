//console.log("test js");
//arr.indexOf(searchElement[, fromIndex])

MTA = {
'N':['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
'6':['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
'L':['8th', '6th','Union Square','3rd','1st']
}

let message = "";
let trip = [];

const planTrip = function(startLine, firstStop, endLine, lastStop){

  if(startLine === endLine){
    let tripStart =  MTA[startLine].indexOf(firstStop);
    console.log(tripStart);
    let tripEnd = MTA[startLine].indexOf(lastStop);
    console.log(tripEnd);
    for(let i = (tripStart+1); i<(tripEnd+1); i++){
      trip.push(MTA[startLine][i]);
    }
    console.log(trip);
    let numStops = trip.length;
    if(tripStart < tripEnd){
    message += `You must travel through the following stops on the ${startLine} Line: ${trip.join(', ')}. ${numStops} stops in total, including the last stop.`;
    console.log(message);
    showTrip(message);

  // need to also take into account possibility of going backwards
  //  } else if(tripStart > tripEnd){
  //   message += `You must travel through the following stops on the ${startLine} Line: ${trip.reverse().join(', ')}. ${numStops} stops in total, including the last stop.`;
  //   console.log(message);
    }
    //return message;
  };

  if(startLine !== endLine){
    //console.log('different line');
    let tripStart = MTA[startLine].indexOf(firstStop);
    let transferA = MTA[startLine].indexOf('Union Square');
    let tripEnd = MTA[endLine].indexOf(lastStop);
    let transferB = MTA[endLine].indexOf('Union Square');

    if(tripEnd > transferB) {
    let tripA = MTA[startLine].slice(tripStart+1, transferA+1);
    let tripB = MTA[endLine].slice(transferB+1, tripEnd+1);
    let trip = tripA.concat(tripB);
    let numStops =  trip.length;
    message += `You must travel through the following stops on the ${startLine} Line: ${tripA.join(', ')}. Change at Union Square. Your journey continues through the following stops on the ${endLine} Line: ${tripB.join(', ')}. ${numStops} stops in total, including the last stop.`;
    console.log(message);
    showTrip(message);

    // need to also take into account possibility of going backwards
    // } else {
    // transferLine = MTA[endLine].reverse();
    // tripA = MTA[startLine].slice(tripStart+1, transferA+1);
    // tripB = transferLine.slice(transferB-1, tripEnd-1); //this isn't working
    // }
    }
    //return message;
  };
};


const showTrip = function(message){
  $('#showTrip').append('<h2>Itinerary</h2>' + '<br>' + '<p>' + message + '</p>');
}


$(document).ready(function(message){

  $('#searchTrip').on('click', function(event){
    event.preventDefault();
    $('#showTrip').empty();
    let startLine = $('#startLine').val();
    let firstStop = $('#firstStop').val();
    let endLine = $('#endLine').val();
    let lastStop = $('#lastStop').val();
    planTrip(startLine, firstStop, endLine, lastStop);
    });
});
