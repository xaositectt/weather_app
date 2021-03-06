import React from 'react';
import LineGraph from './linechart';

const Weather = props => (
  // className="weather__info"
    <div>
      { props.city && props.country && <p className="weather__key">Location: <span className="weather__value">{props.city}, {props.country}</span></p>}        
      { props.temperature && <p className="weather__key">Temperature: <span className="weather__value">{props.temperature}°C</span></p> }
      { props.humidity && <p className="weather__key">Humidity: <span className="weather__value">{props.humidity}%</span></p> }
      { props.description && <p className="weather__key">Conditions: <span className="weather__value">{props.description}</span></p> }
      
    </div>

  );

export default Weather;
