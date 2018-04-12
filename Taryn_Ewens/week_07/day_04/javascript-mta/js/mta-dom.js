
let startLine;
let endLine;
let startStation;
let endStation;

const renderLineStationsOne = function() {
  if (startLine === "N") {
    for (var i = 0; i < lines.N.length; i++) {
      let $option1 = $('<option>').text(`${lines.N[i]}`)
      $option1.appendTo('#startStation')
    }
  } else if (startLine === "L") {
    for (var i = 0; i < lines.L.length; i++) {
      let $option1 = $('<option>').text(`${lines.L[i]}`)
      $option1.appendTo('#startStation')
    }
  } else {
    for (var i = 0; i < lines.six.length; i++) {
      let $option1 = $('<option>').text(`${lines.six[i]}`)
      $option1.appendTo('#startStation')
    }
  }
};

const renderLineStationsTwo = function() {
  if (endLine === "N") {
    for (var i = 0; i < lines.N.length; i++) {
      let $option2 = $('<option>').text(`${lines.N[i]}`)
      $option2.appendTo('#endStation')
    }
  } else if (endLine === "L") {
    for (var i = 0; i < lines.L.length; i++) {
      let $option2 = $('<option>').text(`${lines.L[i]}`)
      $option2.appendTo('#endStation')
    }
  } else {
    for (var i = 0; i < lines.six.length; i++) {
      let $option2 = $('<option>').text(`${lines.six[i]}`)
      $option2.appendTo('#endStation')
    }
  }

};

const saveStations = function() {
  startStation = $( "#startStation" ).find(":selected").text();
  endStation = $( "#endStation" ).find(":selected").text();
  planTrip()
}

const planTrip = function() {
  if (startLine === endLine) {
    line = startLine;
    mta.singleTrip(line, startStation, endStation)
  } else {
    mta.doubleTrip(startLine, startStation, endLine, endStation);
  }
  let $pPlanning = $('<p>').text(`Hold tight! We're just planning your trip!`);
  $pPlanning.appendTo('#mta-results');
  setTimeout( showResults, 2000 );
}

const showResults = function() {
  $('#mta-results').empty();
  console.log("generating results");
  console.log(results1);

  let $p1 = $('<p>').text(`${results1}`);
  $p1.appendTo('#mta-results');

  if (results2 !== undefined) {
    let $p2 = $('<p>').text(`${results2}`);
    $p2.appendTo('#mta-results');
  }
  if (results3 !== undefined) {
    let $p3 = $('<p>').text(`${results3}`);
    $p3.appendTo('#mta-results');
  }
  if (results4 !== undefined) {
    let $p4 = $('<p>').text(`${results4}`);
    $p4.appendTo('#mta-results');
  }
};



$(document).ready(function() {

  $('body').on('change', '#startLine', function() {
    startLine = $( "#startLine" ).find(":selected").val();
    $('#startStation').empty();
    renderLineStationsOne();
  });

  $('body').on('change', '#endLine', function() {
    endLine = $( "#endLine" ).find(":selected").val();
    $('#endStation').empty();
    renderLineStationsTwo();
  });

  $( "#submit" ).click(function() {
    let results1 = undefined;
    let results2 = undefined;
    let results3 = undefined;
    let results4 = undefined;
    let numStops = 0;
    let stops = undefined;
    let doubleTripBool = false;
    let secondTrip = false;
    let startPosition = undefined;
    let endPosition = undefined;
    let startLine = undefined;
    let endLine = undefined;
    let startStation = undefined;
    let endStation = undefined;
    $('#mta-results').empty();
    saveStations();
    console.log( "planning trip" );
    // ;debugger

  });


});
