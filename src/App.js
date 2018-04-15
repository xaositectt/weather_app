import React from 'react';
import Titles from './components/titles';
import Form from './components/form'
import Weather from './components/weather'
import LineGraph from './components/linechart';
import WeatherData from './ajax/getweather';

const apiKey = '553f94efb2565a49ff9a7fe5aa050558';

const ApiCall = new WeatherData();

class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    forecastData: undefined,
    forecastTimes: undefined,
    error: undefined
  }

  setStateData = (data) => {
      this.setState({
        temperature: data.currentTemp,
        city: data.city,
        country: data.country,
        humidity: data.humidity,
        description: data.description,
        forecastData: data.forecastTemp,
        forecastTimes: data.forecastTime,
        error: data.error,
      });
  }

  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const weatherData = await ApiCall.getForecastData(city, country);
    console.log(weatherData);

    if (weatherData) {
      this.setStateData(weatherData);
    } else {
      
    }
  }

  render() {
    return ( 

      <div class="background">
        <div class="container">
          <div class="left side">
            <Titles />
            <div className="graph">
              <LineGraph 
              temperatures={this.state.forecastData}
              dates={this.state.forecastTimes}
              />
            </div>
          </div>
          <div class="right side">
          <Form getWeather = {this.getWeather}/>
          <Weather 
          temperature={this.state.temperature} 
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          forecastTimes={this.forecastTimes}
          forecastData={this.forecastData}
          error={this.state.error}
          />
          </div>
        </div>
      </div>

    );
  }
}

export default App;
