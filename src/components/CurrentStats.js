import React from 'react';
import './CurrentStats.css';
const CurrentStats = (props) => {
  const { tempMax, tempMin, wind, pressure, sunrise, sunset } = props.weather;
  const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString([], { timeStyle: 'short' });
  const sunsetTime = new Date(sunset * 1000).toLocaleTimeString([], { timeStyle: 'short' });
  return (
    <section className="current-stats">
      <div>
        <div className="current-stats--value">{tempMax}&deg;</div>
        <div className="current-stats--desc">High</div>
        <div className="current-stats--value">{tempMin}&deg;</div>
        <div className="current-stats--desc">Low</div>
      </div>
      <div>
        <div className="current-stats--value">
          {wind}
          <span>m/s</span>
        </div>
        <div className="current-stats--desc">Wind</div>
        <div className="current-stats--value">
          {pressure}
          <span>hPa</span>
        </div>
        <div className="current-stats--desc">Pressure</div>
      </div>
      <div>
        <div className="current-stats--value">{sunriseTime}</div>
        <div className="current-stats--desc">Sunrise</div>
        <div className="current-stats--value">{sunsetTime}</div>
        <div className="current-stats--desc">Sunset</div>
      </div>
    </section>
  );
};

export default CurrentStats;
