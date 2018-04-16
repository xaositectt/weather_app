import React from 'react';
import LineGraph from './linechart';

const RightSideAdvanced = (props) => {
  return (
    <div className="right side">
      <LineGraph  data={props.temperatures} dates={props.dates} />
      <LineGraph  data={props.temperatures} dates={props.dates} />
      <LineGraph  data={props.temperatures} dates={props.dates} />
    </div>
  )
};

export default RightSideAdvanced;