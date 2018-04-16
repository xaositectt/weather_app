import React from 'react';
import Titles from './titles';
import Weather from './weather';

const LeftSideBasic = (props) => {
  return (

    <div  className="left side">
      <Titles city={props.city}/>
      <Weather 
      temperature={props.temperature} 
      city={props.city}
      country={props.country}
      humidity={props.humidity}
      description={props.description}
      forecastTimes={props.forecastTimes}
      forecastData={props.forecastData}
       />

    </div>
  )
}

export default LeftSideBasic;
