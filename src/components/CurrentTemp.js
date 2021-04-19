import React from 'react';
import './CurrentTemp.css';

const CurrentTemp = (props) => {
	const { icon, temp, description } = props.weather;
	const iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;

	return (
		<section className="current-temp">
			<div className="current-temp--icon">
				<img className="current-temp--icon-img" src={iconURL} alt={description} />
			</div>
			<div className="current-temp--temp">
				<p className="current-temp--deg">{temp}&deg;</p>
				<p className="current-temp--desc">{description}</p>
			</div>
		</section>
	);
};
export default CurrentTemp;
