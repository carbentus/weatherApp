import React from 'react';
import './Result.css';

const Result = (props) => {
  const { date, city, country } = props.locationDate;
  const { sunrise, sunset, temp, pressure, wind, description } = props.weather;

  let content = null;

  if (!props.error && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

    content = (
      <>
        <div>
          Results for: <strong>{city}</strong>, {country}
        </div>
      </>
    );
  }
  return (
    <>
      <div className="result">
        {props.error
          ? `in our database there is no city: ${this.state.locationDate.city}`
          : content}
      </div>
    </>
  );
};

export default Result;
