$(document).ready(function() {
  $('#trip-results').removeClass('visible');

  populateStations('line1');
  populateStations('line2');

  $('body').on('change', '#line1', function() {
    let currentLine = $(`#line1`).find(":selected").val();
    $('#stationOn').empty();
    populateStations('line1');
  });

  $('body').on('change', '#line2', function() {
    let currentLine = $(`#line2`).find(":selected").val();
    $('#stationOff').empty();
    populateStations('line2');
  });

  $('#submit').on('click', getInfo);
});

const getInfo = function(event) {
  event.preventDefault(); // Don't leave the page
  const line1 = $('#line1').val();
  console.log(line1);
  const stationOn = $('#stationOn').val();
  console.log(stationOn);
  const line2 = $('#line2').val();
  console.log(line2);
  const stationOff = $('#stationOff').val();
  console.log(stationOff);
  mta.planTrip(line1, stationOn, line2, stationOff);
  renderTripDetails();
}

const renderTripDetails = function() {
  $('#trip-results').html(mta.tripDetails);
  $(`#trip-results`).removeClass('hidden').addClass('visible');
}

const populateStations = function(lineNum) {
  let currentLine = $(`#${lineNum}`).find(":selected").val();
  console.log(currentLine);

  let stationsList = mta.trainLines[currentLine]
  console.log(stationsList);
  for (let i = 0; i < stationsList.length; i++) {
    console.log(stationsList[i]);
    let $option = $('<option/>');
    $option.attr({'value': `${stationsList[i]}` }).text(`${stationsList[i]}`);
    if (lineNum === "line1") {
      $option.appendTo('#stationOn');
    } else {
      $option.appendTo('#stationOff');
    }
  }
}
