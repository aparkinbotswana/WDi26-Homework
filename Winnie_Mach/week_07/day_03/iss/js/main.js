console.log("hi");

const state = {
  long: 0,
  lat: 0,
  map: undefined, // or can leave this out, because if map is left out will be undefined anyway.
  active: true // DOESN'T WORK
};

const getISS = function() {
  $.getJSON("http://api.open-notify.org/iss-now.json").done(updateCoords)
}

const updateCoords = function(info) {
  state.lat = parseFloat(info.iss_position.latitude); //turning the returned data which is a string to a number.
  state.long = parseFloat(info.iss_position.longitude);
  console.log(state.lat, state.long);
  displayCoords();
}

const displayCoords = function() {
  $("#display").html(`Lat: ${state.lat} and Long: ${state.long}`);
  if (state.map === undefined) { //If map doesn't exist inside state object at the top.
    state.map = new google.maps.Map(document.getElementById('map'), { //then create a map.With long fucking custom styling.
      center: {lat: state.lat, lng: state.long},
      zoom: 3,
      styles: [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "landscape.natural.landcover",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "landscape.natural.terrain",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#76d6ff"
      },
      {
        "weight": 3.5
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#005493"
      },
      {
        "weight": 1
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#005493"
      },
      {
        "weight": 3
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#7a81ff"
      },
      {
        "weight": 3
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text",
    "stylers": [
      {
        "color": "#424242"
      },
      {
        "visibility": "on"
      },
      {
        "weight": 8
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      },
      {
        "visibility": "on"
      }
    ]
  }
]
    });
  }
  const issMarker = new google.maps.Marker ({
    position: {lat: state.lat, lng: state.long},
    map: state.map,
    label: "ISS",
    icon: mapIcon
  });
  state.active = false; //DOESN'T WORK
}


//// Putting your long and lat on a map using google maps api ////////
let mapIcon;
if(state.active) {
  mapIcon = 'images/marker01.png'
} else {
  mapIcon = 'images/marker02.png'
};

//This initMap function is called by the <script> tag in html page. That loads before the dom.
function initMap() { //instead of making initMap create a map, calls my getISS function, which will create map eventually.
  state.active = false, //DOESN'T WORK
  getISS();
}
///////// DOM Stuff /////////

  $(window).on('load', function(){
    setInterval(getISS, 4000);
  })
