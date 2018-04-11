//OpenWeatherMap - Weather API
//example of standard API call: api.openweathermap.org/data/2.5/weather?q=London
//example for temp in celcius metric: api.openweathermap.org/data/2.5/find?q=London&units=metric
//example of API call with API key: http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}

const searchWeather = function(city){

  console.log('Searching Open Weather Map for', city);

  const weatherURL = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric'+'&APPID=ccc359d3e27bfd80e0f874a48fad69f0';

  $.ajax(weatherURL, {
    type: 'GET',
    dataType: 'jsonp'
  }).done(showWeather)

};


const showWeather = function(results){
  console.log(results);
  $('#weather').append('<h2>Current weather for ' + results.name + ', ' + results. sys.country + '</h2>');
  $('#weather').append('<p><strong>Weather</strong>: ' + results.weather[0].main + '</p>');                        //weather is an array - at index 0 there is an object with main as a key
  $('#weather').append('<p><strong>Description</strong>: ' + results.weather[0].description + '</p>');             //weather is an array - at index 0 there is an object with description as a key
  $('#weather').append('<p><strong>Average Temperature</strong>: ' + results.main.temp + '&#8451;' + '</p>');      //main is a completely separate object with temp as a key
  $('#weather').append('<p><strong>Minimum Temperature</strong>: ' + results.main.temp_min + '&#8451;' + '</p>');  //main is an object with temp_min as a key
  $('#weather').append('<p><strong>Maximum Temperature</strong>: ' + results.main.temp_max + '&#8451;' + '</p>');  //main is an object with temp_max as a key
  $('#weather').append('<p><strong>Humidity</strong>: ' + results.main.humidity + '</p>');                         //main is an object with humidity as a key
};


$(document).ready(function(){
  $('#searchWeather').on('click', function(event){
    event.preventDefault();
    let city = $('#city').val();
    $('#weather').empty();
    searchWeather(city);
  });
});
