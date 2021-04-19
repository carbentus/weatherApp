import React from 'react';
import './CurrentStats.css';
const CurrentStats = (props) => {
	const { tempMax, tempMin, wind, pressure, sunrise, sunset } = props.weather;
	const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString([], { timeStyle: 'short' });
	const sunsetTime = new Date(sunset * 1000).toLocaleTimeString([], { timeStyle: 'short' });
	return (
		<section className="current-stats">
			<div>
				<p className="current-stats--value">{tempMax}&deg;</p>
				<p className="current-stats--desc">High</p>
			</div>
			<div>
				<p className="current-stats--value">
					{wind}
					<span>m/s</span>
				</p>
				<p className="current-stats--desc">Wind</p>
			</div>
			<div>
				<p className="current-stats--value">{sunriseTime}</p>
				<p className="current-stats--desc">Sunrise</p>
			</div>
			<div>
				<p className="current-stats--value">{tempMin}&deg;</p>
				<p className="current-stats--desc">Low</p>
			</div>
			<div>
				<p className="current-stats--value">
					{pressure}
					<span>hPa</span>
				</p>
				<p className="current-stats--desc">Pressure</p>
			</div>
			<div>
				<p className="current-stats--value">{sunsetTime}</p>
				<p className="current-stats--desc">Sunset</p>
			</div>
		</section>
	);
};

export default CurrentStats;
