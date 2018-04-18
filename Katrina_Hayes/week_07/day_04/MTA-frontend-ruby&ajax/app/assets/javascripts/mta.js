
$(document).ready(function() {
  $('#trip-results').removeClass('visible');

  populate_stations('line1');
  populate_stations('line2');

  $('body').on('change', '#line1', function() {
    let currentLine = $(`#line1`).find(":selected").val();
    $('#stationOn').empty();
    populate_stations('line1');
  });

  $('body').on('change', '#line2', function() {
    let currentLine = $(`#line2`).find(":selected").val();
    $('#stationOff').empty();
    populate_stations('line2');
  });

  $('#submit').on('click', getInfo);
});

const populate_stations = function(line_num) {
  let current_line = $(`#${line_num}`).find(":selected").val();

  $.ajax('/stations', {
    method: 'post',
    dataType: 'json', // data type you want back
    data: {current_line: current_line} // what you're sending
  }).done(function(response) {
    console.log(`response back from populate_stations ajax request was: ${response}`);
    stations_list = response;
    for (let i = 0; i < stations_list.length; i++) {
      // console.log(stations_list[i]);
      let $option = $('<option/>');
      $option.attr({'value': `${stations_list[i]}` }).text(`${stations_list[i]}`);
      if (line_num === "line1") {
        $option.appendTo('#stationOn');
      } else {
        $option.appendTo('#stationOff');
      }
    }
  }).fail(function() {
    alert('something bad happened, sorry.');
  });
};

const getInfo = function(event) {
  event.preventDefault(); // Don't leave the page
  const line1 = $('#line1').val();
  const stationOn = $('#stationOn').val();
  const line2 = $('#line2').val();
  const stationOff = $('#stationOff').val();
  $.ajax('/planner', {
    method: 'post',
    dataType: 'json', // data type you want back
    data: // what you're sending - needs to be a json object? needs a madeup key for each value
    {line1: line1,
    stationOn: stationOn,
    line2: line2,
    stationOff: stationOff}
  }).done(function(response) {
    console.log(`response back from getInfo ajax request was: ${response}`);
    tripDetails = response;
    renderTripDetails(tripDetails);
  }).fail(function() {
    alert('something bad happened, sorry.')
  });
}

const renderTripDetails = function(list) {
  $('li').remove();
  for (let i = 0; i < list.length; i++) {
    let $item = $('<li>').html(list[i]);
    // $item. = list[i];
    $item.appendTo('#trip-results ul')
  }
  $(`#trip-results`).removeClass('hidden').addClass('visible');
}
