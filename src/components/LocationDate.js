import React from 'react';
import './LocationDate.css';

const monthNames = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];
const weekDay = ['Sunday', 'Monday', 'Tueasday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const LocationDate = (props) => {
	const { city, country, currentTime } = props.locationDate;
	const hour = currentTime.toLocaleTimeString([], { timeStyle: 'short' });
	const dayName = weekDay[currentTime.getDay()];
	const monthName = monthNames[currentTime.getMonth()];
	const monthDay = currentTime.getDate();
	let content = null;

	if (!props.error && city) {
		content = (
			<>
				<h1 className="location--city-country">
					{city}, {country}
				</h1>
				<div className="location--date">
					{dayName} {monthDay}th {monthName}, {hour}
				</div>
			</>
		);
	}

	return <section className="location">{content}</section>;
};

export default LocationDate;
