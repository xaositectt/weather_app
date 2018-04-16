'use strict'

const axios = require('axios');

class WeatherData {

  async getData(city, country, type) {
    const apiKey = '553f94efb2565a49ff9a7fe5aa050558'; 
    const data = await axios.get(`https://api.openweathermap.org/data/2.5/${type}?q=${city},${country}&appid=${apiKey}&units=metric`);
    return data;   
  }

  async getForecastData(city, country) {
    const forecast = this.getData(city, country, 'forecast')
      .then(result => {
        const forecastData = this.createDateTempObject(result);
        forecastData.description = result.data.list[0].weather[0].description;
        forecastData.currentTemp = result.data.list[0].main.temp;
        forecastData.humidity = result.data.list[0].main.humidity;
        forecastData.city = city;
        forecastData.country = country;
        return forecastData;
      }).catch(err => {
        return err.response.data;
      })
      return forecast;
  }

  //sorting the data per 3 hours
  createDateTempObject(data) {
    let forecastData = {
      forecastTime: [],
      forecastTemp: [],
      forecastHumidity: [],
      forecastClouds: [],
      forecastWind: [],
      forecastDescription: [],
    };
    data.data.list.forEach((data, i) => {
      if (i % 8 === 0) {
        forecastData.forecastTime.push(this.convertTimeStamp(data.dt));
        forecastData.forecastTemp.push(data.main.temp);
        forecastData.forecastHumidity.push(data.main.humidity);
        forecastData.forecastClouds.push(data.clouds.all);
        forecastData.forecastWind.push(data.wind.speed);
        forecastData.forecastDescription.push(data.weather[0].description);
      }
    });
    return forecastData;
  }

  convertTimeStamp(unixTimestamp) {
    let a = new Date(unixTimestamp * 1000);
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let hour = a.getHours();
    let min = a.getMinutes();
    let sec = a.getSeconds();
    let time = hour + ':00' + ' ' + date + ' ' + month;
    return time;
  }
}

export default WeatherData;
