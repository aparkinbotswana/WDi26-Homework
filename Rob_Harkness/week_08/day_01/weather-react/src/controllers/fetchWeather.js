const fetchWeather = async (searchAddress = 0) => {
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
        return false;
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

  export default fetchWeather;