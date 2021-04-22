import React from 'react';
import './Form.css';

const Form = (props) => {
  return (
    <form onSubmit={props.submit}>
      <input
        className="form-input"
        type="search"
        value={props.value}
        onChange={props.change}
        placeholder="City name..."
      />
    </form>
  );
};

export default Form;
