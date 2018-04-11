const qs = (query) => document.querySelector(query);
const createEl = (el) => document.createElement(el);
const appendEl = (child, parent) => parent.appendChild(child);

const main = () => {
  showWeather();
  qs('#search').addEventListener('submit', (e) => {
    e.preventDefault();
    qs('#weather').innerHTML = '<h3>Please wait while the weather is loaded...</h3>';
    showWeather(qs('#query').value);
  });
};

const showWeather = async (searchAddress = 0) => {
  const data = await getWeather(searchAddress);
  const weatherData = data.weatherData;
  const icons = new Skycons({
    color: 'white',
    resizeClear: true
  });
  const iconNow = data.weatherData.currently.icon;
  const dateNow = new Date(data.weatherData.daily.data[0].time * 1000).toDateString().split(' ');
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
  qs('body').style.backgroundImage = `url(${bgImages[iconNow]})`;
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

const getWeather = async (searchAddress = 0) => {
  let location;
  if (searchAddress) {
    const locationResults = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${searchAddress
        .split(' ')
        .join('+')}}&key=AIzaSyBW9MkinNsa0YbNZo_4SYrWFCo5rGswrMs`
    ).then((res) => res.json());
    console.log(locationResults);

    if (locationResults.status === 'ZERO_RESULTS') {
      qs('#weather').innerHTML = `<h3>Cannot find:</h3><h3><em>${searchAddress}</em></h3><h3>Please search again</h3>`;
    }

    location = {
      location: {
        lat: locationResults.results[0].geometry.location.lat,
        lng: locationResults.results[0].geometry.location.lng
      }
    };
  } else {
    const locationUrl =
      'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBW9MkinNsa0YbNZo_4SYrWFCo5rGswrMs';

    location = await fetch(locationUrl, { method: 'POST' }).then((res) => res.json());
  }

  const weatherUrl = `https://cors-anywhere.herokuapp.com/https://api.forecast.io/forecast/206bf30a98c8331e37e68b65ff38ef33/${
    location.location.lat
  },${location.location.lng}?units=si`;

  const addressUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.location.lat},${
    location.location.lng
  }&key=AIzaSyBW9MkinNsa0YbNZo_4SYrWFCo5rGswrMs`;

  const address = await fetch(addressUrl).then((res) => res.json());
  const formattedAddress = address.results[0].formatted_address;

  const weatherData = await fetch(weatherUrl).then((res) => res.json());

  return { weatherData, formattedAddress };
};

document.addEventListener('DOMContentLoaded', main);
