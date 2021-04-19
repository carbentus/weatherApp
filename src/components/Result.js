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
				<div>
					Description: <strong>{description}</strong>
				</div>
				<div>
					Date: <strong>{date}</strong>
				</div>
				<div>
					Sunrise: <strong>{sunriseTime}</strong>
				</div>
				<div>
					Sunset:<strong> {sunsetTime}</strong>
				</div>
				<div>
					Temperature:<strong> {temp}</strong>
				</div>
				<div>
					Pressure: <strong>{pressure}</strong>
				</div>
				<div>
					Wind: <strong>{wind} km/h</strong>
				</div>
				<div>
					Description: <strong>{description}</strong>
				</div>
			</>
		);
	}
	return (
		<>
			<div className="result">
				{props.error ? `in our database there is no city: ${city}` : content}
			</div>
		</>
	);
};

export default Result;
