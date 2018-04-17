import React from 'react';
import LineGraph from './linechart';

const RightSideAdvanced = (props) => {
  return (
    <div className="right side">
      <div className="graph top"> 
        <p className="charttext">wind </p>
        <LineGraph  data={props.wind} dates={props.dates} type="Wind speed, m/s" error={props.error}/>
      </div>
      
      <div className="graph"> 
        <p className="charttext">clouds</p>
        <LineGraph  data={props.clouds} dates={props.dates} type="Cloudiness, %"/>  
      </div>
      
    </div>
  )
};

export default RightSideAdvanced;
