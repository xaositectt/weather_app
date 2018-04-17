import React from 'react';

const Form = props => (

  <form onSubmit={props.getWeather}>
    <input type="text" name="city" placeholder="city" maxLength="15"/>
    <input type="text" name="country" placeholder="country" maxLength="15"/>
    <button>Get data</button>
  </form>
);

export default Form;
