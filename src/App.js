import React from 'react';
import Titles from './components/titles';
import Form from './components/form'
import Weather from './components/weather'
import LineGraph from './components/linechart';
import WeatherData from './ajax/getweather';
import ChartText from './components/charttext';
import RightSideBasic from './components/rightsidebasic';
import LeftSideBasic from './components/leftsidebasic';
import RightSideAdvanced from './components/rightsideadvanced';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

const apiKey = '553f94efb2565a49ff9a7fe5aa050558';

const ApiCall = new WeatherData();

class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    forecastTemp: undefined,
    forecastTimes: undefined,
    forecastHumidity: undefined,
    forecastClouds: undefined,
    forecastWind: undefined,
    forecastDescription: undefined,
    error: undefined,
  }

  setStateData = (data) => {
      this.setState({
        temperature: data.currentTemp,
        city: this.capitalize(data.city),
        country: data.country.toUpperCase(),
        humidity: data.humidity,
        description: data.description,
        forecastTemp: data.forecastTemp,
        forecastTimes: data.forecastTime,
        forecastHumidity: data.forecastHumidity,
        forecastClouds: data.forecastClouds,
        forecastWind: data.forecastWind,
        forecastDescription: data.forecastDescription,
        error: undefined,
      });
  }

  capitalize = (s) => s[0].toUpperCase() + s.slice(1);
  
  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const weatherData = await ApiCall.getForecastData(city, country);
    console.log(weatherData);

    if (!weatherData.message) {
      this.setStateData(weatherData);
    } else {
      this.setState({
        error: 'Invalid input data.',
      });
    }
  }

  render() {
    return ( 
      <HashRouter>
        <div className="background">
          
          <div className="links"><NavLink to="/" className="linkleft">basic</NavLink >
          <NavLink to="/advanced" className="linkright">more</NavLink></div>

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
            
            
            <Route path="/"  render={() => <RightSideBasic
                                                getWeather={this.getWeather}
                                                city={this.state.city}
                                                country={this.state.country}
                                                temperatures={this.state.forecastTemp}
                                                dates={this.state.forecastTimes}
                                                descriptions={this.state.forecastDescription}
                                                error={this.state.error}
                                                />} />
            
            <Route path="/advanced"  render={() => <RightSideAdvanced
                                                    city={this.state.city}
                                                    dates={this.state.forecastTimes}
                                                    humidity={this.state.forecastHumidity}
                                                    clouds={this.state.forecastClouds}
                                                    wind={this.state.forecastWind}
                                                    error={this.state.error}
                                                />} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
