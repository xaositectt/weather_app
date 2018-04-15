import React from 'react';
import Titles from './components/titles';
import Form from './components/form'
import Weather from './components/weather'
import LineGraph from './components/linechart';
import WeatherData from './ajax/getweather';
import ChartText from './components/charttext'

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
        city: this.capitalize(data.city),
        country: data.country.toUpperCase(),
        humidity: data.humidity,
        description: data.description,
        forecastData: data.forecastTemp,
        forecastTimes: data.forecastTime,
        error: data.error,
      });
  }

  capitalize = (s) => s[0].toUpperCase() + s.slice(1);
  
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

      <div className="background">
        <div className="container">
          <div className="left side">
            <Titles city={this.state.city}/>
            <div className="graph">
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
          <div className="right side">
            <Form getWeather = {this.getWeather}/>
            <ChartText city={this.state.city} country={this.state.country}/>
            <LineGraph 
              temperatures={this.state.forecastData}
              dates={this.state.forecastTimes}
              />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
