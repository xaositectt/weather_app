import React from 'react';

const Form = props => (

  <form onSubmit={props.getWeather}>
    <input type="text" name="city" placeholder="city" maxLength="15"/>
    <input type="text" name="country" placeholder="country" maxLength="15"/>
    <button>Get data</button>
    { props.error && <p className="error">{props.error}</p> }
  </form>
);

export default Form;
