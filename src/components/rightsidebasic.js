import React from 'react';
import Form from './form';
import ChartText from './charttext';
import LineGraph from './linechart';

const RightSideBasic = (props) => {
  return (
    <div  className="right side">
      <Form getWeather = {props.getWeather}/>
      <ChartText city={props.city} country={props.country}/>
      <LineGraph temperatures={props.temperatures} dates={props.dates}/>
    </div>
  )
}

export default RightSideBasic;
