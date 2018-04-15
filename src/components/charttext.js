import React from 'react';

const ChartText = (props) => (
  
  <div className="charttext">
    {props.city && props.country && <span>{props.city}, {props.country} five day weather forecast</span>}
  </div>
);

export default ChartText;
