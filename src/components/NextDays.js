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

const NextDays = (props) => {
  const d = new Date();

  const days = props.forecast.days.slice(0, 5).map((day, index) => {
    // let monthNb = d.getMonth(day.dt);
    let dayNumber = d.getDay(day.dt);
    const monthName = monthNames[d.getMonth()];

    const iconURL = `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;
    const description = `${day.weather[0].description}`;

    return (
      <div key={index}>
        <div className="next-days--day">
          <div className="next-days--tile">
            <p className="next-days--value">
              {dayNumber} {monthName}
            </p>
            <p className="next-days--desc">day </p>
          </div>
          <div className="next-days--tile">
            <p className="next-days--value">{Math.round(day.temp.min)}&deg;</p>
            <p className="next-days--desc">Low</p>
          </div>
          <div className="next-days--tile">
            <p className="next-days--value">{Math.round(day.temp.max)}&deg;</p>
            <p className="next-days--desc">High</p>
          </div>
          <div className="next-days--tile">
            <p className="next-days--value">
              <img src={iconURL} alt={description} />
            </p>
          </div>
          <div className="next-days--tile">
            <p className="next-days--value">{day.pressure}hPa</p>
            <p className="next-days--desc">Pressure</p>
          </div>
          <div className="next-days--tile">
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
