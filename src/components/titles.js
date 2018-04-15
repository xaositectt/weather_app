import React from 'react';

const Titles = (props) => (
  
  <div>
    <h1 className="titles">Weather Finder</h1>
    <p className="subtitles"> {props.city} weather conditions </p>
  </div>
);

export default Titles;
