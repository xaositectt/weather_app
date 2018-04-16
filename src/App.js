import React from 'react';
import Titles from './components/titles';
import Form from './components/form'
import Weather from './components/weather'
import LineGraph from './components/linechart';
import WeatherData from './ajax/getweather';
import ChartText from './components/charttext';
import RightSideBasic from './components/rightsidebasic';
import LeftSideBasic from './components/leftsidebasic';

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

          <LeftSideBasic 
           city={this.state.city}
           country={this.state.country}
           temperature={this.state.temperature}
           humidity={this.state.humidity}
           description={this.state.description}
           forecastTimes={this.forecastTimes}
           forecastData={this.forecastData}
          />

          <RightSideBasic
          getWeather={this.getWeather}
          city={this.state.city}
          country={this.state.country}
          temperatures={this.state.forecastData}
          dates={this.state.forecastTimes}
          />
          
        </div>
      </div>
    );
  }
}

export default App;
