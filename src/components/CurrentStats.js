import React from 'react';
import './CurrentStats.css';
const CurrentStats = (props) => {
  const { tempMax, tempMin, wind, pressure, sunrise, sunset } = props.weather;
  const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString([], { timeStyle: 'short' });
  const sunsetTime = new Date(sunset * 1000).toLocaleTimeString([], { timeStyle: 'short' });
  return (
    <section className="current-stats">
      <div>
        <div class="current-stats--value">{tempMax}&deg;</div>
        <div class="current-stats--desc">High</div>
        <div class="current-stats--value">{tempMin}&deg;</div>
        <div class="current-stats--desc">Low</div>
      </div>
      <div>
        <div class="current-stats--value">{wind}m/s</div>
        <div class="current-stats--desc">Wind</div>
        <div class="current-stats--value">{pressure}hPa</div>
        <div class="current-stats--desc">Pressure</div>
      </div>
      <div>
        <div class="current-stats--value">{sunriseTime}</div>
        <div class="current-stats--desc">Sunrise</div>
        <div class="current-stats--value">{sunsetTime}</div>
        <div class="current-stats--desc">Sunset</div>
      </div>
    </section>
  );
};

export default CurrentStats;
