import React from 'react';
import Form from './form';
import ChartText from './charttext';
import LineGraph from './linechart';

const RightSideBasic = (props) => {
  return (
    <div  className="right side">
      <Form getWeather={props.getWeather} error={props.error}/>
      <ChartText city={props.city} country={props.country}/>
      <LineGraph data={props.temperatures} dates={props.dates}  type="Temperature, °C"/>  
      { props.error && <p className="error">{props.error}</p> }
    </div>
  )
}

export default RightSideBasic;
