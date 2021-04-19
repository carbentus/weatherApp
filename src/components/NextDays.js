import React from 'react';
import './NextDays.css';

// const monthNames = [
// 	'January',
// 	'February',
// 	'March',
// 	'April',
// 	'May',
// 	'June',
// 	'July',
// 	'August',
// 	'September',
// 	'October',
// 	'November',
// 	'December',
// ];
// const weekDay = ['Sunday', 'Monday', 'Tueasday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const NextDays = (props) => {
	// const { currentTime } = props.day1;
	// const hour = currentTime.toLocaleTimeString([], { timeStyle: 'short' });
	// const dayName = weekDay[currentTime.getDay()];
	// const monthName = monthNames[currentTime.getMonth()];
	// const monthDay = currentTime.getDate();

	return (
		<section className="next-days">
			<h2>Next 5 days</h2>
			<div className="next-days--day">
				<div>
					<p className="next-days--value">Tue</p>
					<p className="next-days--desc">20/4</p>
				</div>
				<div>
					<p className="next-days--value">10&deg;</p>
					<p className="next-days--desc">Low</p>
				</div>
				<div>
					<p className="next-days--value">21&deg;</p>
					<p className="next-days--desc">High</p>
				</div>
				<div>
					<p className="next-days--value">IKONA</p>
					<p className="next-days--desc">icon</p>
				</div>
				<div>
					<p className="next-days--value">1024hPa</p>
					<p className="next-days--desc">Pressure</p>
				</div>
				<div>
					<p className="next-days--value">12m/s</p>
					<p className="next-days--desc">Wind</p>
				</div>
			</div>
		</section>
	);
};
export default NextDays;
