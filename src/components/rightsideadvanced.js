import React from 'react';
import LineGraph from './linechart';

const RightSideAdvanced = (props) => {
  return (
    <div className="right side">
      <div className="graph top"> 
        <p className="charttext">wind speed</p>
        <LineGraph  data={props.wind} dates={props.dates} type="Wind speed" error={props.error}/>
      </div>
      
      <div className="graph"> 
        <p className="charttext">clouds</p>
        <LineGraph  data={props.clouds} dates={props.dates} type="clouds"/>  
      </div>
      {/* <div className="graph"> 
        <LineGraph  data={props.temperatures} dates={props.dates} />
      </div> */}
    </div>
  )
};

export default RightSideAdvanced;