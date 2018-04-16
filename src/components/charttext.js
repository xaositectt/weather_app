import React from 'react';

const ChartText = (props) => (
  
  <div className="charttext">
    {props.city && props.country && <span>{props.city}, {props.country} five day temperature forecast</span>}
  </div>
);

export default ChartText;
