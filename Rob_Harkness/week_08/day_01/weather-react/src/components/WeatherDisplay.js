import React, { PureComponent } from 'react';
import WeatherDesc from './WeatherDesc';
import CurrDate from './CurrDate';
import Location from './Location';
import Icon from './Icon';
import Temp from './Temp';
import MinMax from './MinMax';
import FeelsLike from './FeelsLike';

class WeatherDisplay extends PureComponent {
  constructor({ props }) {
    super(props);
    this.state = {
      bgImages: {
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
      }
    };
  }

  // const icons = new Skycons({
  //   color: 'white',
  //   resizeClear: true
  // });

  render() {
    const weatherData = this.props.data.weatherData;
    const dateNow = new Date(weatherData.daily.data[0].time * 1000).toDateString().split(' ');
    const temp = `${Math.round(weatherData.currently.temperature)}°C`;
    const minMax = `Min: ${Math.round(weatherData.daily.data[0].temperatureMin)}°C / Max: ${Math.round(
      weatherData.daily.data[0].temperatureMax
    )}°C`;
    const feelsLike=`Feels like: ${Math.round(weatherData.currently.apparentTemperature)}°C`;

    return (
      <div className="weather-display">
        <CurrDate date={dateNow} />
        <Location address={this.props.data.address} />
        <WeatherDesc currently={weatherData.currently.summary} />
        <Icon />
        <Temp temp={temp} />
        <MinMax minMax={minMax} />
        <FeelsLike feelsLike={feelsLike}/>
      </div>
    );
  }
}

WeatherDisplay.propTypes = {};

export default WeatherDisplay;
