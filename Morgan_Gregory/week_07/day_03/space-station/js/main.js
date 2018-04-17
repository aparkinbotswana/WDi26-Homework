const state = {};
state.long;
state.lat;
state.long2;
state.lat2;
let map;
let marker;
let marker2;

const spaceStationURL = function () {
  const stationURL = 'http://api.open-notify.org/iss-now.json';
  $.getJSON(stationURL, {}).done( updateCoordinates );
};

const updateCoordinates = function (results) {
  state.long = parseFloat(results.iss_position.latitude);
  state.lat = parseFloat(results.iss_position.longitude);
  state.long2 = (-33 - parseFloat(results.iss_position.latitude));
  state.lat2 = (151 - parseFloat(results.iss_position.longitude));
  displayCoordinates();
};

const displayCoordinates = function () {
  $('#spaceStation').html(`Longitude: ${state.long}, Latitude: ${state.lat}`);
  changeMarkerPosition(marker);
};

// https://stackoverflow.com/questions/12699300/move-google-map-center-javascript-api
function changeMarkerPosition(marker) {
    let latlng = new google.maps.LatLng(state.long, state.lat);
    marker.setPosition(latlng);
    // map.panTo(latling);
}

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 0, lng: 0},
    zoom: 3
  });
  marker = new google.maps.Marker ({
    position: {lat: state.lat, lng: state.long},
    map: map,
    label: "ISS"
  })
  marker2 = new google.maps.Marker ({
    position: {lat: state.lat2, lng: state.long2},
    map: map,
    label: "new"
  })
  window.setInterval(spaceStationURL, 1000); // timer wait 1 second call to call function
};
