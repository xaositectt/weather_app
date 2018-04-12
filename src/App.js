import React from 'react';
import Titles from './components/titles';
import Form from './components/form'
import Weather from './components/weather'
import LineGraph from './components/linechart';
import Api from './ajax/apicall';

const apiKey = '553f94efb2565a49ff9a7fe5aa050558';

const ApiCall = new Api();

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
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-6 title-container">
                  <div className="titles">
                    <Titles />
                    </div>
                  
                  <div className="graph">
                    <LineGraph 
                    temperatures={this.state.forecastData}
                    dates={this.state.forecastTimes}
                    />
                  </div>
                </div>

                <div className="col-xs-6 form-container">
                  <Form getWeather = {this.getWeather}/> 
                  <div className="weather-info">
                    <Weather 
                    temperature={this.state.temperature} 
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                    />
                  </div>     
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
