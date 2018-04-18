import React, { PureComponent } from 'react';
import WeatherDisplay from './WeatherDisplay';
import SearchForm from './SearchForm';
import fetchWeather from '../controllers/fetchWeather';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: '',
      address: ''
    };
    this.setWeather = this.setWeather.bind(this);
  }
  async setWeather(query) {
    console.log(query);
    this.setState({ weatherData: '', address: '' });

    const data = await fetchWeather(query);
    this.setState({ weatherData: data.weatherData, address: data.formattedAddress });
  }

  componentDidMount() {
    this.setWeather();
  }

  render() {
    const weather = this.state.weatherData ? (
      <div>
        <WeatherDisplay data={this.state} />
      </div>
    ) : (
      <div>Loading...</div>
    );
    return (
      <div className="container">
        <h1>Current Weather</h1>
        {weather}
        <SearchForm setWeather={this.setWeather} />
      </div>
    );
  }
}

export default App;
