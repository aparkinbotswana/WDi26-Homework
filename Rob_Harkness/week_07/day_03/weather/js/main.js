//////////////////////////////////////////////////////////////////////////////////////////////
// using async/await with fetch for api/ajax/asynchronous calls is amazing!
// it allows you to assign the return value of a promise (fetch call for example) 
// to a variable using await keyword (inside an async function) and then use that
// variable further down the function just like you would with a normal variable assignment
// and the async function will keep track of when promises are retunred and assign and run the 
// code in the right order.
// basically you can write a normally structured function and not worry about callbacks or 
// chaining promises
//////////////////////////////////////////////////////////////////////////////////////////////

// custom functions
const qs = (query) => document.querySelector(query);
const createEl = (el) => document.createElement(el);
const appendEl = (child, parent) => parent.appendChild(child);

// runs when DOM ready
const main = () => {
  qs('#weather').innerHTML = '<h3>Please wait while the weather is loaded...</h3>';

  // get weather using current location
  showWeather();
  // search submit listener
  qs('#search').addEventListener('submit', (e) => {
    e.preventDefault();
    qs('#weather').innerHTML = '<h3>Please wait while the weather is loaded...</h3>';
    // gte weather using value from serch input
    showWeather(qs('#query').value);
  });
};

// asyn function for displaying weather in DOM
const showWeather = async (searchAddress = 0) => {
  const data = await getWeather(searchAddress); // await assignment of the return value from getWeather which makes all the api calls
  const weatherData = data.weatherData;
  // for the weather icons, using skycons.js library
  const icons = new Skycons({
    color: 'white',
    resizeClear: true
  });
  // set weather data variables from data
  const iconNow = data.weatherData.currently.icon;
  const dateNow = new Date(data.weatherData.daily.data[0].time * 1000).toDateString().split(' ');
  // key values for background image, key comes from iconNow
  const bgImages = {
    'clear-day': '../img/clear-day.jpg',
    'clear-night': '../img/clear-night.jpg',
    cloudy: '../img/cloudy.jpg',
    'partly-cloudy-day': '../img/partly-cloudy-day.jpg',
    rain: '../img/rain.jpeg',
    snow: '../img/snow.jpg',
    sleet: '../img/snow.jpg',
    wind: '../img/wind.jpg',
    fog: '../img/fog.jpg',
    'partly-cloudy-night': '../img/partly-cloudy-night.jpg'
  };
  // set bg image
  qs('body').style.backgroundImage = `url(${bgImages[iconNow]})`;
  // create weather info divs and set their content from weather variables
  const weatherDiv = qs('#weather');
  weatherDiv.innerHTML = '';

  const dateEl = createEl('h3');
  dateEl.textContent = `${dateNow[0]}, ${dateNow[1]} ${dateNow[2]}`;

  const locationEl = createEl('p');
  locationEl.textContent = data.formattedAddress;

  const currentlyEl = createEl('h2');
  currentlyEl.textContent = weatherData.currently.summary;

  const iconDiv = createEl('div');
  const iconEl = createEl('canvas');
  iconEl.id = 'icon-now';
  appendEl(iconEl, iconDiv);

  const tempEl = createEl('h2');
  tempEl.textContent = `${Math.round(weatherData.currently.temperature)}°C`;
  const tempMinMaxEl = createEl('p');
  tempMinMaxEl.innerHTML = `Min: <span class="min">${Math.round(
    weatherData.daily.data[0].temperatureMin
  )}°C</span> / Max: <span class="max">${Math.round(weatherData.daily.data[0].temperatureMax)}°C</span>`;

  const feelsLikeEl = createEl('p');
  feelsLikeEl.textContent = `Feels like: ${Math.round(weatherData.currently.apparentTemperature)}°C`;

  // append divs
  appendEl(dateEl, weatherDiv);
  appendEl(locationEl, weatherDiv);
  appendEl(currentlyEl, weatherDiv);
  appendEl(iconEl, weatherDiv);
  appendEl(tempEl, weatherDiv);
  appendEl(tempMinMaxEl, weatherDiv);
  appendEl(feelsLikeEl, weatherDiv);

  icons.set('icon-now', iconNow);
  icons.play();
};

// async function for calling apis and retrieving weather/location/address data
const getWeather = async (searchAddress = 0) => {
  let location;
  if (searchAddress) {
    // if a search address has been given as an argument then use google maps geocode to get lat and lon from address string (creates url here)
    const locationResults = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${searchAddress
        .split(' ')
        .join('+')}}&key=AIzaSyBW9MkinNsa0YbNZo_4SYrWFCo5rGswrMs`
    ).then((res) => res.json());
    // if there are no results from address to lat-lon lookup then show message in DOM
    if (locationResults.status === 'ZERO_RESULTS') {
      qs('#weather').innerHTML = `<h3>Cannot find:</h3><h3><em>${searchAddress}</em></h3><h3>Please search again</h3>`;
    }
    // create location object, the same structure that would be returned from geolocate call if no address was supplied
    location = {
      location: {
        lat: locationResults.results[0].geometry.location.lat,
        lng: locationResults.results[0].geometry.location.lng
      }
    };
  } else {
    // if there is no address argument (ie when page is first loaded) then use geolocate to get approx lat-lon
    const locationUrl =
      'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBW9MkinNsa0YbNZo_4SYrWFCo5rGswrMs';

    location = await fetch(locationUrl, { method: 'POST' }).then((res) => res.json());
  }
  //  darksy wetaher api url which doesnt do cors but someone has very nicely created a little heroku app/api
  //that will allow you to call a non cors api from anywhere by just appending the api url you want to call to the end of the heroku app url
  const weatherUrl = `https://cors-anywhere.herokuapp.com/https://api.forecast.io/forecast/206bf30a98c8331e37e68b65ff38ef33/${
    location.location.lat
  },${location.location.lng}?units=si`;
  //  geocode api url with lat-lon for reverse geocode to get a nicely formatted address to display
  const addressUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.location.lat},${
    location.location.lng
  }&key=AIzaSyBW9MkinNsa0YbNZo_4SYrWFCo5rGswrMs`;

  // await assignments from fetching weather and address data
  const address = await fetch(addressUrl).then((res) => res.json());
  const formattedAddress = address.results[0].formatted_address;

  const weatherData = await fetch(weatherUrl).then((res) => res.json());

  return { weatherData, formattedAddress };
};

document.addEventListener('DOMContentLoaded', main);
