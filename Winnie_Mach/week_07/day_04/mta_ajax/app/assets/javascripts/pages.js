$(document).ready(function() {

let start_line;
let start_station;
let finish_line;
let finish_station;

    $('#start').on('change', function() {
      const value = $(this).val();
      const parts = value.split(',');
      start_line = parts[0];
      start_station = parts[1];
      console.log(start_line, start_station);
    })



    $('#finish').on('change', function() {
      const value = $(this).val();
      const parts = value.split(',');
      finish_line = parts[0];
      finish_station = parts[1];
      console.log(finish_line, finish_station);
    })



//sending from index to info (own server)
//getJSON(`/info/${start_line}/${start_station}`)
    $.getJSON('/info', {
      start_line: start_line,
      start_station: start_station,
      finish_line: first_line,
      finish_station: finish_station
    }).done(displayTrip)


//// Display Trip Function ////

  const displayTrip = function(results) {

      console.log(results);
    }








});
