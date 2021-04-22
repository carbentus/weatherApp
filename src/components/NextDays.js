import React from 'react';
import './NextDays.css';

const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const weekDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const NextDays = (props) => {
  const days = props.forecast.days.slice(1, 6).map((day, index) => {
    const d = new Date(day.dt * 1000);
    const dayNumber = d.getDate();
    const monthName = monthNames[d.getMonth()];
    const dayName = weekDay[d.getDay()];
    const iconURL = `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;
    const description = `${day.weather[0].description}`;

    return (
      <div key={index}>
        <div className="next-days--day">
          <div className="next-days--tile date">
            <p className="next-days--value">{dayName}</p>
            <p className="next-days--desc">
              {dayNumber} {monthName}{' '}
            </p>
          </div>
          <div className="next-days--tile low-temp">
            <p className="next-days--value">{Math.round(day.temp.min)}&deg;</p>
            <p className="next-days--desc">Low</p>
          </div>
          <div className="next-days--tile high-temp">
            <p className="next-days--value">{Math.round(day.temp.max)}&deg;</p>
            <p className="next-days--desc">High</p>
          </div>
          <div className="next-days--tile forecast-icon">
            <p className="next-days--value">
              <img className="next-days--icon" src={iconURL} alt={description} />
            </p>
          </div>
          <div className="next-days--tile pressure">
            <p className="next-days--value">{day.pressure}hPa</p>
            <p className="next-days--desc">Pressure</p>
          </div>
          <div className="next-days--tile wind">
            <p className="next-days--value">{Math.round(day.wind_speed)}m/s</p>
            <p className="next-days--desc">Wind</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className="next-days">
      <h2>Next 5 days</h2>
      {days}
    </section>
  );
};
export default NextDays;
